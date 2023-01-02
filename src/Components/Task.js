import React from "react";
import { View,StyleSheet,Text, TextInput, KeyboardAvoidingView } from "react-native";

const Task = (props) =>{
    return(
        <View style={styles.main}>
            <View style={styles.Title} >
                <View style={{width:30,height:30,backgroundColor:'blue',borderRadius:5,opacity:0.5}}></View>
                <Text style={styles.text}>{props.message}</Text>
                <View style={styles.circle}></View>
            </View>

           
            
        </View>
    )
}


const styles = StyleSheet.create({

    Title:{
        marginTop:15,
        width:300,
        marginLeft:40,
        backgroundColor:'white',
        padding:6,
        color:'black',
        borderRadius:5,
        overflow:'hidden',
        fontSize:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        display:'flex',
        
    },
    text:{
        flexDirection:'row',
        justifyContent:'center',
        display:'flex',
        marginTop:7,
        marginLeft:10,
        textAlign:"left",


    },
    circle:{
        width:15,
        height:15,
        backgroundColor:'skyblue',
        borderColor:'blue',
        borderWidth:1,
        borderRadius:50,
        overflow:'hidden',
        marginRight:3

    }
    
})



export default Task;