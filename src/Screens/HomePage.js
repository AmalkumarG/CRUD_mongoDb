import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image,
  ScrollView,
  Animated,
  LogBox,
  SafeAreaView,Dimensions,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import Category from "../../constants/Categories";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";

import {ViewCart,Products,Slider,Offer} from "./index"

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();


const HomePage = ({ navigation }) => {
  const dispatch=useDispatch()
  const recent=useSelector(state=>state.recentView)
  console.log(recent.length);
  const [data, setdata] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [offerProd, setOfferProd] = useState([]);
  const Data = useRef();
  const [ratingICON, setRatingIcon] = useState([1, 2, 3, 4, 5]);
  const [Listindex, setListindex] = useState(0);
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  useEffect(async() => {
   await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setdata(json);
        setTopRated(
          json.filter((a) => {
            return a.rating.rate > 4;
          })
        );
        setOfferProd(
          json.filter((a) => {
            return a.rating.count <= 150;
          })
        );
        dispatch({type:"storeData",payload:json})
      });
  }, []);
  

  // const FirstFlatList=()=>{
  //   return(
  //     <View>
  //       <FlatList
  //     data={slide.slide}
  //     ref={Data}
  //     keyExtractor={(item) => item.id}
  //     horizontal
  //     showsHorizontalScrollIndicator={false}
  //     pagingEnabled={true}
  //     viewabilityConfig={viewconfigRef.current}
  //     onViewableItemsChanged={onViewRef.current}
  //     renderItem={(item) => <Slider data={item} />}

  //     />

  //     <View
  //         style={{
  //           height: 40,
  //           width: 200,
  //           justifyContent: "center",
  //           alignItems: "center",
  //           backgroundColor: "blue",
  //           borderRadius: 10,
  //           margin: 5,
  //         }}
  //       >
  //         <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
  //           TOP RATED
  //         </Text>
  //       </View>

  //     </View>

  //   )

  // }
  const CategoryFlatlist=()=>{
    return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"#d0f0f2",marginTop:10,borderTopWidth:5,borderColor:"#bfcad9"}}>
    <FlatList
    horizontal={true}
    
    showsHorizontalScrollIndicator={false}
      data={Category.categories}
    
      renderItem={(item) => (

        <View style={{  justifyContent: "center", alignItems: "center" ,marginTop:10}}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
           
              margin: 10,
            }}
            onPress={()=>navigation.navigate("SelectedCategory",{category:item.item.category,navigation:navigation})}
          >
         <Image source={{uri:item.item.image}} style={{height:80,width:80,borderRadius:40,}} resizeMode={"contain"}/>
            <Text style={{marginTop:5,fontWeight:"bold"}}>{item.item.category}</Text>
          </TouchableOpacity>
        </View>
      )}
 
    />
  </View>)
  }
  const ThirdFlatlist = () => {
    return (
      <View style={{backgroundColor:"#d0f2d1"}}>
        <View
          style={{
            height: 40,
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
            borderRadius: 10,
            margin: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Todays offer
          </Text>
        </View>

        <FlatList
          data={offerProd}
          keyExtractor={(item) => item.id}
          numColumns={2}
         
          renderItem={(item) => ( 
            <Offer products={item} navigation={navigation}
             />
          )}
          ListFooterComponent={()=><CategoryFlatlist 
            
          />}
       
        />
      </View>
    );
  };
  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      console.log(slide);
      if (slide != Listindex) {
        setListindex(slide);
      }
    }
  };
  return (
    <View style={styles.container} >
      <StatusBar backgroundColor={"blue"} />
      {/* <Button title="clickkkk" onPress={()=>topR()}/> */}
      <View
        style={{
          height: 60,
          width: "100%",
          justifyContent:"space-between",
          alignItems: "center",
          padding: 10,
          backgroundColor: "white",flexDirection:"row"
        }}
      >
        <View style={styles.search}>
          <Icon name="search" size={25} color="gray" />
          <TextInput
            placeholder="Search for products"
            style={styles.searchInput}
          />
          <Icon name="mic-none" size={25} color="gray" />
          <Icon2 name="camera" size={25} color="gray" />
        </View>
        
        <ViewCart navigation={navigation}/>
        
        
      </View>
      <View style={{ flex: 1, backgroundColor: "#bfcad9" }}>



        <FlatList
        data={topRated}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={(item) => (
          <Products products={item} navigation={navigation} />
        )}
        ListHeaderComponent={()=><Slider/>}
        ListFooterComponent={ThirdFlatlist}
      />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " white",
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    borderColor: "gray",
    width: "80%",
  },
  searchInput: { fontSize: 15 },
  blackdot: {
    backgroundColor: "black",height:10,width:20,borderRadius:20,margin:5
  },
  whitedot: {
    backgroundColor: "white",height:10,width:20,borderRadius:20,margin:5
  },
});
