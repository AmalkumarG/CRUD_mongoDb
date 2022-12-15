import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

const AccountOWCH = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 40,
          width: 150,
          backgroundColor: "white",
          marginLeft: 15,
          marginTop: 10,
          alignItems: "center",
          borderWidth: 1,
          borderColor: "gray",
          paddingLeft: 10,
          borderRadius: 5,
        }}
        
      >
        <Feather name={item.item.icon} size={25} color={"blue"} />
        <Text style={{ marginLeft: 10 }}>{item.item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountOWCH;

const styles = StyleSheet.create({});
