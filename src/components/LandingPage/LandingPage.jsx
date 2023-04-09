
import React, { useState } from 'react'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Lottie from "lottie-react";
import loadingspinner from "../../lotteAnimation/loading.json";

function LandingPage() {
    const [loading, setLoading] = useState(false)
    setTimeout(() => {
        setLoading(true)
    }, 2000);
    return (
        <>  {
            loading ? (<>
                <Hero1 />
                <Hero2 />
                <Hero3 />
            </>) : (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <div class="spinner" >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
        }
            {/* <Hero3 /> */}
        </>
    )
}

export default LandingPage