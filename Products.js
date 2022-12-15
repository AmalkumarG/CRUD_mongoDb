import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/AntDesign"

const Products = ({products,navigation}) => {
    const [ratingICON,setRatingIcon]=useState([1,2,3,4,5])
    
   
   
  return (
    <View >
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{products})} style={{flex:1,padding:10}} >
    <View style={{borderRadius:10,backgroundColor:"white",height:300,width:160,padding:10,}}>
    <Image source={{uri:products.item.image}} resizeMode={"contain"} style={{height:200,width:140,borderRadius:10,marginLeft:"auto",marginRight:"auto"}}/>
    <Text style={{width:150,}}>{products.item.title}</Text>
    <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
    <Text>Ratings</Text>
    {
        ratingICON.map((a)=>{
            return(
               a<=products.item.rating.rate?<Icon name='star' color={"blue"} />:<Icon name='star' color={"red"}/>
                
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
    rating:{
        color:"red"
    }
})