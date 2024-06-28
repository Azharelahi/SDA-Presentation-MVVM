
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaskView from './view/TaskView.js';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TaskView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
