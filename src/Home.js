import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TrainSchedulePage from './traindata';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TrainSchedulePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginTop: 30,
  },
});

export default App;