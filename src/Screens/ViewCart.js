import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon1 from "react-native-vector-icons/MaterialIcons";
import { useSelector } from 'react-redux';
const ViewCart = ({navigation}) => {
 
    const cart=useSelector(state=>state.Reducer)

  return (
    <View style={{marginRight:15}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
      <Icon1 name="shopping-cart" size={25} color="gray" />
    </TouchableOpacity>
    <View style={{position:"absolute",top:-10,right:-14,backgroundColor:"red",borderRadius:10,width:20,height:"auto",justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>{cart.length}</Text>
    </View>
    </View>

  )
}

export default ViewCart

const styles = StyleSheet.create({})