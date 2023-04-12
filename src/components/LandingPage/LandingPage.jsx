
import React, { useState } from 'react'
import Footer from './components/Footer';
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';

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
                <Hero4/>
                <Hero5/>
                <Footer/>
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