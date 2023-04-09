// import React, { useState, useEffect } from 'react';
// import data from '../../data/csvjson.json';

// function CalculatorPage({ query }) {
//   const [input, setInput] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const filteredData = data.filter(obj =>
//     obj.STATE.toLowerCase().includes(input.toLowerCase())
//   );
//   const resultsArray = filteredData.slice(0, 10);

//   function handleInput(event) {
//     setInput(event.target.value);
//   }

//   useEffect(() => {
//     async function fetchImageUrls() {
//       setLoading(true);
//       const apiKey = 'AIzaSyDE47phApbyBA-9v6fIAxATsulHiZCpPXk';
//       const cx = '205ad6b60764248df';
//       const query = input;

//       const response = await fetch(
//         `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}&searchType=image`
//       );
//       const data = await response.json();
//       const urls = data.items.map(item => item.link);
//       setResults(urls);
//       setLoading(false);
//     }

//     fetchImageUrls();
//   }, [input]);

//   return (
//     <div>
//       <input type="text" onChange={handleInput} />
//       {loading && <p>Loading...</p>}
//       {!loading &&
//         resultsArray.map(obj => (
//           <div key={obj['STATION CODE']}>
//             <p>
//               <strong>Location:</strong> {obj.LOCATIONS}
//               <br />
//               <strong>State:</strong> {obj.STATE}
//               <br />
//               <strong>Temperature:</strong> {obj.Temp}
//               <br />
//               <strong>Dissolved Oxygen:</strong> {obj['D.O. (mg/l)']}
//               <br />
//               <strong>pH:</strong> {obj.PH}
//               <br />
//               <strong>Conductivity:</strong> {obj['CONDUCTIVITY ( mhos/cm)']}
//               <br />
//               <strong>BOD:</strong> {obj['B.O.D. (mg/l)']}
//               <br />
//               <strong>Nitrate/Nitrite:</strong>{' '}
//               {obj['NITRATENAN N+ NITRITENANN']}
//               <br />
//               <strong>Fecal Coliform:</strong> {obj['FECAL COLIFORM (MPN/100ml)']}
//               <br />
//               <strong>Total Coliform:</strong> {obj['TOTAL COLIFORM (MPN/100ml)Mean']}
//               <br />
//             </p>
//             {results.length > 0 && <img src={results[0]} alt="result" />}
//           </div>
//         ))}
//     </div>
//   );
// }

// export default CalculatorPage;





// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// import React, { useEffect, useState } from 'react';
// import data from '../../data/csvjson.json';

// function CalculatorPage({ query }) {
//   const [input, setInput] = useState('');
//   const [imageUrls, setImageUrls] = useState([]);
// const filteredData = data.filter((obj) =>
//     obj.STATE.toLowerCase().includes(input.toLowerCase())
//   );
//   useEffect(() => {
//     // const fetchImageUrls = async () => {
//     //   const urls = [];
//     //   for (const obj of filteredData) {
//     //     const res = await fetch(
//     //       `https://www.googleapis.com/customsearch/v1?key=AIzaSyDE47phApbyBA-9v6fIAxATsulHiZCpPXk&cx=205ad6b60764248df&q=${encodeURIComponent(obj.LOCATIONS)}&searchType=image&num=1`
//     //     );
//     //     const json = await res.json();
//     //     urls.push(json.items[0].link);
//     //   }
//     //   setImageUrls(urls);
//     // };

//     const fetchImageUrls = async  (query)=> {
//       const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDE47phApbyBA-9v6fIAxATsulHiZCpPXk&cx=205ad6b60764248df&q=${query}&searchType=image&num=1`;
//       const response = await fetch(url);
//       const data = await response.json();

//       if (data.items && data.items.length > 0) {
//         return data.items[0].link;
//       } else {
//         return null;
//       }
//     }

//     fetchImageUrls();
//   }, [filteredData]);


//   const resultsArray = filteredData.slice(0, 10).map(async obj => {
//     const imageUrl = await fetchImageUrls(obj.LOCATIONS);
//     return (
//       <div key={obj['STATION CODE']}>
//         <p>
//           <strong>Location:</strong> {obj.LOCATIONS}<br />
//           <strong>State:</strong> {obj.STATE}<br />
//           <strong>Temperature:</strong> {obj.Temp}<br />
//           <strong>Dissolved Oxygen:</strong> {obj['D.O. (mg/l)']}<br />
//           <strong>pH:</strong> {obj.PH}<br />
//           <strong>Conductivity:</strong> {obj['CONDUCTIVITY ( mhos/cm)']}<br />
//           <strong>BOD:</strong> {obj['B.O.D. (mg/l)']}<br />
//           <strong>Nitrate/Nitrite:</strong> {obj['NITRATENAN N+ NITRITENANN']}<br />
//           <strong>Fecal Coliform:</strong> {obj['FECAL COLIFORM (MPN/100ml)']}<br />
//           <strong>Total Coliform:</strong> {obj['TOTAL COLIFORM (MPN/100ml)Mean']}<br />
//         </p>
//         <img src={imageUrl || defaultImageUrl} alt="Location" />
//       </div>
//     );
//   });


//   function handleInput(event) {
//     setInput(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" onChange={handleInput} />
//       {resultsArray}
//     </div>
//   );
// }

// export default CalculatorPage;





// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





import React, { useEffect, useState } from 'react'
import data from '../../data/csvjson.json';

import Lottie from "lottie-react";
import loadingspinner from "../../lotteAnimation/loading.json";
import { Grid, Input, LinearProgress, Paper, Snackbar, Tooltip, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircularProgress from '@mui/material/CircularProgress';

function CalculatorPage({ query }) {
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(true)
  const [open, setOpen] = React.useState(false);
  setTimeout(() => {
    setLoading(true)
  }, 2000);

  const [input, setInput] = useState(' ');
  const [imageSrc, setImageSrc] = useState('');
  const [resultsArray, setresultsArray] = useState([]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setOpen(false)
      return;
    }
    setOpen(false);
  };

  const regex = /[\s\t]+/;

  function handleSearch() {
    if (regex.test(input)) {
      setOpen(true)
      return
    }
    setLoading1(false)
    const apiKey = 'AIzaSyDJPIzjF4Zt5lTrXKTXiBuybltw1WvP07c';
    const searchEngineId = '702d1d1d1a8094fb9';


    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${input + "+4k+images"}&searchType=image&imgSize=large&num=1`;

    const getTopImage = async () => {
      try {
        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
        if (data && data.items && data.items.length > 0) {
          setImageSrc(data.items[0].link);
        } else {
          console.log('No image found');
        }
      } catch (error) {
        console.log(error);
      }
    }

    getTopImage();


    const filteredData = data.filter(obj => obj.STATE.toLowerCase().includes(input.toLowerCase()));
    setresultsArray(filteredData)

    setTimeout(() => {
      setLoading1(true)
    }, 2000);

  };



  function handleInput(event) {
    setInput(event.target.value);
  }
  return (
    <>
      {
        loading ? (
          <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>

            <div style={{ height: "10%" }} ></div>


            <div style={{ height: "90%" }}>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>

                <Typography className="myAnim" color={"whitesmoke"} fontWeight={"bold"} variant="h4"  >India Water Sources Analysis</Typography >

              </div>

              <div className="myAnim" style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>

                <Input sx={{ color: "white", width: "40rem", height: "3rem", background: "#726e6e24", borderRadius: "8px", textAlign: "center", padding: "1rem" }} placeholder="Enter any state name" size='lg' variant="solid" onChange={handleInput} />
                <Button disabled={loading1 ? false : true} startIcon={loading1 ? <SearchIcon /> : <CircularProgress sx={{ height: "rem" }} color="secondary" />} variant='contained' color='success' onClick={handleSearch}>
                  {loading1 ? "search" : ""}
                </Button>
              </div>

              <Box sx={{
                display: "flex",
                margin: "2rem",
                flexWrap: "wrap",
                justifyContent: "center",
                height: "65%",
                margin: "3rem",
                overflow: "auto"
              }}>
                {loading1 ? (resultsArray.slice(0, 30).map((obj, index) => (


                  <Paper className="myAnim" elevation={5} sx={{
                    position: "relative",
                    display: "inline-block", background: "#05132a", color: "#a3a3a3", padding: "1rem", width: "25%", wordWrap: "break-word", margin: "1rem"
                  }}>
                    <LinearProgress sx={{ position: "relative" }} variant="determinate" color='success' value={(8.5 - obj.PH) * 20} />
                    <p style={{ position: "relative" }} key={obj['STATION CODE']}>

                      <Tooltip title="SEE ON MAP" arrow>
                        <div style={{ textAlign: "center", background: "" }} ><h3>{index + 1}{" "}

                        </h3></div>
                      </Tooltip>

                      <strong>Location:</strong> {obj.LOCATIONS}<br />
                      <strong>Temperature:</strong> {obj.Temp}<br />
                      <strong>Dissolved Oxygen:</strong> {obj['D.O. (mg/l)']}<br />
                      <strong>pH:</strong> {obj.PH}<br />
                      <strong>Conductivity:</strong> {obj['CONDUCTIVITY ( mhos/cm)']}<br />
                      <strong>BOD:</strong> {obj['B.O.D. (mg/l)']}<br />
                      <strong>Nitrate/Nitrite:</strong> {obj['NITRATENAN N+ NITRITENANN']}<br />
                      <strong>Fecal Coliform:</strong> {obj['FECAL COLIFORM (MPN/100ml)']}<br />
                      <strong>Total Coliform:</strong> {obj['TOTAL COLIFORM (MPN/100ml)Mean']}
                      <br />
                      <Button
                        onClick={() => { window.open(`https://www.google.com/maps/search/?api=1&query=${obj.LOCATIONS}`, '_blank') }}
                        style={{ marginTop: "0.6rem" }} variant='outlined' color='secondary' startIcon={<LocationOnIcon />}>See on map</Button>
                    </p>

                    <div style={{
                      position: "absolute",
                      width: "9rem",
                      height: "6rem",
                      bottom: "2rem",
                      right: "0.5rem",
                    }}>

                      <img style={{
                        position: "absolute",
                        width: "9rem",
                        height: "6rem",
                        bottom: "2rem",
                        right: "0.5rem",
                      }} src={imageSrc} />
                    </div>
                  </Paper>

                ))) :
                  (
                    <div style={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>

                      <Lottie
                        animationData={loadingspinner}
                        style={{ height: "15%" }}
                      />
                    </div>
                  )
                }

              </Box>

            </div>
            <Snackbar
              open={open}
              onClose={handleClose}
              autoHideDuration={3000}
              message="Field is Empty !!"
              variant="success"
            />
          </div >


        ) :
          (<div style={{
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
        </div>)
      }
    </>
  )



}


export default CalculatorPage;
