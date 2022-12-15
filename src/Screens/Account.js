import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,Image
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import account from "../../constants/account";
import AccountOWCH from "../../constants/AccountOWCH";
const Account = (navigation) => {
  const AccountSetting = () => {
    return (
      <>
        <View style={{ backgroundColor: "white", marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Account Settings
          </Text>
          <TouchableOpacity style={styles.accountSetting}>
            <AntDesign name="user" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>Edit Profile</Text>
            <Feather name="chevrons-right" size={25} color="gray" style={{position:"absolute",right:5}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountSetting}>
            <AntDesign name="wallet" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>Saved cards and wallet</Text>
            <Feather name="chevrons-right" size={25} color="gray" style={{position:"absolute",right:5}}/>

          </TouchableOpacity>
          <TouchableOpacity style={styles.accountSetting}>
            <Feather name="map-pin" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>Saved address</Text>
            <Feather name="chevrons-right" size={25} color="gray" style={{position:"absolute",right:5}}/>

          </TouchableOpacity>
          <TouchableOpacity style={styles.accountSetting}>
            <AntDesign name="user" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>Edit Profile</Text>
            <Feather name="chevrons-right" size={25} color="gray" style={{position:"absolute",right:5}}/>

          </TouchableOpacity>
          <TouchableOpacity style={styles.accountSetting}>
            <Entypo name="language" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>Selected language</Text>
            <Feather name="chevrons-right" size={25} color="gray" style={{position:"absolute",right:5}}/>

          </TouchableOpacity>
          <TouchableOpacity style={styles.accountSetting}>
            <Icon name="notifications-none" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>Notification Settings</Text>
            <Feather name="chevrons-right" size={25} color="gray" style={{position:"absolute",right:5}}/>

          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "white", marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Feedback & Information
          </Text>
          <TouchableOpacity style={styles.accountSetting}>
            <Ionicons name="newspaper-outline" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>Terms, Policies and Licenses</Text>
            <Feather name="chevrons-right" size={25} color="gray" style={{position:"absolute",right:5}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountSetting}>
            <AntDesign name="questioncircleo" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>Browse FAQs</Text>
            <Feather name="chevrons-right" size={25} color="gray" style={{position:"absolute",right:5}}/>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={styles.logOut}>
            <AntDesign name="questioncircleo" size={20} color={"blue"} />
            <Text style={{ marginLeft: 10 }}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"blue"} />
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          backgroundColor: "white",
          width: "100%",flexDirection:"row",justifyContent:"space-between",padding:10
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ position: "relative" }}>Hey! </Text>
          <Text style={{fontSize:20}}>Amalkumar</Text>
        </View>
        <View style={{ flexDirection: "row",borderWidth:1,borderRadius:10 ,width:60,justifyContent:"space-evenly",alignItems:"center",paddingLeft:2}}>
         <Image source={require("../assets/goldCoin.png")} style={{width:20,height:20}}/>
         <Text>140</Text>
        </View>
      </View>
      <View style={{ marginTop: 45, }}>
        <FlatList
          data={account.account}
          numColumns={2}
          renderItem={(item) => <AccountOWCH item={item} navigation={navigation} />}
          ListFooterComponent=<AccountSetting />
        />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  accountSetting: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
 
    borderColor: "gray",
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  logOut: {
    flexDirection: "row",
    height: 40,
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
