import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Card, Container, Stack } from 'react-bootstrap';

const Adminpanel = () => {
  const auth = JSON.parse(localStorage.getItem("user"));
  const [data,setData]=useState([])

  const getAllUser=async()=>{
    // let user = await axios.get(`${process.env.REACT_APP_API}/getuser`)
    let user = await axios.get(`https://auth-mrinal.herokuapp.com/user/getuser`)
    // console.log(user.data)
    setData(user.data.data)
  }

  useEffect(()=>{
    getAllUser()
  },[])
//  console.log(auth);
console.log(data);
 if(auth.role !== "admin"){
    return(
        <>
        <Container>
            <h1> Hey welcome to admen panel but You are not allowed to see the data</h1>
        </Container>
        </>
    )
 }
  return (
    <Stack gap={3} className="m-4">
        {
            data.length>0 && data.map((item)=><Card key={item._id}>
                    <Card.Body>
                        <Card.Title>
                            Name: {item.name}
                        </Card.Title>
                        <Card.Text>
                            Email: {item.email}
                        </Card.Text>
                    </Card.Body>
            </Card>)
        }
    </Stack>
  )
}

export default Adminpanel