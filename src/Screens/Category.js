import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../../constants/Categories";
const Categories = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={Category.categories}
        numColumns={3}
        renderItem={(item) => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",

                margin: 10,
              }}
              onPress={() =>
                navigation.navigate("SelectedCategory", {
                  category: item.item.category,
                  navigation: navigation,
                })
              }
            >
              <Image
                source={{ uri: item.item.image }}
                style={{ height: 80, width: 80, borderRadius: 40 }}
                resizeMode={"contain"}
              />
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                {item.item.category}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
