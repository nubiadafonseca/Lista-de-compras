import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import ItemCompra from './ItemCompra';
import InputItemCompra from './InputItemCompra';
import uuid from 'react-uuid';

const ListaCompras = () => {
  //Estados
  const [lista, setLista] = useState([]);
  //Funções
  function adicionarNaLista(nomeItem) {
    setLista([...lista, { id: uuid(), nome: nomeItem }]);
  }

  const removerDaLista = (item) => {
    const listaTemp = lista.filter((elemento) => elemento.id != item.id);
    setLista(listaTemp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Lista de Compras
        <AntDesign name="shoppingcart" size={30} color="#f9fafb" />
      </Text>

      {/*Input */}
      <InputItemCompra adicionar={adicionarNaLista} />

      {/* Exibindo a lista*/}
      <FlatList
        data={lista} //pega o estado
        renderItem={({ item }) => (
          <ItemCompra itemCompra={item} remover={removerDaLista} />
        )}
      />
    </View>
  );
};

export default ListaCompras;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  titulo: {
    color: '#f9fafb',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
});
