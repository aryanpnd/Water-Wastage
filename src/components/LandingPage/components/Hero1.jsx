import React, { useState } from 'react'
import Lottie from "lottie-react";
import earth from "../../../lotteAnimation/earth.json";
import { TypeAnimation } from 'react-type-animation';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import './style.css'
import waterText from '../../../assets/waterText.png'
import { color } from '@mui/system';

function Hero1() {
  const [loading, setLoading] = useState(false)
  return (

    <div className='hero1' style={{ display: "flex", flexDirection: "column", height: "100%", height: "100%", margin: "0" }} >


      <div style={{ display: "flex", height: "15%" }}></div>

      <div style={{ display: "flex", height: "75%", justifyContent: "center", alignItems: "center", justifyContent: "space-between", paddingLeft: "5rem", paddingRight: "5rem" }}>

        <div className="myAnim" style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "100%", width: "50%", paddingTop: "2.5rem", paddingLeft: "2.5rem" }}>
          <Typography style={{
            width: "100%", height: "60%", wordWrap: " break-word", fontSize: '1.8em', display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "whitesmoke"
          }} variant="h4" >
            <Typography  variant="h3"  >A Step Towards <span >Managing</span>  </Typography >{' '}
            <Typography fontWeight={"bold"} variant="h2"  >WATER</Typography >
            <div style={{ width: "100%", height: "100%", wordWrap: " break-word" }}>
              <TypeAnimation
                style={{ color: "#c3babaa6", fontStyle: "italic" }}
                sequence={[
                  '“If there is magic on this planet, it is contained in water.” – Loren Eiseley',
                  500,
                  // () => setTextColor('green'),
                  '“Water is life, and clean water means health.” – Audrey Hepburn',
                  500,
                  // () => setTextColor('yellow'),
                  '“Water is the soul of the Earth.” – W. H. Auden',
                  500,
                  // () => setTextColor('blue'),
                  '“Water is the driving force of all nature. Preserve water.” – Leonardo da Vinci',
                  500,
                  // () => setTextColor('voilet'),
                ]}
                repeat={Infinity}
                cursor={true}
              />
            </div>
          </Typography >
          <button  style={{width:"15rem"}} className="button-82-pushable myAnim" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
              Explore
            </span>
          </button>
        </div>

        <div className="myAnim" style={{ display: "flex", height: "100%", position: "relative" }}>
        
          <svg style={{ position: "absolute", width: "100%" }} xmlns="http://www.w3.org/2000/svg" viewBox="61.059 78.23 872.38 834.696"><defs><linearGradient id="b" gradientTransform="rotate(-45 .5 .5)"><stop offset="0%" stopColor="#bc287c" /><stop offset="50%" stopColor="#784BA0" /><stop offset="100%" stopColor="#0966a8" /></linearGradient><clipPath id="a"><path fill="currentColor" d="M911.5 655.5Q870 811 723.5 875t-286 20q-139.5-44-271-135t-99-248.5Q100 354 188 233T427 86q151-26 301.5 35T916 341q37 159-4.5 314.5Z" /></clipPath></defs><g clipPath="url(#a)"><path fill="url(#b)" d="M911.5 655.5Q870 811 723.5 875t-286 20q-139.5-44-271-135t-99-248.5Q100 354 188 233T427 86q151-26 301.5 35T916 341q37 159-4.5 314.5Z" /></g></svg>

          <Lottie 
            animationData={earth}
            style={{ height: "100%" }}
          />

        </div>

      </div>

    </div> 

  
  )
}

export default Hero1