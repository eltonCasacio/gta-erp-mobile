import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, View} from 'react-native';

import Theme from '../../styles/Theme';

type YearsProps = {
  years: string[];
};

const Search = ({years = []}: YearsProps) => {
  const [language, setLanguage] = useState('java');

  const pickers = years.map((year) => (
    <Picker.Item key={year} label={String(year)} value={year} />
  ));

  return (
    <>
      <Picker
        dropdownIconColor={Theme.Colors.white}
        selectedValue={language}
        style={styles.pickerStyle}
        onValueChange={(itemValue) => setLanguage(String(itemValue))}>
        <Picker.Item label="Pesquisar" value={0} />
        {!!pickers && pickers}
      </Picker>
      <View style={styles.line} />
    </>
  );
};

const styles = StyleSheet.create({
  pickerStyle: {
    color: Theme.Colors.white,
  },
  line: {
    borderWidth: 0.3,
    borderColor: Theme.Colors.white,
  },
});

export default Search;
