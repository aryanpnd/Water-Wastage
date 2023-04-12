import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Lottie from "lottie-react";
import logo from "../lotteAnimation/logo.json";
import donateButton from "../lotteAnimation/donateButton.json";
import logoText from "../assets/logoText.png";
import { useMatch, useNavigate } from "react-router-dom";
import { Tooltip } from '@mui/material';

function Navbar() {
    const navigate = useNavigate();
    const homeLocation = useMatch("/")
    const blogLocation = useMatch("/blog")
    const calculatorLocation = useMatch("/analysis")
    const contactUsLocation = useMatch("/contactus")


    return (
        <AppBar className='glassmorphism' position="fixed" sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }, flexDirection: "row", justifyContent: "space-between", boxShadow: 0
            , height: "3.4rem",
            background: "rgba(255, 255, 255, 0)",
            // boxShadow: " 0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter:"blur(20px)",
                        //   -webkit-backdrop-filter: blur(7.5px);
            // border: "1px solid rgba(255, 255, 255, 0.18)"
        }} >
            <Toolbar variant="regular">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                    {/* <img src={logo} style={{height:"3rem"}} /> */}
                    <Lottie
                        animationData={logo}
                        style={{ height: "3rem" }}
                        height={4}
                        width={4}
                    />
                </IconButton>

                <Typography variant="h6" color="inherit" component="div">
                    <img src={logoText} alt="" style={{ height: "3rem" }} />
                </Typography>
            </Toolbar>

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "1rem", width: "35rem" }}>

                <Tooltip title="Home" arrow>
                    <Button onClick={() => { navigate("/") }} sx={{ color: "whitesmoke", borderRadius: "15px", fontSize: "0.8rem" }} variant={homeLocation ? "contained" : ""}>Home</Button>
                </Tooltip>



                <Tooltip title="Blogs on water" arrow>
                    <Button onClick={() => { navigate("/blog") }} sx={{ color: "whitesmoke", borderRadius: "15px", fontSize: "0.8rem" }}
                        variant={blogLocation ? "contained" : ""}
                    >Blog</Button>
                </Tooltip>

                <Tooltip title="Indian Water Sources Analysis" arrow>
                    <Button onClick={() => { navigate("/analysis") }} sx={{ color: "whitesmoke", borderRadius: "15px", fontSize: "0.8rem" }} variant={calculatorLocation ? "contained" : ""}
                    >Calculator</Button>
                </Tooltip>

                <Tooltip title="Contact Us" arrow>
                    <Button sx={{ color: "whitesmoke", borderRadius: "15px", fontSize: "0.8rem" }}
                        variant={contactUsLocation ? "contained" : ""}
                        onClick={() => { navigate("/contactus") }}
                    >Contact Us</Button>
                </Tooltip>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "2rem",
                cursor: "pointer",
            }}>

                <Lottie
                onClick={() => { navigate("/donateus") }}
                    animationData={donateButton}
                    style={{ height: "2.5rem" }}
                    height={4}
                    width={4}
                />
            </div>
        </AppBar >
    )
}

export default Navbar