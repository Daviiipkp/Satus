import { useState } from 'react'

import { Header } from './components/Header'
import {Horizontal_Divisor} from './components/Horizontal_Divisor'
import Logo from "./assets/2.jpg"

function App() {
  

  return (
    <div className="w-screen h-screen bg-[#000000] flex flex-col overflow-hidden">
      <Header/>
      <Horizontal_Divisor/>
      <div className="flex w-full h-full bg-black">

          <div className="w-6/7 h-full flex flex-col items-center">
            <div className="h-4/5 w-full rounded-2xl my-4 ml-8 flex">
                <div className="w-1/2 flex flex-col items-center gap-5">
                  <img src={Logo} alt="Logo" className="w-80 h-111 mx-3 mt-4"/>
                  <h2 className="text-white text-3xl font-marker ml-3">From Creators, to Creators.</h2>
                </div>
                <div className="w-1/2 flex flex-col items-center">
                  <div className="flex flex-col">
                    <h1 className="text-white text-3xl font-syne mx-3 mt-4">What is 'Satus Brasil'?</h1>
                    <h2 className="text-white text-2xl font-syne mx-3 my-2">Well, some people would call us an Agency, but we don't really like that terminology...</h2>
                    <h2 className="text-white text-2xl font-syne mx-3 my-2">Here at Satus we build solutions that actually make your life easier, focusing on understanding the pain of our customers.</h2>
                    <h2 className="text-white text-2xl font-syne mx-3 my-2">We've been doing this since 'Satus' wasn't even a thing.</h2>
                    <h2 className="text-white text-2xl font-syne mx-3 my-2">Don't believe me? Check this:</h2>  
                  </div>
                  <button className="bg-white text-black text-2xl px-9 py-2 mt-4 rounded-2xl hover:bg-amber-100 cursor-pointer transition-colors duration-200">The Beginning</button>
                </div>
                
            </div>
            <div className="h-2/5 w-full rounded-2xl my-4 ml-8 flex flex-col relative outline-1 outline-white items-center">
              <h1 className="text-white text-4xl font-syne mx-3 mt-4">SOMETHING PRETTY COOL SHOULD GO HERE</h1>

              
            </div>
          </div>

          <div className="w-full h-full flex  rounded-2xl ml-5 flex-col items-center">
            <h1 className="text-white text-4xl font-marker mt-8">Check what we can offer you right now:</h1>
            <div className="flex w-full h-full gap-2 px-2 pb-6">
              <div className="w-1/2 h-full flex flex-col items-center mt-4 ">
                <div className="w-full h-1/3 flex flex-col items-center">
                  <h1 className="text-white text-2xl font-marker">THIS IS A PRODUCT</h1>
                  <h2 className="text-white text-lg font-syne">Description of the product right here</h2>
                </div>
                <div className="w-full h-1/3 flex flex-col items-center">
                  <h1 className="text-white text-2xl font-marker">THIS IS A PRODUCT</h1>
                  <h2 className="text-white text-lg font-syne">Description of the product right here</h2>
                </div>
                <div className="w-full h-1/3 flex flex-col items-center">
                  <h1 className="text-white text-2xl font-marker">THIS IS A PRODUCT</h1>
                  <h2 className="text-white text-lg font-syne">Description of the product right here</h2>
                </div>
            
              </div>
              <div className="w-1/2 h-full flex flex-col items-center mt-4 ">
                <div className="w-full h-1/3 flex flex-col items-center">
                  <h1 className="text-white text-2xl font-marker">THIS IS A PRODUCT</h1>
                  <h2 className="text-white text-lg font-syne">Description of the product right here</h2>
                </div>
                <div className="w-full h-1/3 flex flex-col items-center">
                  <h1 className="text-white text-2xl font-marker">THIS IS A PRODUCT</h1>
                  <h2 className="text-white text-lg font-syne">Description of the product right here</h2>
                </div>
                <div className="w-full h-1/3 flex flex-col items-center">
                  <h1 className="text-white text-2xl font-marker">THIS IS A PRODUCT</h1>
                  <h2 className="text-white text-lg font-syne">Description of the product right here</h2>
                </div>

              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default App
