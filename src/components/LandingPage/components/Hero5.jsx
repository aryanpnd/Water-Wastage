import { Box } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import saveWater from '../../../assets/saveWater.mp4'

function Hero5() {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        });

        observer.observe(videoRef.current);
    }, [videoRef]);
    return (
        <Box sx={{ height: "100%", width: "100%", }}>
            <video ref={videoRef} width={"100%"} height={"100%"} autoplay muted >
                <source src={saveWater} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </Box>
    )
}

export default Hero5