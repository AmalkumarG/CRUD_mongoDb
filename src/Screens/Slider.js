import { Image, StyleSheet, Text, View,ScrollView ,Dimensions} from 'react-native'
import React,{useState} from 'react'
import slide from '../../constants/slide'
const Slider = () => {
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  const [Listindex, setListindex] = useState(0);
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
    <View>
     <View>
    <ScrollView
      onScroll={({ nativeEvent }) => onchange(nativeEvent)}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      horizontal
      style={{width:WIDTH}}
    >
      {slide.slide.map((a, index) => (
        <Image
          key={index}
          source={{ uri: a.iamge }}
          style={{ height: 200, width: WIDTH }}
          resizeMode={"cover"}
        />
      ))}
    </ScrollView>
   
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        alignSelf: "center",bottom:0
      }}
    >
      {slide.slide.map((a, index) => (
        <View
          key={index}
          style={index == Listindex ? styles.blackdot : styles.whitedot}
        >
          
        </View>
      ))}
    </View>
    
  </View>
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
            TOP RATED
          </Text>
        </View>
    </View>
   
  )
}

export default Slider

const styles = StyleSheet.create({
  blackdot: {
    backgroundColor: "black",height:10,width:20,borderRadius:20,margin:5
  },
  whitedot: {
    backgroundColor: "white",height:10,width:20,borderRadius:20,margin:5
  },
})