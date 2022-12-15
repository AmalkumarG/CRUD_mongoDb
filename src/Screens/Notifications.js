import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const Notifications = () => {
const data=useSelector(state=>state.recentView)


  return (
    <View>
    
      <FlatList data={data}
        renderItem={item=><View><Text>aaaaaaaaaaaaa</Text></View>}
      />
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})