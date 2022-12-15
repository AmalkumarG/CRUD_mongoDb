import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import AuthenticationService from '../../Service/AuthenticationService'
const Signup = ({navigation}) => {
    const [username,setUsername]=useState("abcccd")
    const [email,setEmail]=useState("abcccd@gmail.com")
    const [password,setPassword]=useState("password")
    const [statusUser,setStatusUser]=useState()
    const [statusEmail,setStatusEmail]=useState()
    const [message,setMessage]=useState("")
    const [login,setLogin]=useState(false)
    const registeruser=()=>{
        const user={
            username,email,password
            
        }
        AuthenticationService.register(user).then(res=>(console.log("abcdef",res.message),alert(res.message),
        res.status?setLogin(true):" "))
    }
    const chechUser=(type,value)=>{
      AuthenticationService.userexist(type,value).then(res=>{
        console.log(res.status);
        if(res.status){
          type=="username"?setStatusUser(true):""
          type=="email"?setStatusEmail(true):""
        }
        else{
          type=="username"?setStatusUser(false):""
          type=="email"?setStatusEmail(false):""
        }
        
      })
    }
    const inputstyle=(status)=>{
      switch(status){
        case true:return{...styles.inputs,borderColor:"green",borderWidth:1.5}
        case false:return{...styles.inputs,borderColor:"red",borderWidth:1.5}
        default:return styles.inputs
      }
    }
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
    <StatusBar/>
     <Text style={{position:"absolute",top:0,fontSize:20,fontWeight:"bold"}}>SignUp</Text>
      <TextInput placeholder="username" style={inputstyle(statusUser)} onChangeText={(a)=>setUsername(a)} onEndEditing={()=>chechUser("username",username)} />
      <TextInput placeholder="email"  style={inputstyle(statusEmail)} onChangeText={(a)=>setEmail(a)} onEndEditing={()=>chechUser("email",email)}/>
      <TextInput placeholder="password" style={styles.inputs} onChangeText={(a)=>setPassword(a)}/>
      <TouchableHighlight style={{width:200,height:45,borderRadius:10,backgroundColor:"#5e8ed1",justifyContent:"center",alignItems:"center",margin:15,elevation:20}}
      onPress={()=>registeruser()}>
        <Text style={{fontSize:20,color:"white"}}>Register</Text>
      </TouchableHighlight>
      <Text>{message}</Text>
    <Text>OR</Text>
      <TouchableHighlight style={{width:200,height:45,borderRadius:10,backgroundColor:"#5e8ed1",justifyContent:"center",alignItems:"center",margin:15,elevation:20}} 
        onPress={()=>{
          setEmail("")
          setPassword("")
          setUsername("")
          navigation.navigate("Login")}}>
          <Text  style={{fontSize:20,color:"white"}}>Login</Text>
        </TouchableHighlight>
      
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  inputs:{
    height:40,margin:10,fontSize:20,width:250,borderRadius:10,padding:10,elevation:10,backgroundColor:"#d0dff5"
  }
})