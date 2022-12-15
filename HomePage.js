import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Products from './Products'
const HomePage = ({navigation}) => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setdata(json)
                
               
            
            })
    },[])
  return (
    <View style={styles.container}>
    
    <FlatList
        data={data}
        numColumns={2}
        renderItem={(item)=><Products products={item} navigation={navigation}/>}
       
      />

     

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#bfcad9"
    }
})