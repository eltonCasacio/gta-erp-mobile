import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, View} from 'react-native';

import Theme from '../../styles/Theme';

type SearchProps = {
  items: string[];
};

const Search = ({items = []}: SearchProps) => {
  const [selecteditem, setSelecteditem] = useState('');

  const pickers = items.map((item) => (
    <Picker.Item key={item} label={String(item)} value={item} />
  ));

  return (
    <View style={styles.Wrapper}>
      <Picker
        dropdownIconColor={Theme.Colors.white}
        selectedValue={selecteditem}
        style={styles.pickerStyle}
        onValueChange={(itemValue) => setSelecteditem(String(itemValue))}>
        <Picker.Item label="Pesquisar" value={0} />
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

export default Search;
