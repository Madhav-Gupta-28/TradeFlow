"use client";
import React , {useState} from 'react'
import Style from "./TokenSearch.module.css"
import { SiEthereum} from "react-icons/si";
import {BsFillFileLockFill} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"
import {SearchIcon , PhoneIcon} from '@chakra-ui/icons';
import { InputGroup , InputLeftElement , Input   } from '@chakra-ui/react';

const Tokensearch = ({  openToken , tokens , tokenData }) => {

  // use stattes 
  const [active , setactive] = useState(1);

  const coin  = [{
    image : <SiEthereum /> ,
    name : "ETH"

  }, 
  {
    image : <SiEthereum /> ,
    name : "Matic"

  },
  {
    image : <SiEthereum /> ,
    name : "BNB"

  },
  {
    image : <SiEthereum /> ,
    name : "SOL"

  },
  {
    image : <SiEthereum /> ,
    name : "ALU"

  },

]


  return (
    <div  style={{backgroundColor:"#393E46"  , height:'100vh' , width:'100vw' , color:"#333" , paddingTop:'4rem'}}  >
    <div  className={Style.token}>

      {/* heading box */}
        <div className='flex flex-column justify-between p-2'>
          <h4 className='font-bold text-lg' style={{color:'#333'}}>Select a Token</h4>
          <div><AiFillSetting style={{cursor:'pointer'}} width={50} height={50} onClick={() => openToken(false)} /> </div>
       
    </div>

    {/* // search token input biox */}
    <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input type='text' placeholder='Search for tokens....' style={{border:'2px solid #333',  borderRadius:'0.6rem' , color:'#333', 
     outline:'0',backgroundColor:'transparent', fontSize:'1.2rem'}} />
  </InputGroup>


    <div className={Style.tokendisplay}>
      {coin.map((element , key) => (
        <span key={ key + 1 } className={active === key  + 1 ? `${Style.active}` : "" } onClick={() => {
          setactive(key + 1 ) 
          tokens({name : element.name , image : element.image})
        }} >
          {/* <image src={} width={'30'} height={'30'} /> */}
          <SiEthereum width={'30'} height={'30'} style={{display:'inline'}}/>
          {element.name}
        </span>


      ))}
    </div>


   

    </div>
</div>
  )
}

export default Tokensearch