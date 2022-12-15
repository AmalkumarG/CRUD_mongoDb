import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import { useSelector,useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Products = ({products,navigation}) => {
    const [ratingICON,setRatingIcon]=useState([1,2,3,4,5])
    const recent=useSelector(state=>state.recentView)
  const dispatch=useDispatch()

  const prodDetails=()=>{

    
   
 navigation.navigate("ProductDetails",{products:products,price:products.item.price})
  }
   
  return (
    <View >
    <TouchableOpacity onPress={()=> prodDetails()} style={{flex:1,padding:10}} >
    <View style={{borderRadius:10,backgroundColor:"white",height:"auto",width:160,padding:10,}}>
    <Image source={{uri:products.item.image}} resizeMode={"contain"} style={{height:200,width:140,borderRadius:10}}/>
    <Text style={{width:150,}}>{products.item.title}</Text>
    <Text>Price : {products.item.price}</Text>
    <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
    <Text>Ratings</Text>
    {
        ratingICON.map((a,index)=>{
            return(
               a<=products.item.rating.rate?<Icon key={index} name='star' color={"blue"} />:<Icon key={index} name='star' color={"red"}/>
                
            )
        })
    }

    </View>
   
    </View>
    

    </TouchableOpacity>
  
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
   
})