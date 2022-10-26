import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer} from "@react-navigation/native"

import Signup from './signup';
import Login from './login';
import Home from './Home';
const MyStack=createStackNavigator()
const Navig=()=>{return(
 <MyStack.Navigator>
 <MyStack.Screen name='SignUp' component={Signup} options={{headerShown:false}} />
 <MyStack.Screen name='Login' component={Login}/>
 <MyStack.Screen name='Home' component={Home} options={{headerShown:false}}/>
  
  
  
 </MyStack.Navigator>)
}
export default function App() {
  return (
   <NavigationContainer>
    <Navig/>
   </NavigationContainer>
  );
}

