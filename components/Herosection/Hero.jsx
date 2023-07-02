"use client"
import React , {useState , useEffect , useContext} from 'react'
import Style from "./Hero.module.css"
import TokenSearch from "../TokenSearch/Tokensearch";
import Token from "../Token/Token"
import { AiFillSetting  } from "react-icons/ai";
import { SiEthereum} from "react-icons/si";
import {Input} from "@chakra-ui/react"
import { ConnectWallet } from '@thirdweb-dev/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button
  } from '@chakra-ui/react'



const Hero = ({accounts , tokenData}) => {

  // use States
  const [openSetting , setopenSetting] = useState(false);
  const[openToken , setopenToken] =useState(false);
  const [opentokentwo , setopentokentwo] = useState(false)

  const [tokenone , settokenone]  =      useState({
    name : '',
    image : ''
  })

  const [tokentwo , settokentwo]  =      useState({
    name : '',
    image : ''
  })



  return (
    <div style={{backgroundColor:"#393E46"  , height:'100vh' , width:'100vw' , color:"#333" , paddingTop:'4rem'}}    >
      
      <div  className='p-6 rounded-lg' style={{width:'35%' , height:'18rem' , backgroundColor:'#7895CB', color:"#333" 
      , margin:'0 auto'}}>
        <div className='flex flex-column justify-between p-2'>
          <p className='font-bold text-lg' style={{color:'#333'}}>Swap</p>
          <div><AiFillSetting style={{cursor:'pointer'}} width={50} height={50} onClick={() => setopenSetting(true)}/> </div>
        </div>
    {/* // token one  */}
        <div className='flex flex-column justify-between items-center rounded-lg' style={{border:'1px solid #333' , paddingLeft:'2rem'
        ,marginTop:'1rem'}} >
          <input style={{border:'0', color:'#333',  outline:'0',backgroundColor:'transparent', fontSize:'1.2rem'}} className='p-3 w-60 
          rounded-lg' 
          type='text' placeholder='0' />
     
        <button className='flex items-center justify-center p-2 ' style={{lineHeight:'0',gap:'1', backgroundColor:'#7895CB'}} 
        onClick={() => setopenToken(true)}>
          <span  className='p-1 font-bold text-base' style={{color:'#333'}}>{tokenone.name ||  "ETH"}</span> 
           <small className='p-1 font-bold text-base' style={{color:'#333'}}>8762</small>
          </button>
         
        </div>
      {/* token two */}
      <div className='flex flex-column justify-between items-center rounded-lg' style={{border:'1px solid #333' , paddingLeft:'2rem'
      ,marginTop:'1rem'}} >
          <input style={{border:'0',color:'#333' ,  outline:'0',backgroundColor:'transparent', fontSize:'1.2rem'}} className='p-3 
          w-60 rounded-lg' type='text' placeholder='0' />
     
        <button className='flex items-center justify-center p-2 ' style={{lineHeight:'0',gap:'1', backgroundColor:'#7895CB'}} 
        onClick={() => setopenToken(true)}>
          <span  className='p-1 font-bold text-base' style={{color:'#333'}}>{tokentwo.name ||  "ETH"}</span> 
           <small className='p-1 font-bold text-base' style={{color:'#333'}}>862</small>
          </button>
        
         
        </div>

        {!accounts ? (
          <Popover>
          <PopoverTrigger>
            <Button style={{backgroundColor:'#333', color:"#7895CB" , border:'0' , outline:'0' ,
           width:'100%', marginTop:'1rem', padding:'0.6rem' , borderRadius:'1rem' , fontSize:'1.2rem'}}>Wallet Not Connected</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Connect Wallet!</PopoverHeader>
            <PopoverBody>Please Connect Your Wallet!</PopoverBody>
          </PopoverContent>
        </Popover>
        ):(
          <button className='swapButton' style={{backgroundColor:'#333', color:"#7895CB" , border:'0' , outline:'0' ,
           width:'100%', marginTop:'1rem', padding:'0.6rem' , borderRadius:'1rem' , fontSize:'1.2rem'}} onClick={() => {}} >Swap </button>
        )}
      </div>

 {openSetting && <Token setopenSetting={setopenSetting}  />} 

    {openToken && (
        <TokenSearch openToken={setopenToken}  tokens = {settokenone} tokenData={tokenData}  />
      )}

      {opentokentwo && (
        <TokenSearch openToken={setopentokentwo}  tokens = {settokentwo} tokenData={tokenData}  />
      )}
       </div>
  )
}

export default Hero;
