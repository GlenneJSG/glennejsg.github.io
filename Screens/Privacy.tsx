import React from 'react';
import { I18nManager,StyleSheet, Text, View, Linking} from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
export class Privacy extends React.Component {
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

  <Text style={{ fontSize: 20, marginLeft: 50, marginRight: 30, marginTop:20, marginBottom:40}}> {translate("Privacy")}
    </Text>
  <View style={{marginBottom: 80}}>
  <Button
  icon={
  <Icon
    name="undo"
    size={80}
    color='#2cc5ef'
  />
  }
  type='clear'
  onPress={() => navigation.pop()}
  />
  <Text  > {translate("Backto")}</Text>
  </View>
  <View>





</View>
</View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 80,
  },
});
