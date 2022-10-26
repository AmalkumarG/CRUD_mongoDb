import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import AuthenticationService from './Service/AuthenticationService'
const Login = ({navigation}) => {
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
   
    const login=()=>{
        let user={
            username,
            password
        }
       
        AuthenticationService.login(user).then((res)=>{
            console.log(res);
            
            res.status?(navigation.navigate("Home",{usernamedis:username}),setPassword(""),setUsername("")):""
        })
    }
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
      <TextInput placeholder='username' value={username} style={styles.inputs} onChangeText={(a)=>setUsername(a)} />
      <TextInput placeholder='password' value={password} style={styles.inputs}  onChangeText={(b)=>setPassword(b)} />
    <TouchableHighlight style={{width:200,height:45,borderRadius:10,backgroundColor:"#5e8ed1",justifyContent:"center",alignItems:"center",margin:15,elevation:20}} onPress={()=>login()}>
        <Text  style={{fontSize:20,color:"white"}}>Login</Text>
    </TouchableHighlight>
    
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    inputs:{
        height:40,margin:10,fontSize:20,width:250,borderRadius:10,padding:10,elevation:10,backgroundColor:"#d0dff5"
      }
})