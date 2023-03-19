import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ListaCompras from './src/components/ListaCompras';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <ListaCompras />
      </SafeAreaView>

      <StatusBar barStyle="light-content" backgroundColor="#111827" />
    </SafeAreaProvider>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
});
