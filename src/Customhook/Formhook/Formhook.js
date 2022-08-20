import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
// onsubmit
export const Formhook=(Initial="")=>{
    const [formData,setFormData]=useState(Initial)
    const  nevigate = useNavigate()
    const handleInputChange=(e)=>{
        let {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            let result =await axios.post('https://auth-mrinal.herokuapp.com/user/create',formData);
            console.log(result)
            
        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmitLogin=async(e)=>{
        e.preventDefault()
        try {
            let result = await axios.post('https://auth-mrinal.herokuapp.com/user/login',formData);
            console.log(result);
            if(result.data.status){
                localStorage.setItem("user",JSON.stringify(result.data.user))
                if(result){
                    nevigate("/")
                }  
            }else{
                alert(result.data.user)
            }
        } catch (error) {
            console.log(error)
        }


    }


    const handleAddProduct=async(e)=>{
        e.preventDefault()
        const userId =JSON.parse(localStorage.getItem("user"))._id
        console.log(userId)
        try {
            let result = await axios.post('http://localhost:5000/add-product',{...formData,userId})
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    const nevigatFun=()=>{
    const auth = localStorage.getItem("user")
        if(auth){
            nevigate("/")
        }
    }
    return{formData,handleInputChange,handleSubmit,nevigatFun,handleSubmitLogin,handleAddProduct}
}