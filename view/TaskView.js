
import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import taskViewModel from '../viewmodels/TaskViewModel';

const TaskView = observer(() => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    taskViewModel.addTask(title);
    setTitle('');
  };

  return (
    <View style={styles.container}>
    <View style={{margin:20}}>
    <Text style={{color:'grey',fontSize:20,fontWeight:"bold"}}>Todo App</Text>
    </View>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task"
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={taskViewModel.tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    width: '80%',
    backgroundColor:'#DEDEDE',
    borderRadius:10
    
  },
  task: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
    width: '100%'
  },
  list: {
    margin:20,
    width: '100%',
    alignItems: 'center',
  },
});

export default TaskView;
