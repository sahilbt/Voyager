import React, { useEffect, useState } from 'react'
import LandingNav from '../components/LandingNav'
import Car from "/car.png"
import Truck from "/truck.png"
import Motorcycle from "/motorcycle.png"
import Boat from "/boat.png"
import Jet from "/jet.png"
import Calandar from "/calandar.png"
import Human from "/human.png"
import Colour from "/colour.png"
import Mileage from "/mileage.png"
import Clean from "/clean.png"
import Damage from "/damage.png"
import Review from "/review.png"
import Price from "/price.png"
import Information from "/information.png"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Backdrop } from '@mui/material';
import BookingConfirmation from '../components/BookingConfirmation'
import LocationModel from '../components/LocationModel'
import { useLocation } from 'react-router-dom'




export default function Booking() {

    const [form,setForm] = useState({start:"",end:""})
    const[information,setInformation] = useState({capacity:0,color:"",mileage:"",extra:"", cleanliness:"", damage:"",review:"",price:""})
    const[open,setOpen] = useState(false)
    const[openPick,setOpenPick] = useState(false)
    const[openDrop,setOpenDrop] = useState(false)
    const[drop,setDrop] = useState({city:"",postal:"",street:"",province:""})
    const[pick,setPick] = useState({city:"",postal:"",street:"",province:""})
    const location = useLocation()
    const { from } = location.state

    console.log(from);

    function handleConfirmationBackDrop(){
        setOpen(true);  
    }

    function handleConfirmationClose(){
        setOpen(!open);  
    }

    function handlePickBackDrop(){
      setOpenPick(true);
    }
    function handleDropBackDrop(){
      setOpenDrop(true)
    }

    function handlePickClose(){
      setOpenPick(!openPick)
    }

    function handleDropClose(){
      setOpenDrop(!openDrop)
    }

    useEffect(() => {
      setInformation({
        date:from.date_posted,
        capacity:from.num_passengers,
        color:from.color,
        mileage:from.mileage,
        cleanliness:from.cleanliness,
        damage:from.damages,
        review:from.overall,
        price:from.price,

        extra: from.vehicle_type == "Car" ? from.type :
                from.vehicle_type  == "Truck" ? from.tonnage :
                from.vehicle_type  == "Motorcycle" ? from.cc :
                from.vehicle_type  == "Boat" ? from.knots :
                from.tbo
      })
      
    },[]);
    

    const emptyFieldToast = () => {
        toast.error('Please fill out all required fields', {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "EmptyField",
            style: {
                backgroundColor: '#353535',
                color: '#87A1FF'
              },
        });
    }

    const invalidDatePost = () => {
      toast.error('Please enter valid dates', {
          position: toast.POSITION.TOP_RIGHT,
          toastId: "invalid date",
          style: {
              backgroundColor: '#353535',
              color: '#87A1FF'
            },
      });
  }

    function BookingConfirmationHandler(){
        if(!form.start||!form.end||!drop.city||!drop.postal||!drop.street||!drop.province||!pick.city||!pick.postal||!pick.street||!pick.province){
            emptyFieldToast()
        }
        else if(new Date(form.start) >= new Date(form.end)){
          invalidDatePost()
        }
        else{
          handleConfirmationBackDrop()
        }
        
    }

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
                  fontWeight: '400',
                  fontSize: '15px'

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
                color : 'fffff'
              }
            }
          },
          MuiSvgIcon:{
            styleOverrides:{
              root:{
                fill:'#FFFFFF'
              }
            }
          },
          MuiOutlinedInput:{
            styleOverrides: {
              root: {
                color : '#FFFFFF',
              },
              input:{
                padding :'4px 14px'
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
        <div className="h-full w-full">
            <LandingNav type="User"/>
            <div className = "flex flex-col items-center justify-center"> 
                <div className = "w-[80%]">
                    <div className = "flex flex-row ml-[1.7rem] mt-16">
                        <h1 className ='text-3xl text-white font-bold'>
                            {from.make} {from.model}
                        </h1>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-10">
                        <div className = "flex flex-row items-center gap-x-16 h-[350px]">

                            <img className = "w-[400px] h-full "src={from.vehicle_type == "Car" ? Car:
                              from.vehicle_type == "Truck" ? Truck:
                              from.vehicle_type == "Boat" ? Boat:
                              from.vehicle_type == "Motorcycle" ? Motorcycle:
                              Jet}/>

                            <div className = "flex flex-col justify-start items-start h-full gap-y-4">
                                <div className = "flex flex-row justify-center items-center gap-x-3">
                                    <img src ={Calandar} className="w-[25px] h-[25px]"></img>
                                    <h2 className="text-white text-base">{information.date}</h2>
                                </div>
                                <div className = "flex flex-row justify-center items-center gap-x-3">
                                    <img src ={Human} className="w-[25px] h-[25px]"></img>
                                    <h2 className="text-white text-base">{information.capacity} Adults</h2>
                                </div>
                                <div className = "flex flex-row justify-center items-center gap-x-3">
                                    <img src ={Colour} className="w-[25px] h-[25px]"></img>
                                    <h2 className="text-white text-base">{information.color}</h2>
                                </div>
                                <div className = "flex flex-row justify-center items-center gap-x-3">
                                    <img src ={Mileage} className="w-[23px] h-[23px]"></img>
                                    <h2 className="text-white text-base">{information.mileage}</h2>
                                </div>
                                <div className = "flex flex-row justify-center items-center gap-x-3">
                                    <img src ={Information} className="w-[25px]"></img>
                                    <h2 className="text-white text-base">{information.extra}</h2>
                                </div>
                                <div className = "-mt-2">
                                    <h1 className = "text-white text-base mb-1 ml-1 ">
                                        Start Date
                                    </h1>
                                        <div className=" h-8 w-56 bg-black text-white rounded-lg  border-2 border-main-blue outline-none hover:border-[3px] hover:border-main-blue focus:border-[3px] focus:border-main-blue" >
                                            <ThemeProvider theme={theme}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker 
                                                        slotProps={{
                                                            textField: {
                                                            placeholder: 'Start Date'},
                                                        }}
                                                        disableHighlightToday = {true}
                                                        selected = {true}
                                                        format="MMMM D, YYYY"
                                                        disablePast = {true}
                                                        onChange={(newValue)=>{
                                                            setForm(prevForm =>({
                                                            ...prevForm,
                                                            start : moment(new Date(newValue)).format('YYYY-MM-DD')

                                                    }))}}/>
                                                </LocalizationProvider>
                                        </ThemeProvider>
                                    </div>
                                </div>
                                <div className = "-mt-1">
                                    <h1 className = "text-white text-base mb-1 ml-1 ">
                                            Pick Up
                                    </h1>
                                    <button onClick={handlePickBackDrop} className="px-4 h-8 w-56 bg-black text-white rounded-lg  border-2 border-main-blue outline-none hover:border-[3px] hover:border-main-blue focus:border-[3px] focus:border-main-blue">
                                        {pick.street}
                                    </button>
                                </div>
                                
                            </div>
                            <div className = "flex flex-col justify-start items-start h-full gap-y-4">
                                <div className = "flex flex-row justify-center items-center gap-x-3">
                                    <img src ={Clean} className="w-[20px]"></img>
                                    <h2 className="text-white text-base">{information.cleanliness}</h2>
                                </div>
                                <div className = "flex flex-row justify-center items-center gap-x-3">
                                    <img src ={Damage} className="w-[20px]"></img>
                                    <h2 className="text-white text-base">{information.damage}</h2>
                                </div>
                                <div className = "flex flex-row justify-center items-center gap-x-3">
                                    <img src ={Review} className="w-[20px]"></img>
                                    <h2 className="text-white text-base">{information.review}</h2>
                                </div>
                                <div className = "flex flex-row justify-center items-center gap-x-3 ml-1">
                                    <img src ={Price} className="w-[10px] m-auto"></img>
                                    <h2 className="text-white text-base ml-2">${information.price}</h2>
                                </div>
                                <div className = "mt-8">
                                    <h1 className = "text-white text-base mb-1 ml-1 ">
                                        End Date
                                    </h1>
                                        <div className=" h-8 w-56 bg-black border-2 border-main-blue rounded-lg outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]" >
                                            <ThemeProvider theme={theme}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker 
                                                        slotProps={{
                                                            textField: {
                                                            placeholder: 'End Date'},
                                                        }}
                                                        disableHighlightToday = {true}
                                                        selected = {true}
                                                        disablePast = {true}
                                                        format="MMMM D, YYYY"
                                                        onChange={(newValue)=>{
                                                            setForm(prevForm =>({
                                                            ...prevForm,
                                                            end : moment(new Date(newValue)).format('YYYY-MM-DD')

                                                    }))}}/>
                                                </LocalizationProvider>
                                        </ThemeProvider>
                                    </div>
                                </div>
                                <div className = "-mt-1">
                                    <h1 className = "text-white text-base mb-1 ml-1 ">
                                          Drop Off
                                    </h1>
                                    <button onClick={handleDropBackDrop} className="px-4 h-8 w-56 bg-black text-white rounded-lg  border-2 border-main-blue outline-none hover:border-[3px] hover:border-main-blue focus:border-[3px] focus:border-main-blue">
                                          {drop.street}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button onClick={BookingConfirmationHandler} className="bg-main-blue text-white rounded-xl w-36 h-8 mt-[17rem] hover:bg-[#5f82ff]">
                                    Book it
                                </button>
                                <ToastContainer hideProgressBar={true}/>
                                    <style>
                                    {
                                    `.Toastify__toast--error .Toastify__toast-icon svg path {
                                        fill: #87A1FF;
                                    }`}
                                    </style>
                            </div>
                        </div>
                    </div>
                               
            </div>
            </div>
            <Backdrop
                open={open}
                onClick={handleConfirmationClose}
                >
                <div>
                    <BookingConfirmation form = {form} information = {information} pick = {pick} drop = {drop} open = {open} other={from}/>
                </div>
            </Backdrop>
            <Backdrop
                open={openPick}
                onClick={handlePickClose}
                >
                <div>
                    <LocationModel Location = {pick} setLocation = {setPick} open = {openPick} setOpen = {setOpenPick} heading = "Pick Up Location"/>
                </div>
            </Backdrop>
            <Backdrop
                open={openDrop}
                onClick={handleDropClose}
                >
                <div>
                    <LocationModel Location = {drop} setLocation = {setDrop} open = {openDrop} setOpen = {setOpenDrop} heading = "Drop Off Location"/>
                </div>
            </Backdrop>
            
        </div>
    )
}