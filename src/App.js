import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import CalculatorPage from './components/CalculatorPage/CalculatorPage';
import Blog from './components/BlogPage/Blog';
import { Route, Routes } from "react-router-dom"
import ContactUs from "./components/ContactUsPage/ContactUs";
import DonationPage from "./components/DonationPage/DonationPage";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import maintnance from "./lotteAnimation/maintnance.json";
import mobileweb from "./lotteAnimation/mobileweb.json";
import Lottie from "lottie-react";

function App() {

  const [viewmode, setViewmode] = useState(false)

  return (
    <>
      <Navbar ></Navbar>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, margin: "0", width: "100%", height: "100%" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/analysis" element={<CalculatorPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/donateus" element={<DonationPage />} />
        </Routes>
      </Box>

      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }, flexDirection: "column", justifyContent: "center", alignItems: "center" ,height:"100%",width:"100%"}}>
        <Lottie
          animationData={maintnance}
          style={{ height: "7rem" }}
          height={4}
          width={4}
        />
        <Typography textAlign={"center"} marginBottom={"1rem"} color={"white"} fontWeight={"bold"} variant="h4" gutterBottom>we are sorry for the inconvenience</Typography>
        <Typography textAlign={"center"} color={"white"}variant="h6" gutterBottom>Mobile view is not supported yet</Typography>
        <Typography textAlign={"center"} color={"white"}variant="h6" gutterBottom>Please change screen size or the device ratio</Typography>

        
        <Lottie
          animationData={mobileweb}
          style={{ height: "7rem" }}
          height={4}
          width={4}
        />
      </Box>
    </>
  );
}

export default App;
