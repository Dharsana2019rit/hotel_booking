import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../logo.svg';
import  {useState,useEffect} from 'react';
import axios from 'axios'

function Login() {
    let Navigate = useNavigate();

    const [LoginValues,setLoginValues]= useState()

    const handlesubmit=()=>{
          let user = document.getElementById('user').value;
          let pass = document.getElementById('pass').value;
           console.log(user)
          for(let i=0;i<LoginValues.length;i++){
            if(user === LoginValues.at(i).first_name && pass === LoginValues.at(i).email){
               Navigate('/content')
            }
          }

    }
    
    const getPosts = async () => {
      try {
    const userPosts = await axios.get("http://localhost:8080/Hotel/HotelClass")
        
        setLoginValues(userPosts.data)
      
       
      
       
      
      } catch (err) {
        console.error(err.message);
      }
    };
    useEffect(()=>{
        
        getPosts()
    })
    
  return (
    <div className='main-login'>
    <div class="box-form">
    <div class="left">
      <div class="overlay">
      <img src={logo} width={80} height={60}/>
      <span className='title'>Hotel bay</span>
      <span>
        <p>login with social media</p>
        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>Login with Facebook</a>
        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
      </span>
      </div>
    </div>
      <div class="right">
      <h5>Login</h5>
     
      <div class="inputs">
        <input type="text" id="user" placeholder="user name"/>
        <br/>
        <input type="password" id="pass" placeholder="password"/>
      </div>
        
        <br/><br/>
        
      <div class="remember-me--forget-password">
        <p>forget password?</p>
      </div>
        
        <br/>
        <button className='login-button' type='submit' 
        onClick={
          handlesubmit
          
      }>
          login
        </button>
    </div>
    
  </div>

      
        </div>
  )
}

export default Login