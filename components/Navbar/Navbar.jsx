"use client"
import React , {useState , useEffect , useContext} from 'react'
import { Input , InputGroup  , Image, Box, Button} from '@chakra-ui/react';
import ipcslogo from "../../../tradeflow/assets/logo.png"
import Link from 'next/link';
import { ConnectWallet } from '@thirdweb-dev/react';

import { TokenList } from '@components';

const Navbar = () => {
    
    // usestate
    const [openToolBox  , setopenToolBox] = useState(false)

    // handlebutton
    const handlebutton = () => {}

  return (
    <>

    <div  className='p-6' style={{backgroundColor:'#393E46'}} >
        <div className='flex justify-between flex-column flex-wrap'>
            <div className='flex justify-around gap-6 flex-column flex-wrap'> 
                <div className='gap-2'>
                    <p className='text-2xl' style={{color:'#7895CB'}}>
                   tradeflow
                        </p>
                </div>
                <div className='text-xl hover:underline' style={{color:'#fff'}}>
                    <a to={'/swap'} >Swap </a>
                </div>
                <div  className='text-xl hover:underline' style={{color:'#fff'}}>
                <a to={'/pool'} >Pool </a>
                </div>
                <div  className='text-xl hover:underline' style={{color:'#fff'}} >
                <a to={'/tokenlist'} >Token </a>
                </div>
            </div>
            <div>
            <InputGroup >
    <Input type='text' size='lg' variant={'outline'} style={{color:'#7895CB'}} placeholder='Search Tokens...' />
  </InputGroup>

              
            </div>
            <div className='flex justify-around gap-6 flex-column flex-wrap ' style={{justifyContent:'center' , alignContent:'center' }} >
            <div>
                {openToolBox && (
                    <TokenList tokenData='hey' setopenToolBox={setopenToolBox} />
                )}
             </div>

             <div className='text-xl hover:underline' style={{color:'#fff', marginTop:'0.5rem'}}>
             <Button onClick={() => setopenToolBox(true)} variant='solid' style={{backgroundColor:'#7895CB'}} size='lg'>Your Token's</Button>
             </div>

             {/* // connect wallet button */}
                <div>
             <ConnectWallet/>
             </div>
            
            </div>
            
        </div>
    </div>

    </>
  )
}

export default Navbar