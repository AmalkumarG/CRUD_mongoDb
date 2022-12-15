import axios from "axios";
import Api from "../constants/Api";
const AuthRequest=axios.create({
    baseURL:Api.backendapi.baseURL
})

const acnoReg=async()=>{
    console.log("abvccccccc");
   
        let data={
            acno:12,
            password:12,
            username:"abcddd"
        }
     let result= await axios.post('http://192.168.29.146:3000/register',data)
       return result.data
    


}

const register=async(user)=>{
    if(!user.username ||!user.password||!user.email)
        return{
            status:false,message:"all fields are required"
        }
        console.log(user);
    try{
        let reqBody={
            username:user.username,
            email:user.email,
            password:user.password
        }
        let registerResponse=await AuthRequest.post(Api.backendapi.REGISTER,reqBody)
        console.log("abvd",registerResponse);
        return registerResponse.data
    }
    catch(err){
        // console.log(err);

    }
}
const userexist=async(type,value)=>{
    try{

        let params={[type]:value}
        let userExist=await AuthRequest.get(Api.backendapi.USEREXIST,{params})
        console.log(userexist);
        return(userExist.data)
    }
    catch(err){
        console.log(err);
    }
}
const login=async(user)=>{
    console.log(user);
    if(!user.username||!user.password){
        return{
            status:false,message:"all fields are needed"
        }
    }
    try{
        let logres={
            username:user.username,
            password:user.password
        }
        let loginReq=await AuthRequest.post(Api.backendapi.LOGIN,user)
        return loginReq.data;
        
    }
    catch(err){

    }
}
const change=async(user)=>{
    if(!user.username)
        return{
            status:false,message:"field required"
        }
    
    try{
        let changeres=await AuthRequest.post(Api.backendapi.CHANGE,{username:user.username,changeusername:user.changeusername})
        console.log(changeres.data);
        return changeres.data
    }
    catch(err){}
}
const deleteuser=async(user)=>{
    try{
        let deleteres=await AuthRequest.post(Api.backendapi.DELETE,{username:user.username})
        console.log(deleteres);
        return deleteres.data
    }
    catch(err){

    }

}
export default {register,userexist,login,change,deleteuser,acnoReg}