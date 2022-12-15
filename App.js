import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import {store,persistedStore} from "./src/redux/store";
import {Provider} from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
import {
  Account,
  Cart,
  Categories,
  HomePage,
  Login,
  Notifications,
  ProductDetails,
  Products,
  Signup,ViewCart,
  SelectedCategory
} from "./src/Screens/index";
import { Button, View } from "react-native";
const MyStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Navig = () => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="HomePage"
        component={BNav}
        options={{ headerShown: false }}
      />
      <MyStack.Screen name="Products" component={Products} />
      <MyStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
      <MyStack.Screen
        name="SignUp"
        component={Signup}
        options={{ headerShown: false }}
      />
      <MyStack.Screen name="Login" component={Login} />
      <MyStack.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon1 name="shopping-cart" size={20} color="blue" />
            ) : (
              <Icon1 name="shopping-cart" size={20} color="gray" />
            ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },headerShown:false
        }}
      />
   <MyStack.Screen name="SelectedCategory"  component={SelectedCategory}/>
   <MyStack.Screen name="Category" component={Categories}/>

    </MyStack.Navigator>
  );
};
const BNav = ({navigation}) => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue" }}
    >

      <BottomTab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon1 name="home" size={25} color="blue" />
            ) : (
              <Icon1 name="home" size={25} color="gray" />
            ),
          tabBarIconStyle: { color: "blue" },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon1 name="category" size={25} color="blue" />
            ) : (
              <Icon1 name="category" size={25} color="gray" />
            ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },headerShown:true,headerRight
          :()=><ViewCart navigation={navigation}/>,headerLeft:false
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon1 name="notifications" size={25} color="blue" />
            ) : (
              <Icon1 name="notifications" size={25} color="gray" />
            ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon1 name="account-circle" size={25} color="blue" />
            ) : (
              <Icon1 name="account-circle" size={25} color="gray" />
            ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        }}
      />
            {/* <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon1 name="shopping-cart" size={20} color="blue" />
            ) : (
              <Icon1 name="shopping-cart" size={20} color="gray" />
            ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        }}
      /> */}
    
    </BottomTab.Navigator>
  );
};
export default function App() {
  return (
    // <PersistGate persistor={persistedStore}>
    <Provider store={store}>
    <NavigationContainer>
  
      <Navig />
      
    </NavigationContainer>
    </Provider>
// </PersistGate>
  );
}
