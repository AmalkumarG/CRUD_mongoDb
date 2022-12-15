import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import Icon1 from "react-native-vector-icons/MaterialIcons"
const Offer = ({products,navigation}) => {
    const [ratingICON,setRatingIcon]=useState([1,2,3,4,5])
    const [offer,setOffer]=useState(Math.floor(Math.random() * 100)+1)
    const [offPrice,setOffPrice]=useState(
        (products.item.price-(products.item.price*offer/100)).toFixed(2)
    )
   
   
  return (
    <View >
    <View style={{position:"absolute",zIndex:1,top:10,right:0,backgroundColor:"blue",height:60,width:60,flexDirection:"row",borderRadius:30}}>
        <Icon1 name='local-offer' size={50} color="white"/>
        <Text style={{color:"red",marginLeft:-40,marginTop:10,fontWeight:"bold",fontSize:20}}>{offer}%</Text>
        <Text style={{color:"red",marginLeft:-30,marginTop:30,fontWeight:"bold",fontSize:20}}>OFF</Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{products:products,price:offPrice})} style={{flex:1,padding:10}} >
    <View style={{borderRadius:10,backgroundColor:"white",height:350,width:160,padding:10,}}>
    <Image source={{uri:products.item.image}} resizeMode={"contain"} style={{height:200,width:140,borderRadius:10}}/>
    <Text style={{width:150,}}>{products.item.title}</Text>
    <View style={{flexDirection:"row"}}>
    <Text >Price : </Text>
    <Text style={{textDecorationLine:"line-through",textDecorationStyle:"solid",textDecorationColor:"red"}}>{products.item.price} </Text>
    <Text> {offPrice}</Text>
    </View>
    
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <Text>Ratings</Text>
    {
        ratingICON.map((a,index)=>{
            return(
               a<=products.item.rating.rate?<Icon key={index} name='star' color={"blue"} />:<Icon key={index} name='star' color={"red"}/>
                
            )
        })
    }

    </View>
   
    </View>
    

    </TouchableOpacity>
  
    </View>
  )
}

export default Offer

const styles = StyleSheet.create({
   
})