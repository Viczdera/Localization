import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {options} from './settingOptions';
import localized from './src/localization/getLocale';

const App = () => {
  const renderOptions = options.map((value, i) => {
    return (
      <TouchableOpacity key={i} style={AppStyles.optionContainer}>
        <Text style={AppStyles.text}>{localized(value.option)}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={AppStyles.content}>
        <View>
          <Text style={[AppStyles.header, AppStyles.text]}>{localized('home.settings')}</Text>
        </View>
        {renderOptions}
      </View>
    </SafeAreaView>
  );
};

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa6b55',
  },
  content: {
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  optionContainer: {
    padding: 15,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
});

export default App;
