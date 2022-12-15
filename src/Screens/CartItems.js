import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import { useDispatch } from "react-redux";
const CartItems = ({ item, navigation }) => {
  const [ratingICON, setRatingIcon] = useState([1, 2, 3, 4, 5]);
  const HEIGHT = Dimensions.get("window").height;
  const WIDTH = Dimensions.get("window").width;
const dispatch=useDispatch()
const removeitem=()=>{
    dispatch({type:"RemoveCart",payload:item.item.id})
}
console.log("itemssss",item);
  return (
<TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("ProductDetails", {
          products: item,
          price: item.price,
        })
      }
    >
      <View
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          height: "auto",
          width: WIDTH*80/100,
          padding: 10,
          borderRadius: 20,
          marginTop: 10,
        }}
      >
        <Image
          source={{ uri: item.item.image }}
          resizeMode={"contain"}
          style={{ height: 200, width: WIDTH*70/100, borderRadius: 10 }}
        />
        <Text style={{ width: WIDTH }}>{item.item.title}</Text>
        <Text>Price : {item.item.price}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {ratingICON.map((a, index) => {
            return a <= item.item.rating.rate ? (
              <Icon key={index} name="star" color={"blue"} />
            ) : (
              <Icon key={index} name="star" color={"red"} />
            );
          })}
          <Text>{item.item.rating.rate}</Text>
          <Text>Ratings</Text>
        </View>
        <View
          style={{
            
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              width: WIDTH*60/100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={()=>removeitem()}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Remove item
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
   
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,justifyContent:"center",alignItems:"center"
  },
});
