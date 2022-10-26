import { StatusBar, StyleSheet, Text, TextInput, View,TouchableHighlight, Alert, Button } from 'react-native'
import React,{useState} from 'react'
import AuthenticationService from './Service/AuthenticationService'

const Home = ({route,navigation}) => {
    // usernamedis.route.params.usernamedis
    console.log(route.params.usernamedis);
    const [username,setUsername]=useState(route.params.usernamedis)
    const [change,setChange]=useState()
    const changename=()=>{
        
        let user={username:username,
            changeusername:change}
        AuthenticationService.change(user).then((res)=>{
            console.log(res);
            alert(res.message)
            res.status?setUsername(change):""
            setChange("")
        })
    }
    const deleteAcc=()=>{
        Alert.alert("Alert","Are you sure you want to delete your account",[
            {text:"yes",onPress:()=>{
                AuthenticationService.deleteuser({username:username}).then((res)=>{
                console.log(res)
                res.status?navigation.navigate("Login"):alert("sorry try again")
            }
                )
            }},
            {text:"no"}
        ])
    }
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <StatusBar/>
      <Text style={{position:"absolute",top:0,fontSize:20,fontWeight:"bold"}}>Home</Text>
      <TextInput value={username} style={styles.inputs} onChangeText={(a)=>alert("cant change")} />
      <TextInput placeholder='change username' value={change} style={styles.inputs} onChangeText={(a)=>setChange(a)} />
      <TouchableHighlight style={{width:200,height:45,borderRadius:10,backgroundColor:"#5e8ed1",justifyContent:"center",alignItems:"center",margin:15,elevation:20}} onPress={()=>changename()}>
        <Text  style={{fontSize:20,color:"white"}}>ChangeUsername</Text>
    </TouchableHighlight>
    <TouchableHighlight style={{width:200,height:45,borderRadius:10,backgroundColor:"#5e8ed1",justifyContent:"center",alignItems:"center",margin:15,elevation:20}} onPress={()=>deleteAcc()}>
        <Text  style={{fontSize:20,color:"white"}}>Delete Account</Text>
    </TouchableHighlight>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    inputs:{
        height:40,margin:10,fontSize:20,width:250,borderRadius:10,padding:10,elevation:10,backgroundColor:"#d0dff5"
      }
})