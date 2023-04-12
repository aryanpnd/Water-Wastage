import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Input,
    LinearProgress,
    Paper,
    Snackbar,
    Tooltip,
} from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircularProgress from '@mui/material/CircularProgress';
import './spinner.css';
import blogData from '../../data/blog.json'

function Blog() {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const observer = useRef();

    useEffect(() => {
        const getNews = async () => {
            setLoading(true);
            const url = `https://newsapi.org/v2/everything?q=water+waste&sortBy=relevance&language=en&excludeSources=fox-news&pageSize=9&page=${page}&apiKey=33d07d8212ca48ad9303f34a9cd9bdf1`;
            // const response = blogData;
            // const data = await response.json();
            setNews(prevNews => [...prevNews, ...blogData.articles]);
            setTimeout(() => {
                setLoading(false);
                // setLoading1(true);
            }, 1000);
        };
        getNews();
    }, [page]);

    useEffect(() => {
        setTimeout(() => {
            setLoading1(true);
        }, 1000);
    }, []);

    const lastNewsElementRef = useCallback(
        node => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    setPage(prevPage => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading]
    );

    function handleInput() { }

    function handleSearch() { }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                }}
            >
                {loading1 ? (
                    <>
                        <div style={{ height: '10%' }}></div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                height: '80%',
                                marginRight: '1.5rem',
                                overflow: 'auto',
                            }}
                        >
                            <div
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {news.map((article, index) => {
                                    if (news.length === index + 1) {
                                        return (
                                            <Tooltip title="Read More.." arrow key={article.url}>
                                                <Paper
                                                    ref={lastNewsElementRef}
                                                    className="myAnim"
                                                    elevation={10}
                                                    onClick={() => {
                                                        window.open(article.url, '_blank');
                                                    }}
                                                    sx={{
                                                        display: 'inline-block',
                                                        background: '#061b3cb8',
                                                        color: '#a3a3a3',
                                                        padding: '1rem',
                                                        width: '15%',
                                                        borderRadius: '10px',
                                                        height: '45%',
                                                        wordWrap: 'break-word',
                                                        margin: '1rem',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                            height: "45%",
                                                        }}>

                                                        <img style={{
                                                            width: "100%",
                                                            height: "100%",
                                                        }} src={article.urlToImage} />
                                                    </div>

                                                    <Box sx={{ width: "100%", height: "55%" }}>
                                                        <Box sx={{ height: "60%", overflow: "hidden" }}>
                                                            <Typography gutterBottom color="aliceblue" variant="h6" component="h3">
                                                                {article.title}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ height: "40%", overflow: "hidden" }}>
                                                            <Typography variant="body2" color="#8b8b8bed" component="p">{article.description}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper></Tooltip>
                                        );
                                    } else {
                                        return (
                                            <Tooltip title="Read More.." arrow>
                                                <Paper className="myAnim" elevation={10}
                                                    onClick={() => { window.open(article.url, '_blank') }}
                                                    sx={{
                                                        display: "inline-block", background: "#061b3cb8", color: "#a3a3a3", padding: "1rem", width: "15%", height: "45%", wordWrap: "break-word", margin: "1rem", borderRadius: "10px", cursor: "pointer"
                                                    }}>


                                                    <div style={{
                                                        width: "100%",
                                                        height: "45%",
                                                    }}>

                                                        <img style={{
                                                            width: "100%",
                                                            height: "100%",
                                                        }} src={article.urlToImage} />
                                                    </div>

                                                    <Box sx={{ width: "100%", height: "55%" }}>
                                                        <Box sx={{ height: "60%", overflow: "hidden" }}>
                                                            <Typography gutterBottom color="aliceblue" variant="h6" component="h3">
                                                                {article.title}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ height: "40%", overflow: "hidden" }}>
                                                            <Typography variant="body2" color="#8b8b8bed" component="p">{article.description}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper></Tooltip>
                                        );
                                    }
                                })}

                            </div>
                        </Box>
                        <div style={{ height: "10%" }}>
                            {loading &&
                                <>
                                    <div style={{
                                        display: "flex", justifyContent: "center", alignItems: "center", height: "100%"
                                    }}>
                                        <div class="loading" >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <h3 style={{ marginLeft: "1rem", color: "white" }}>loading blogs...</h3>
                                    </div>

                                </>
                            }
                        </div></>
                )
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
                            <h2 style={{ color: "white" }}>Loading Blogs....</h2>
                        </div>
                    )
                }
            </div>
        </>


    );
}

export default Blog;
