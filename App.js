import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import LoginPage from './src/Pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task from './src/Components/Task';
const messages = [
  {
    task: 'one'
  },
  {
    task: 'two'
  },
  {
    task: 'three'
  },
  {
    task: 'four'
  },

]


export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [task,setTask] = useState()
  const [taskArray,setTaskArray] = useState([])
  
  const addTask = () =>{
    
    setTaskArray([...taskArray,task])
    setTask(null)


    console.log(taskArray)

  }

  return (
    <>
      <View style={styles.body}>
        <View >
          <Text style={styles.title}> Today's Task</Text>
          <KeyboardAvoidingView  style={{position:'fixed',width:'100%',flexDirection:'row',maxWidth:360}}>
            <TextInput style={{width:'90%',marginLeft:5,backgroundColor:'white',paddingTop:7.5,paddingBottom:7.5
            ,paddingLeft:10,
          }} placeholder="Enter new task" onChangeText={text=>setTask(text)} value={task}/>
            <TouchableOpacity onPress={()=>addTask()}>
              <View>
                <Text style={{fontSize:18,backgroundColor:'blue',padding:15,color:'white',margin:2}}>+</Text>
              </View>
            </TouchableOpacity>

          </KeyboardAvoidingView>

          {taskArray.map((res) => <Task message={res} />)}

         

        </View>

      </View>

    </>
  );
}

const styles = StyleSheet.create({
  title: {

    fontStyle: 'normal',
    fontFamil: "roboto",
    fontWeight: '500',
    marginTop: 40,
    marginLeft: 10,
    marginBottom:5,
    // backgroundColor: 'white',
    width: 150,
    padding: 4,
    borderRadius: 8,
    overflow: 'hidden',
    fontSize: 24,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'






  },
  body: {
    backgroundColor: '#d2d4d6',
    height: "100%",


  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 0,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: 'white'

  },
})

