import React from 'react'
import Lottie from "lottie-react";
import underwater from "../../../lotteAnimation/underwater.json";
import { Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

function Hero2() {

    return (
        <div style={{ position: "relative", height: "100%" }} >
            <div style={{ position: "absolute", width: "100%" }} >
                <Lottie
                    animationData={underwater}
                    style={{ height: "100%" }}
                />
            </div>
            <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", position: "absolute" }}>
                <Typography fontWeight={"bold"} variant="h1" gutterBottom>
                    
                    <TypeAnimation
                    style={{ color: "white", fontStyle: "italic" }}
                    sequence={[
                      'Where is Water?',
                      500,
                      'How much Water is left for drinking?',
                      500,
                    ]}
                    repeat={Infinity}
                    cursor={true}
                  />
                </Typography>
            </div>
        </div>
    )
}

export default Hero2