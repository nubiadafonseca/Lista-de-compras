import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { CheckBox } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons';

const ItemCompra = ({ itemCompra }) => {
  const [marcado, setMarcado] = React.useState(false);

  function removerItem() {
    Alert.alert('', 'Deseja Remover?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () => remover(itemCompra),
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <CheckBox
        checked={marcado}
        containerStyle={styles.checkboxContainer}
        checkedColor="#9ca3af"
        uncheckedColor="#f9fafb"
        onPress={() => setMarcado(!marcado)}
        title={itemCompra.nome}
        textStyle={[styles.nomeItem, marcado && styles.itemMarcado]}
      />
      <TouchableOpacity onPress={() => remover(itemCompra)}>
        <AntDesign name="minuscicle" size={28} color="#f9fafb" />
      </TouchableOpacity>
      {/*<Text style={[styles.nomeItem, marcado && styles.itemMarcado]}>
        {itemCompra.nome}
  </Text> */}
    </View>
  );
};

export default ItemCompra;

const styles = StyleSheet.create({
  nomeItem: {
    color: '#f9fafb',
    fontSize: 20,
    padding: 10,
  },
  container: {
    margin: 5,
    backgroundColor: '#374150',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
  },
  itemMarcado: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
});
