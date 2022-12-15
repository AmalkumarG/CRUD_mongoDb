import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import {Products} from "./index"
const SelectedCategory = ({route}) => {
console.log(route.params);
    const data=useSelector(state=>state.storeData)
    console.log("reduxlog",data);
    const [cat,setCat]=useState([])
    useEffect( async()=>{
       const dt=await data.products.filter(a=>{
        return a.category.toUpperCase()==route.params.category.toUpperCase()})
        setCat(dt)
    },[route.params.category])
    
 console.log(cat);
  return (
    <View>
        <FlatList
        data={cat}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={(item) => (
          <Products products={item} navigation={route.params.navigation} />
        )}

      />
    </View>
  )
}

export default SelectedCategory

const styles = StyleSheet.create({})