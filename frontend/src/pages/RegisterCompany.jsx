import React from 'react'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import Logo from "/voyager-logo.png"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PatternFormat } from 'react-number-format';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../../context/userContext'
import Axios from "axios";
import { useNavigate } from "react-router-dom";



export default function RegisterUser() {
  const navigate = useNavigate();

  const[form,setForm] = useState({name:"",phone:"",street:"",postal:"",city:"",province:""})
  const {logIn, setUser, user} = useAppContext();

  function handler(event){
    setForm(prevForm =>{
        return{
        ...prevForm,
        [event.target.name]:event.target.value
    }
  })}

  function RegisterCompanyHandler(){
    if(!form.name||!form.phone||!form.street||!form.postal||!form.city||!form.province)
      return emptyFieldToast()
    else{
        try {
          const url = "http://localhost:8000/account/update";
          Axios.put(url, 
            {
              email: user.data.email,
              ph_Num: form.phone,
              city: form.city,
              postal_Code: form.postal,
              street: form.street,
              province: form.province,
              acc_type: "Company"
            }
          )
          .then((response)=>{
              
              const url2 = "http://localhost:8000/account/create/company";
              Axios.post(url2, 
                {
                  email: user.data.email,
                  comp_name: form.name
                }
              ).then((response) =>{
                setUser({});
                localStorage.clear();
                navigate("/Login");

              }).catch((error)=>{
                console.log(error);
            })
          })
          .catch((error)=>{
              console.log(error);
          }) 
        } catch (error) {
          console.log(error)
        }
    }
  }

  const emptyFieldToast = () => {
    toast.error('Please fill out all required fields', {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "EmptyField",
        style: {
            backgroundColor: '#353535',
            color: '#87A1FF'
          },
    });
  };

    const theme = createTheme({
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: 'none',
                      },
                  fontFamily: 'Lato',
                  fontWeight: '400'
                },
                '& .MuiInputBase-input': {
                  color: '#ffffff', 
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'lightgrey',
                },
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              sizeMedium: {
                color : '#87A1FF'
              }
            }
          },
          MuiSvgIcon:{
            styleOverrides:{
              root:{
                fill:'#87A1FF'
              }
            }
          },
          MuiOutlinedInput:{
            styleOverrides: {
              root: {
                color : '#FFFFFF',
              },
              input:{
                padding :'9.5px 14px'
              }
            }
          },
          MuiDateCalendar:{
            styleOverrides:{
              root:{
                backgroundColor: '#353535',
                color:'#FFFFFF',
                borderRadius: '10px',
                overflow: 'hidden',
              },
            }
          },
          MuiPaper:{
            styleOverrides:{
              root:{
                backgroundColor: '#353535',
                borderRadius: '10px',
                color:"#FFFFFF"
              }
            }
          },
          MuiPickersDay:{
            styleOverrides:{
              root:{
                color:'#FFFFFF',
                '&.Mui-selected':{
                  backgroundColor:'#87A1FF',
                },
                '&:hover': {
                  backgroundColor: '#87A1FF'
                },
                '&:focus': {
                  backgroundColor: '#87A1FF',
                  '&.Mui-selected':{
                    backgroundColor:'#87A1FF',
                  },
              },           
            },
          },
        },
          MuiDayCalendar:{
            styleOverrides:{
              weekDayLabel:{
                color:'#FFFFFF'
              }
            }
          },
          MuiYearCalendar:{
            styleOverrides:{
              root:{
                '&::-webkit-scrollbar': {
                  width: 0,
                  height: 0
                },
              }
            }
          },
          MuiPickersYear:{
            styleOverrides:{
            yearButton:{
                color:'#FFFFFF',
                '&.Mui-selected':{
                  backgroundColor:'#87A1FF',
                  '&:hover': {
                    backgroundColor: '#87A1FF'
                  },
                },
                '&:hover': {
                  backgroundColor: '#87A1FF'
                },
                '&:focus': {
                  backgroundColor: '#87A1FF',
                  '&.Mui-selected':{
                    backgroundColor:'#87A1FF',
                }
              },     
            }
          },
        },
        }
      })
    return (
            <div className='flex flex-col justify-start items-center w-full h-full'>
                <img src={Logo} class="fill-current mt-10" width="375" height="74" viewBox="0 0 283 74"></img>
                    <h1 className = "text-white text-4xl pt-10">
                        Almost there - we just need some additional information :3
                    </h1>

                <div className='flex flex-row justify-start items-center gap-x-32'>
                    <div className='flex flex-col justify-start items-center gap-y-5 pt-9'>
                        <h2 className="relative text-white text-xl pr-36 font-normal" >Company Address</h2>
                        <input type="text" name="street" placeholder="Street Address" onChange={handler} className="px-4 h-10 w-80 bg-main-grey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                        <input type="text" name="postal" placeholder="Postal Code"  onChange={handler} className="px-4 h-10 w-80 bg-main-grey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                        <input type="text" name="city" placeholder="City" onChange={handler} className="px-4 h-10 w-80 bg-main-grey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                        <input type="text" name="province" placeholder="Province" onChange={handler} className="px-4 h-10 w-80 bg-main-grey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                    </div>
                    <div className='flex flex-col justify-start items-center gap-y-5 pt-20'>
                        <input type="text" name="name" placeholder="Company Name" onChange={handler} className="px-4 h-10 w-80 bg-main-grey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                        <PatternFormat
                            className="px-4 h-10 w-80 bg-main-grey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"
                            type="tel"
                            format="+1 (###) ###-####" 
                            mask="_" 
                            placeholder="phone number"
                            onValueChange={(newValue)=>{
                            setForm(prevform =>({
                            ...prevform,
                            phone : newValue.formattedValue
                            }))}}
                        />
  
                    </div>
                </div>
                <button onClick = {RegisterCompanyHandler}className="bg-main-blue text-white rounded-3xl w-48 h-12 mt-12 hover:bg-[#5f82ff]">
                            Continue
                </button>
                <ToastContainer hideProgressBar={true}/>
                                    <style>
                                    {
                                    `.Toastify__toast--error .Toastify__toast-icon svg path {
                                        fill: #87A1FF;
                                    }`}
                                    </style>
            </div>
    )
}