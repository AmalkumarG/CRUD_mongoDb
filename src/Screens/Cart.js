import { Alert, BackHandler, FlatList, StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItems from './CartItems'
const Cart = ({navigation}) => {
  const setData=useSelector(state=>state.Reducer)
  const HEIGHT = Dimensions.get("window").height;
  const WIDTH = Dimensions.get("window").width;
  // console.log("storeeeeddddddd",stored);
  useEffect(() => {
    const backAction = () => {
     navigation.goBack()

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

 
    console.log();

 
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    {
      setData.length==0?
     
      <View style={{height:150,width:WIDTH*80/100,backgroundColor:"blue",}}>
        <Text>Your Cart is empty Add Items to view</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("HomePage")}>
          <Text>Add items</Text>
        </TouchableOpacity>
      </View>
     
     : <FlatList data={setData}
     showsVerticalScrollIndicator={false}
        renderItem={(item)=><CartItems item={item} navigation={navigation}/>}
      />
    }
     
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})