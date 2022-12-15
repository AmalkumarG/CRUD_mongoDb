const initialState=[]
let data=null
const recet=[]
const Reducer=(state=initialState,action)=>{
switch(action.type){
    case "Addtocart":
        return [...state,action.payload]
    case "RemoveCart":return state.filter(a=>a.id!=action.payload)
     default:return state
} 
}
const storeData=(state=data,action)=>{
    switch(action.type){
        case "storeData":return{...state,products:action.payload}
        case "cleardata":return {...state,products:action.payload}
        default:return state
    }
}
const recentView=(state=recet,action)=>{
    switch(action.type){
        case "recent":return [...state,action.payload]
        default:return state
    }
}
export  {Reducer,storeData,recentView}