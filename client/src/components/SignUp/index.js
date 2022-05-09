import React, {useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import VideoRegister from "../../videos/video.mp4";
import {
  BackgroundRegister,
  VideoBgRegister,
  ContainerRegister,
  FormWrapRegister,
  IconRegister,
  FormContentRegister,
  FormRegister,
  FormH1Register,
  FormLabelRegister,
  FormInputRegister,
  FormButtonRegister,
  TextRegister,
} from "./SignUpElements";

const SignUp = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name :"",
    email:"",
    password:"",
    repeatPassword:""
  });
  const submitForm = async(e)=>{
  e.preventDefault();
  console.log("submitting ",user);
  if(user.name!=="" && user.email!=="" && user.password!==""  ){
    if(user.password !== user.repeatPassword){
      alert("pass and repeat pass are not the same!!")
      return
    }
    console.log("Submiting to backend");
    const config = {
      headers:{
      "Content-Type":"application/json"
    }
    
       
    }
    try {
      const data = await axios.post("http://localhost:4000/auth/register" ,user,config);
    console.log(data);
    if(data.user){
      navigate("/");
    }
      
    } catch (err) {
      console.log("catch the error");
     alert(err.response.data.error);
      
    }
     
    
      
     

  }
  else {
    alert("please fill all the inputs!")
  }
  }
  const changeInput = (e)=>{
    setUser({...user,[e.target.name]:e.target.value });
  }
  return (
    <>
      <ContainerRegister>
      <BackgroundRegister>
        <VideoBgRegister autoPlay loop muted src={VideoRegister} type="video/mp4" />
      </BackgroundRegister>
      <FormWrapRegister>
          <IconRegister to="/"></IconRegister>
          <FormContentRegister>
            <FormRegister onSubmit={submitForm}>
              <FormH1Register>
                At ****.de, all neighbors are active under their real names.
                This ensures trust and security in the online neighborhood.
              </FormH1Register>
              <FormLabelRegister htmlFor="for">Name</FormLabelRegister>
              <FormInputRegister type="text" onChange={changeInput} name="name" required />
              <FormLabelRegister htmlFor="for">Email</FormLabelRegister>
              <FormInputRegister type="email" onChange={changeInput} name="email" required />
              <FormLabelRegister htmlFor="for">Password</FormLabelRegister>
              <FormInputRegister type="password" onChange={changeInput} name="password" required />
              <FormLabelRegister htmlFor="for">
                Repeat Password
              </FormLabelRegister>
              <FormInputRegister type="password" name="repeatPassword" onChange={changeInput} required />

              <FormButtonRegister type="submit">Register</FormButtonRegister>
              <TextRegister>
                By creating an account you agree to our{" "}
                <a href="#">Terms & Privacy</a>.{" "}
              </TextRegister>
            </FormRegister>
          </FormContentRegister>
        </FormWrapRegister>
      </ContainerRegister>
    </>
  );
};

export default SignUp;
