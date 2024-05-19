import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false) 
  
  function startAddGoalHandler (){
    setModalIsVisible(true)
  }

  function endAddGoalHandler (){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
      
    ]);
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <>
    <ImageBackground source={require('./assets/Images/fons.png')} resizeMode='cover' style={styles.rootScreen}>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <TouchableOpacity style={styles.button} onPress={startAddGoalHandler} activeOpacity={0.5}>
          <Text style={styles.buttonText}>NOU OBJECTIU</Text>        
        </TouchableOpacity>  
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id}
            renderItem={itemData => (
              <GoalItem 
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            )}
          />
        </View>
      </View>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  button: {
    borderWidth: 2.7,
    borderColor: '#5c6bf3',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  rootScreen:{
    flex: 1
  }
});