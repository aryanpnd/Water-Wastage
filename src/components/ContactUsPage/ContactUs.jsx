import { Box, Button, Divider, OutlinedInput, Paper, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Lottie from "lottie-react";
import contactus from "../../lotteAnimation/contactus.json";
import './contact.css'

function ContactUs() {
    const [loading, setLoading] = useState(false)
    setTimeout(() => {
        setLoading(true)
    }, 2000);

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: "white" ,
        },
        label: {
          color: "#bbbbbb" ,
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: "blue",
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: "grey",
          },
          '&:hover fieldset': {
            borderColor:"white",
          },
          '&.Mui-focused fieldset': {
            borderColor: '#1976d2',
          },
          input: {
            color:"white"
          }
        },
      });

    return (
        <>
            {loading ?
                (<Box sx={{ height: "100%", width: "100%" }}>

                    <Box sx={{ height: "10%" }}></Box>

                    <Box sx={{ display: "flex", height: "90%", width: "100%" }}>

                        <Box sx={{ width: "50%" }} >
                            <Lottie
                                animationData={contactus}
                                style={{ height: "100%" }}
                            />
                        </Box>

                        <Box sx={{padding:"1rem",width:"38%"}}>
                            <Paper elevation={3} sx={{
                                background: "#1a203c" ,
                                padding: "2rem",
                                height:"85%",
                                borderRadius: "12px",
                                overflow: "hidden",
                                color: "white" 
                            }}>
                                <Typography variant="h3"  >Reach to US </Typography >

                                <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                                    
                                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "70%",}}>

                                        <CssTextField
                                            sx={{ "& input": { color:  "white"} }} color='secondary' id="outlined-basic" label="Name" variant="outlined" type='text' p
                                            onChange={(e) => { return(e.target.value) }}  />

                                        <CssTextField
                                            sx={{ "& input": { color:  "white"} }} color='secondary' id="outlined-basic" label="Email" variant="outlined" type='text' p
                                            onChange={(e) => { return(e.target.value) }}  />

                                        <CssTextField
                                            sx={{ "& input": { color:  "white"} }} color='secondary' id="outlined-basic" label="Message" variant="outlined" type='text' p multiline rows={3}
                                            onChange={(e) => { return(e.target.value) }}  />

                                    </Box>


                                    <Box display={"flex"} justifyContent={"center"} sx={{ width: "100%" }}>
                                        <Button
                                            variant="contained" color='success' >Contact Us</Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </Box>)
                :
                (
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
        </>)
}

export default ContactUs