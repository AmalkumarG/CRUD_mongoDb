import {createStore,combineReducers} from "redux"
import {Reducer,storeData,recentView} from "./reducer"
import { persistReducer,persistStore } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"

// const persistConfig={
//     key:"root",
//     storage:AsyncStorage

// }
const reducers=combineReducers({Reducer,storeData,recentView})

// const persistedReducer=persistReducer(persistConfig,reducers)

const store=createStore(reducers)
// const persistedStore=persistStore(store)
export  {store}
