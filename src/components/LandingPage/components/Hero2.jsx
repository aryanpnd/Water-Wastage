import React from 'react'
import Lottie from "lottie-react";
import underwater from "../../../lotteAnimation/underwater.json";

function Hero2() {

    return (
        <div style={{ position: "relative", height: "100%" }} >
            <div style={{ position: "absolute", width: "100%" }} >
                <Lottie
                    animationData={underwater}
                    style={{ height: "100%" }}
                />
            </div>
        </div>
    )
}

export default Hero2