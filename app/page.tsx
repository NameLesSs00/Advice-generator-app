"use client";
import { useState  } from "react";
import Image from "next/image";
import imgMobile from "@/public/images/pattern-divider-mobile.svg"
import imgDesk from "@/public/images/pattern-divider-desktop.svg"
import dice from "@/public/images/icon-dice.svg"

export default function Home() {
  
  // code to handle API and do a request
  const [id,setID] = useState("ZERO");
  const [advice,setAdvice] = useState("Don't be anyone but yourself.");

  async function handleOnClick(){
    try{
      const response = await fetch("https://api.adviceslip.com/advice");
      const reslut = await response.json()
      setID(reslut.slip.id);
      setAdvice(reslut.slip.advice);
      console.log(reslut.slip.advice)
    } catch(error){
      console.error("error" , error)
    } finally{
    }

  }


  return (
    <div className=" bg-[rgb(49,58,73)] flex flex-col items-center relative m-2 rounded-lg">
     
     <p className=" text-green-300 my-8">ADVICE # {id}</p>
     
     <h1 className=" text-white font-bold text-2xl p-5 max-w-[600px] text-center">&quot;{advice}&quot;</h1>
    
    <Image className="md:hidden my-5" src={imgMobile} alt="divider"></Image>

    <Image className="hidden md:block my-5" src={imgDesk} alt="divider" ></Image>

    <button className=" bg-green-300 h-15 w-15 rounded-full relative top-8 cursor-pointer flex justify-center items-center hover:shadow-[0_4px_20px] hover:shadow-green-200/50 hover:bg-green-200" onClick={handleOnClick}>
      <Image src={dice} alt="dice img"></Image>
    </button>

    </div>
  );
}
