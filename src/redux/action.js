const Addtocart=(data)=>{
    return{
        type:"Addtocart",payload:data
    }
}
const RemoveCart=()=>{
    return{
        type:"RemoveCart"
    }
}

const storedata=(data)=>{
    return{
        type:"storeData",
        payload:data
    }
}
const recentView=(data)=>{
return{
    type:"recent",
    payload:data
}
}