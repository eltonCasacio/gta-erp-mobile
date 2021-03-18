import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, View} from 'react-native';

import Theme from '../../styles/Theme';

type SearchProps = {
  items: any;
  callback: Function;
};

const SearchPayslipDownload = ({items, callback}: SearchProps) => {
  const [selecteditem, setSelecteditem] = useState('');

  const pickers = items.map(({value}: any) => (
    <Picker.Item key={value} label={value} value={value} />
  ));

  const handleSelectedYear = (value: string) => {
    callback(value);
    setSelecteditem(value);
  };

  return (
    <View style={styles.Wrapper}>
      <Picker
        dropdownIconColor={Theme.Colors.white}
        selectedValue={selecteditem}
        style={styles.pickerStyle}
        onValueChange={(itemValue) => handleSelectedYear(String(itemValue))}>
        <Picker.Item key={'pesquisar'} label="Pesquisar" />
        {!!pickers && pickers}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerStyle: {
    color: Theme.Colors.white,
  },
  Wrapper: {
    borderBottomWidth: 1,
    borderColor: Theme.Colors.white,
  },
});

export default SearchPayslipDownload;
