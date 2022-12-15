import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Share,
  Linking,
  Button,
  BackHandler,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Entypo";
import { useSelector, useDispatch } from "react-redux";
import { ViewCart } from "./index";

const ProductDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const val = useSelector((state) => state.Reducer);
  const products = useSelector((state) => state.recentView);
console.log("recentvvvvvvvvvvvvvvvvvv",products);
  const [data, setData] = useState(route.params.products.item);
  const [rating, setRaaating] = useState([1, 2, 3, 4, 5]);
  const [size, setSize] = useState(["S", "M", "L", "XL", "XXL"]);
  const [selectedSize, setSelectedSize] = useState();
  const [favorite, setFavorite] = useState(false);
  // const date=new Date(2022,10,0).getDate()

  const date = new Date();
  const currentDate = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };
  console.log(currentDate);
  const delDate = new Date(currentDate.year, currentDate.month, 0).getDate();
  const deliveryDate = () => {
    if (currentDate.day + 10 <= delDate) {
      return currentDate.day + 10;
    } else {
      return currentDate.day + 10 - delDate;
    }
  };
  console.log(delDate);
  // console.log("date", date);
  useEffect(() => {
    const backAction = () => {
      // dispatch({ type: "cleardata", payload: 0 });
      navigation.navigate("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    // products.includes(data)?alert("dataaa"):(alert("noottt"),dispatch({type:"recent",payload:products}),console.log(products.length))
    products.includes(data)
    ? ""
    : dispatch({ type: "recent", payload: data });
    return () => backHandler.remove();
    
  }, []);

  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

  const sizeSelect = (size) => {
    setSelectedSize(size);
  };
  const Addtocart = () => {
    // console.log(val);
    val.includes(data)
      ? alert("already added")
      : dispatch({ type: "Addtocart", payload: data });
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          <View
            style={{
              marginTop: 40,
              backgroundColor: "white",
              alignSelf: "center",
              justifyContent: "center",
              width: 300,
            }}
          >
            <Image
              source={{ uri: data.image }}
              resizeMode={"contain"}
              style={{ height: 300, width: 300 }}
            />
          </View>
          <View style={{ position: "absolute", top: 10, right: 20 }}>
            <View style={{ width: 40 }}>
              <ViewCart navigation={navigation} />
            </View>
            <TouchableOpacity
              onPress={() => {
                favorite ? setFavorite(false) : setFavorite(true);
              }}
              style={{ position: "absolute", top: 60, right: 20 }}
            >
              {favorite == true ? (
                <Icon1 name="favorite" size={25} color={"red"} />
              ) : (
                <Icon1 name="favorite-border" size={25} color="gray" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: "absolute", top: 100, right: 20 }}
              onPress={() => navigation.navigate("Cart")}
            >
              <Icon2 name="forward" size={25} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: "white", marginTop: 10 }}>
          <View style={{ padding: 15 }}>
            <Text>{data.title.toUpperCase()}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.grayText}>Price : </Text>
              <Text style={styles.grayText}>{route.params.price}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.grayText}>Rating : </Text>

              {rating.map((a, index) => (
                <Icon
                  key={index}
                  name="star"
                  style={
                    a <= data.rating.rate ? styles.rating : styles.ratingEmpty
                  }
                />
              ))}

              <Text>|</Text>
              {data.rating.rate >= 1 && data.rating.rate <= 2 ? (
                <Text style={{ color: "red" }}>Not good</Text>
              ) : data.rating.rate > 2 && data.rating.rate <= 4 ? (
                <Text style={{ color: "green" }}>Good</Text>
              ) : data.rating.rate > 4 && data.rating.rate <= 5 ? (
                <Text style={{ color: "blue" }}>Great Product</Text>
              ) : (
                ""
              )}
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10, backgroundColor: "white", padding: 15 }}>
          <Text>Size</Text>
          <View style={{ flexDirection: "row" }}>
            {size.map((a, index) => (
              <TouchableOpacity
                key={index}
                style={
                  selectedSize == a
                    ? { ...styles.sizes, backgroundColor: "#c1d7f5" }
                    : styles.sizes
                }
                onPress={() => sizeSelect(a)}
              >
                <Text>{a}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 10, backgroundColor: "white", padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Product Description
          </Text>
          <Text>{data.description}</Text>
        </View>
        <View>
          <Text>Delivery Address</Text>
          {<Text>{deliveryDate()}</Text>}
        </View>

      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 15,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          style={{ ...styles.buttons, borderBottomLeftRadius: 20 }}
          onPress={() => Addtocart()}
        >
          <Text style={{ ...styles.btText, color: "white" }}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.buttons,
            backgroundColor: "red",
            borderTopRightRadius: 20,
          }}
        >
          <Text style={styles.btText}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  rating: {
    color: "blue",
  },
  ratingEmpty: {
    color: "red",
  },
  grayText: {
    color: "gray",
  },
  sizes: {
    borderWidth: 1,
    height: 30,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginRight: 10,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    width: "50%",
    height: 60,
  },
  btText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
