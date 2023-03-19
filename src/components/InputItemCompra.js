import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Input } from '@rneui/base';

const InputItemCompra = ({ adicionar }) => {
  const [textoInput, setTextoInput] = useState('');

  function submeterInput() {
    //console.warn(textoInput);
    adicionar(textoInput);
    setTextoInput('');
  }

  return (
    <View>
      <Input
        placeholder="Adicionar item para comprar"
        inputStyle={styles.input}
        leftIcon={{ type: 'material', name: 'add', iconStyle: styles.icone }}
        autoCorrect={false}
        value={textoInput}
        onChangeText={setTextoInput}
        onSubmitEditing={submeterInput}
        // placeholderTextColor='coral' //muda a cor do placeholder
      />
    </View>
  );
};

export default InputItemCompra;

const styles = StyleSheet.create({
  input: {
    color: '#f9fafb',
  },
  icone: {
    color: '#f9fafb',
  },
});
