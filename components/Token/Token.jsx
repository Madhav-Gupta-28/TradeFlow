"use client"
import React , {useState , useEffect} from 'react';
import Toggle from "../Toggle/Toggle";
import { AiFillSetting  } from "react-icons/ai";
import {BsFillFileLockFill} from "react-icons/bs"

import Style from "./Token.module.css"

const Token = ({setopenSetting}) => {
  return (
    <div  style={{backgroundColor:"#393E46"  , height:'100vh' , width:'100vw' , color:"#333" , paddingTop:'4rem'}}  >
        <div  className={Style.token}>
            <div className='flex flex-column justify-between p-2'>

              <h4 className='font-bold text-lg' style={{color:'#333'}}>Setting</h4>
              <div><AiFillSetting style={{cursor:'pointer'}} width={50} height={50} onClick={() => setopenSetting(false)}/> </div>
                
            </div>
            <div className='flex flex-column gap-1  ' style={{color:"#333"}}>
            <p className='font-bold text-lg' style={{color:'#333'}}>Slippage Tolerance {""}</p>
            <BsFillFileLockFill  style={{cursor:'pointer'}} width={50} height={50}/>
            </div>

            <div className='flex gap-4 p-1'>
              <button style={{ background:'#333' , padding:'0.3rem 0.5rem' , color:'#7895CB' , borderRadius:'0.5rem' , fontSize:'1rem'}} >Auto</button>
              <input style={{border:'2px solid #333',  borderRadius:'0.6rem' , color:'#333',  outline:'0',backgroundColor:'transparent', fontSize:'1.2rem'}} placeholder='1%' />
            </div>

            <div className='flex flex-column p-1  gap-1' style={{marginTop:'1rem'}}>
            <p className='font-bold text-lg' style={{color:'#333'}}>Slippage Tolerance {""}</p>
            <BsFillFileLockFill style={{cursor:'pointer'}} width={50} height={50}/>
            </div>

            <div className='flex gap-4 p-1'>
              <input style={{border:'2px solid #333',  borderRadius:'0.6rem' , color:'#333',  outline:'0',backgroundColor:'transparent', fontSize:'1.2rem'}} placeholder='40' />
              <button style={{ background:'#333' , padding:'0.3rem 0.5rem' , borderRadius:'0.5rem'  ,color:'#7895CB'  , fontSize:'1rem'}}>minutes</button>

            </div>
            <div className='flex flex-column justify-between ' >
              <p style={{color:"#333"}} className='font-semibold text-md'>Transaction deadline</p>
              <Toggle label={"Choose"}/>
            </div>
     
        </div>
    </div>
  )
}

export default Token