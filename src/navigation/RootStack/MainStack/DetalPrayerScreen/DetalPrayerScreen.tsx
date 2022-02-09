import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useMemo} from 'react';
import {Field, Form} from 'react-final-form';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Add} from '../../../../components/icons/Add';
import {Arrow} from '../../../../components/icons/Arrow';
import {PrayerLine} from '../../../../components/icons/PrayerLine';
import {Input} from '../../../../components/ui/Input';
import {Loader} from '../../../../components/ui/Loader';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';
import {useAppSelector} from '../../../../hooks/useAppSelect';
import {
  createCommentAction,
  putCommentsAction,
} from '../../../../store/comments/actions';
import {CommentCreate, PrayersType} from '../../../../types';
import AppRoutes from '../../../route';
import {Comment} from './components/Comment';

type DetalPrayerScreenNavigationStack = {
  [AppRoutes.ColumnScreen]: {prayer: PrayersType};
};
type ProfileNavigation =
  NativeStackNavigationProp<DetalPrayerScreenNavigationStack>;
type DetalPrayerProps = {
  navigation: ProfileNavigation;
  route: RouteProp<DetalPrayerScreenNavigationStack>;
};

const DetalPrayerScreen: React.FC<DetalPrayerProps> = ({route: {params}}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(putCommentsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const allComments = useAppSelector(state => state.comment.comments);
  const foundPrayer = useAppSelector(state =>
    state.prayer.prayers.find(item => item.id === params.prayer.id),
  );
  const comments = useMemo(() => {
    return allComments.filter(comment =>
      foundPrayer!.commentsIds?.includes(comment.id),
    );
  }, [allComments, foundPrayer]);

  const createComment = (values: CommentCreate) => {
    const item = {body: values.body, prayerId: params.prayer.id};
    dispatch(createCommentAction(item));
  };
  const isLoading = useAppSelector(state => state.comment.isLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SafeAreaView style={styles.header}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow color={'#FFF'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('lol', params.prayer.title)}>
            <PrayerLine color={'#FFF'} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.headerText}>{params.prayer.title}</Text>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.lastPrayerWrapper}>
          <View style={styles.line} />
          <Text style={styles.text}>Last prayed 8 min ago</Text>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.infoWrapper}>
              <Text style={styles.hideText}>July 25 2017</Text>
              <Text style={styles.smallText}>Date Added</Text>
              <Text style={styles.blueText}>Opened for 4 days</Text>
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.hideText}>123</Text>
              <Text style={styles.smallText}>Times Prayed Total</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.infoWrapper}>
              <Text style={styles.hideText}>63</Text>
              <Text style={styles.smallText}>Times Prayed by Me</Text>
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.hideText}>60</Text>
              <Text style={styles.smallText}>Times Prayed by Others</Text>
            </View>
          </View>
        </View>
        <View style={styles.memberWrapper}>
          <Text style={styles.blueText}>MEMBERS</Text>
          <View style={styles.rowContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('./images/avatar2.png')} />
            </View>
            <View style={styles.imgContainer}>
              <Image source={require('./images/avatar1.png')} />
            </View>
            <TouchableOpacity style={styles.imgContainer}>
              <Add />
            </TouchableOpacity>
          </View>
          <Text style={styles.blueText}>COMMENTS</Text>
        </View>
        <View>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </View>
        <Form
          onSubmit={createComment}
          validate={values => {
            const errors = {} as CommentCreate;
            if (!values.body) {
              errors.body = 'Required';
            }
            return errors;
          }}
          render={({form}) => (
            <Field name="body">
              {({input, meta}) => (
                <View>
                  <Input
                    onChangeText={input.onChange}
                    value={input.value}
                    stroke={true}
                    strokePress={form.submit}
                    placeholder="Add a comment..."
                    placeholderTextColor="#9C9C9C"
                  />
                  {meta.error && meta.touched && (
                    <Text style={styles.error}>{meta.error}</Text>
                  )}
                </View>
              )}
            </Field>
          )}
        />
      </ScrollView>
    </>
  );
};

export default DetalPrayerScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#BFB393',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    color: '#FFF',
    fontSize: 17,
    lineHeight: 27,
    alignSelf: 'flex-start',
    padding: 15,
  },
  mainContainer: {
    backgroundColor: '#FFF',
    paddingBottom: 10,
  },
  text: {
    fontSize: 17,
    lineHeight: 20,
    paddingVertical: 15,
  },
  line: {
    borderLeftColor: '#AC5253',
    borderLeftWidth: 2,
    paddingRight: 15,
    height: 24,
  },
  lastPrayerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoWrapper: {
    borderColor: '#E5E5E5',
    borderWidth: 1,
    width: '50%',
    height: 108,
    alignItems: 'flex-start',
    paddingTop: 26,
    paddingHorizontal: 15,
  },
  borderRight: {borderRightWidth: 1},
  hideText: {
    fontSize: 22,
    lineHeight: 26,
    color: '#BFB393',
    marginBottom: 6,
  },
  smallText: {fontSize: 13, lineHeight: 15},
  blueText: {fontSize: 13, lineHeight: 15, color: '#72A8BC'},
  memberWrapper: {
    borderColor: '#E5E5E5',
    borderWidth: 1,
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  imgContainer: {
    marginRight: 7,
    marginTop: 15,
    marginBottom: 30,
  },
  error: {
    marginLeft: 22,
    color: 'red',
    marginTop: 5,
  },
});
