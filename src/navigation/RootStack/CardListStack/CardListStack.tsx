import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Field, Form} from 'react-final-form';
import {Alert, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyPrayers} from '../../../components/Desc/components/Column/components/MyPrayers';
import {Subscribed} from '../../../components/Desc/components/Column/components/Subscribed';
import {Input} from '../../../components/ui/Input';

const Tab = createMaterialTopTabNavigator();

const CardListStack = () => {
  const onSubmit = () => {
    Alert.alert('touch');
  };
  return (
    <SafeAreaView>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <>
            <View>
              <Field name="AddPrayer">
                {({input}) => (
                  <Input
                    // onChangeText={input.onChange}
                    placeholder="useless placeholder"
                    plus={true}
                  />
                )}
              </Field>
            </View>
          </>
        )}
      />
      <Tab.Navigator>
        <Tab.Screen name="MYPRAYERS" component={MyPrayers} />
        <Tab.Screen name="SUBSCRIBED" component={Subscribed} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default CardListStack;
