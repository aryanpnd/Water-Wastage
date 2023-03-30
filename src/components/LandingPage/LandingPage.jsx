
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
    }, 1500);
    return (
        <>  {
            loading ? (<>
                <Hero1 />
                <Hero2 />
            </>) : (<div style={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>

                <Lottie
                    animationData={loadingspinner}
                    style={{ height: "15%" }}
                />
            </div>)
        }
            {/* <Hero3 /> */}
        </>
    )
}

export default LandingPage