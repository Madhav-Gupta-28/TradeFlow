"use client"
import React , {useState} from 'react';
import Style from  "./tokenlist.module.css";
import {CloseIcon} from "@chakra-ui/icons"

const TokenList = ({tokenData , setopenToolBox}) => {

    const data = [1, 2 ,3 ,4 ,5,6 ,7];

  return (
    <div className={Style.tokenlist}>
       <p onClick={() => setopenToolBox(false)}>
        <CloseIcon style={{position:'absolute', cursor:'pointer', color:'red' ,  }} />
       </p>

       <div>
        <h2 className={Style.tokenlisttitle}>Your Token List</h2>
       </div>

       <div className=''>
        {data.map((element , i ) =>(
            <div  className={Style.tokenlistbox}>

                <div className='flex flex-column gap-4 flex-start'>
                    <p style={{backgroundColor:'#7895CB', padding:'0.2rem 0.4rem ' , color:'#fff', borderRadius:'0.4rem'}}> Hey</p>
                    <p style={{color:"#7895CB"}}>
                        <span style={{ color: "#fff" ,  fontWeight:'700' , fontSize:'1.3rem'}} className='p-2'>
                            32
                        </span> Coin Name 
                    </p>
                </div>

            </div>
        ))}
       </div>
    </div>
  )
}

export default TokenList