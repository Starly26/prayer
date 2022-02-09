import React, {useState} from 'react';
import {Field, Form} from 'react-final-form';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Delete} from '../../../../../../components/icons/Delete';
import {Input} from '../../../../../../components/ui/Input';
import {useAppDispatch} from '../../../../../../hooks/useAppDispatch';
import {useAppSelector} from '../../../../../../hooks/useAppSelect';
import {
  changeCommentAction,
  deleteCommentAction,
} from '../../../../../../store/comments/actions';
import {CommentType, CommentCreate} from '../../../../../../types';

type CommentProps = {
  comment: CommentType;
};

const Comment: React.FC<CommentProps> = ({comment}) => {
  const user = useAppSelector(store => store.user.name);
  const dispatch = useAppDispatch();
  const [ischangeInputActive, setIsChangeInputValue] = useState(false);
  const changeComment = (value: CommentCreate) => {
    const item = {body: value.body, id: comment.id};
    dispatch(changeCommentAction(item));
    setIsChangeInputValue(false);
  };

  const createDate = (data: Date) => {
    const currentDate = new Date().getDate();
    const dateMessage = new Date(data).getDate();
    if (currentDate === dateMessage) {
      return 'Cегодня';
    }
    if (currentDate - dateMessage === 1) {
      return 'Вчера';
    }

    return currentDate;
  };
  return (
    <View style={styles.container}>
      {ischangeInputActive ? (
        <Form
          onSubmit={changeComment}
          validate={values => {
            const errors = {} as CommentCreate;
            if (values.body && values.body.length < 1) {
              errors.body = 'Required';
            }
            return errors;
          }}
          render={({form}) => (
            <Field name="body" defaultValue={comment.body}>
              {({input, meta}) => (
                <View>
                  <Input
                    onChangeText={input.onChange}
                    value={input.value}
                    stroke={true}
                    strokePress={form.submit}
                  />
                  {meta.error && meta.touched && (
                    <Text style={styles.error}>{meta.error}</Text>
                  )}
                </View>
              )}
            </Field>
          )}
        />
      ) : (
        <View style={styles.rowContainer}>
          <View style={styles.rowWrapper}>
            <View style={{marginRight: 10}}>
              <Image source={require('../../images/avatar.png')} />
            </View>
            <TouchableOpacity
              style={styles.textContainer}
              onLongPress={() => setIsChangeInputValue(true)}>
              <Text style={styles.text}>{user}</Text>
              <Text style={styles.text}>{comment.body}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.data}>{createDate(comment.created)}</Text>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(deleteCommentAction(comment.id))}>
            <Delete />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textContainer: {marginRight: 6},
  text: {color: '#514D47', fontSize: 17},
  data: {color: '#9C9C9C', fontSize: 13},
  error: {
    marginLeft: 22,
    color: 'red',
    marginTop: 5,
  },
});
