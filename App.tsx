import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { I18nManager,StyleSheet, Text, View, Image } from 'react-native';
import {QuestionScreen} from './Screens/QuestionScreen';
import {QuestionScreen2} from './Screens/QuestionScreen2';
import {QuestionScreen3} from './Screens/QuestionScreen3';
import {QuestionScreen4} from './Screens/QuestionScreen4';
import {GreenScreen} from './Screens/GreenScreen';
import {SendResults} from './Screens/SendResults';
import {RedScreen} from './Screens/RedScreen';
import {ResultsInfo} from './Screens/ResultsInfo';
import {AppInfo} from './Screens/AppInfo';
import {Privacy} from './Screens/Privacy';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";



const Stack = createStackNavigator();
const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require("./translations/en.json"),
  fr: () => require("./translations/fr.json")

};

const translate = memoize(
  (key, config?) => {
    return i18n.t(key, config);
  },
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear!();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {
    [languageTag]: (translationGetters as any)[languageTag]()
  };
  i18n.locale = languageTag;

};

export default function App() {


  return (
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="Q1" component={QuestionScreen} title='Re-Entry App'
       options={({navigation})=>({ title:"Re-Entry",
       headerTitleStyle: {
         color: 'white',
       },
          headerRight: ({navigate}) => (
            <Button
          icon={
            <Icon
              name="info-circle"
              size={30}
              color="white"
            />
          }
          type='clear'
          onPress={() => navigation.navigate('App Info')}
        />
      ),
      headerLeft: ({navigate}) => (
      <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),

     headerStyle: {
            backgroundColor: '#2cc5ef',
          },
        })}/>


        <Stack.Screen name="Q2" component={QuestionScreen2} title='Re-Entry App' options={({navigation})=>({title:"Re-Entry",
        headerTitleStyle: {
          color: 'white',
        },
           headerRight: () => (
             <Button
           icon={
             <Icon
               name="info-circle"
               size={30}
               color="white"
             />
           }
           type='clear'
           onPress={() => navigation.navigate('App Info')}
         />
       ),
       headerLeft: ({navigate}) => (
       <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),

      headerStyle: {
             backgroundColor: '#2cc5ef',
           },
           })}/>
         <Stack.Screen name="Q3" component={QuestionScreen3} title='Re-Entry App' options={({navigation})=>({ title:"Re-Entry",
         headerTitleStyle: {
           color: 'white',
         },
            headerRight: () => (
              <Button
            icon={
              <Icon
                name="info-circle"
                size={30}
                color="white"
              />
            }
            type='clear'
            onPress={() => navigation.navigate('App Info')}
          />
        ),
        headerLeft: ({}) => (
        <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),


       headerStyle: {
              backgroundColor: '#2cc5ef',
            },
            })}
          />
          <Stack.Screen name="Q4" component={QuestionScreen4} title='Re-Entry App' options={({navigation})=>({ title:"Re-Entry",
          headerTitleStyle: {
            color: 'white',
          },
             headerRight: () => (
               <Button
             icon={
               <Icon
                 name="info-circle"
                 size={30}
                 color="white"
               />
             }
             type='clear'
             onPress={() => navigation.navigate('App Info')}

           />
         ),
         headerLeft: ({navigate}) => (
         <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),

        headerStyle: {
               backgroundColor: '#2cc5ef',
             },
             })}/>
       <Stack.Screen name="Green Screen" component={GreenScreen} title='Re-Entry App' options={({navigation})=>({title:"Re-Entry",
       headerTitleStyle: {
         color: 'white',
       },
          headerRight: () => (
            <Button
          icon={
            <Icon
              name="info-circle"
              size={30}
              color="white"
            />
          }
          type='clear'
           onPress={() => navigation.navigate('App Info')}
        />
      ), headerLeft: ({navigate}) => (
      <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),
      headerStyle: {
             backgroundColor: '#A7E0a5',
           },
          })}/>
          
          <Stack.Screen name="Send Results" component={SendResults} title='Re-Entry App' options={({navigation})=>({title:"Re-Entry",
          headerTitleStyle: {
            color: 'white',
          },
             headerRight: () => (
               <Button
             icon={
               <Icon
                 name="info-circle"
                 size={30}
                 color="white"
               />
             }
             type='clear'
              onPress={() => navigation.navigate('App Info')}
           />
         ), headerLeft: ({navigate}) => (
         <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),
         headerStyle: {
                backgroundColor: '#A7E0a5',
              },
             })}/>
        <Stack.Screen name="Results Info" component={ResultsInfo} title='Re-Entry App' options={({navigation})=>({title:"Re-Entry",
        headerTitleStyle: {
          color: 'white',
        },
           headerRight: () => (
             <Button
           icon={
             <Icon
               name="info-circle"
               size={30}
               color="white"
             />
           }
           type='clear'
           onPress={() => navigation.navigate('App Info')}
         />
       ), headerLeft: ({navigate}) => (
       <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),headerStyle: {
              backgroundColor: '#2cc5ef',
            },
          })}/>
         <Stack.Screen name="App Info" component={AppInfo} title='Re-Entry App' options={({navigation})=>({title:"Re-Entry",
         headerTitleStyle: {
           color: 'white',
         },
             headerLeft: ({navigate}) => (
        <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),headerStyle: {
               backgroundColor: '#2cc5ef',
             },
          })}/>
          <Stack.Screen name="Privacy" component={Privacy} title='Re-Entry App' options={({navigation})=>({title:"Re-Entry",
          headerTitleStyle: {
            color: 'white',
          },
              headerLeft: ({navigate}) => (
         <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),headerStyle: {
                backgroundColor: '#2cc5ef',
              },
           })}/>
        <Stack.Screen name="Red Screen" component={RedScreen} title='Re-Entry App' options={({navigation})=>({ title:"Re-Entry",
        headerTitleStyle: {
          color: 'white',
        },
           headerRight: () => (
             <Button
           icon={
             <Icon
               name="info-circle"
               size={30}
               color="white"
             />
           }
           type='clear'
            onPress={() => navigation.navigate('App Info')}
         />
       ), headerLeft: ({navigate}) => (
       <Image source={require('./assets/HHAngus.png')}style={{width: 40, height:20, marginLeft:10 }} />),headerStyle: {
              backgroundColor: '#2cc5ef',
            },
           })}/>
     </Stack.Navigator>
    </NavigationContainer>


  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
