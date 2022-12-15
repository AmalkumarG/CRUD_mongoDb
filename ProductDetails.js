import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ProductDetails = ({route,navigation}) => {
    const [data,setData]=useState(route.params.products.item)
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa",data );
  return (
    <View style={{flex:1,alignItems:"center"}}>
    <View style={{marginTop:40,backgroundColor:"white"}}>
        <Image source={{uri:data.image}} resizeMode={"contain"} style={{height:300,width:300}} />
    </View>
      <Text>{data.category}</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})