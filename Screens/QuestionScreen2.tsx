import React, {useState} from 'react';
import { I18nManager,StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {Question} from './QuestionComponent'
import { useNavigation } from '@react-navigation/native';

import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";

const translationGetters = {

  // lazy requires (metro bundler does not support symlinks)
  en: () => require("../translations/en.json"),
  fr: () => require("../translations/fr.json")
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



export class QuestionScreen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };

    setI18nConfig(); // set initial config
  }


  componentWillUnmount() {
    RNLocalize.removeEventListener("change", this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year,
    });
    RNLocalize.addEventListener("change", this.handleLocalizationChange);
  }

  render() {
         const { navigation } = this.props;
    return (

    <View style={styles.container}>



      <Question question={translate("Q2")} number='2' />

      <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around', fontSize: 280}}>

        <Button
        title={translate("yes")}
        titleStyle={{fontSize: 40, color: '#2cc5ef'}}
        type="clear"
        onPress={() => navigation.navigate('Red Screen')}
        />

        <Button
        title={translate("no")}
        type="clear"
        titleStyle={{fontSize: 40, color: '#2cc5ef'}}
        onPress={() => navigation.navigate('Q3')}

        />


      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
flexWrap: 'wrap',

    fontSize: 20,
  },

});

export default function(props) {
  const navigation = useNavigation();

  return <QuestionScreen2/>;
}
