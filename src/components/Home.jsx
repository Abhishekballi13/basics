import React, { useEffect, useState } from 'react'
import Coin from './Product';
import axios from "axios";
import Loader from './Loader';
const Home = () => {
    // const [temp,setTemp] = useState(0);
    // useEffect(()=>{
    //   console.log("mounted")
    //   return () =>[
    //     console.log("unmounted")
    //   ]
    // },[temp])
 
   
    const [coins,setCoins] = useState([])
    const [loading,setLoading] = useState(true)

   useEffect(()=>{
    const fetchAllCoins = async () =>{;
     try{
      
    const {data} = await axios.get("https://api.coigecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20")
    
    setCoins(data);
    setLoading(false);
     }
     catch (error){
     alert("not working")
     }
    };

    fetchAllCoins();
   },[])

  return (
    <div className='home'>
    {/* <button onClick={()=>setTemp(temp+1)}>Press</button> */}
     {
      loading?(<Loader />):(
          coins.map(i=>(
             <Coin name={i.name} symbol={i.symbol} key={i.id} imgSrc={i.image} price={i.current_price}/>
          ))
      )
     }
    </div>
  )
}

export default Home
