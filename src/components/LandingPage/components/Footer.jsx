import { IconButton } from '@mui/material';
import React from 'react';
import './footer.css'

function Footer() {
    const styles = {
        root: {
            marginTop: "10px",
            backgroundColor: '#060116',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        logo: {
            fontWeight: 'bold',
            fontSize: '2rem',
            marginBottom: '20px',
        },
        link: {
            color: '#fff',
            textDecoration: 'none',
            marginLeft: '20px',
            marginRight: '20px',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        social: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
        },
        icon: {
            color: '#fff',
            marginLeft: '10px',
            marginRight: '10px',
            '&:hover': {
                color: '#eee',
            },
        },
    };

    return (
        <div style={styles.root}>

            <div style={{display:"flex",padding:"2rem",width:"90%"}}>
                <div style={{display:"flex",padding:"2rem",justifyContent:"center",alignItems:"center",width:"50%"}}>
                    <h1 style={styles.logo}>Waste Water Management</h1>
                    <div style={styles.social}>

                        <IconButton style={styles.icon} aria-label="facebook">
                            <i className="fa fa-facebook"></i>
                        </IconButton>
                        <IconButton style={styles.icon} aria-label="twitter">
                            <i className="fa fa-twitter"></i>
                        </IconButton>
                        <IconButton style={styles.icon} aria-label="linkedin">
                            <i className="fa fa-linkedin"></i>
                        </IconButton>
                        <IconButton style={styles.icon} aria-label="instagram">
                            <i className="fa fa-instagram"></i>
                        </IconButton>
                    </div>
                </div>

                <div style={{display:"flex",padding:"2rem",justifyContent:"center",alignItems:"center",width:"50%"}}>
                    <div className="input-group">
                        <input type="email" className="input" id="Email" name="Email" placeholder="@xyz.xyz" autoComplete="off" />
                        <button className="button--submit" defaultValue="Subscribe" type="submit">Suscribe</button>
                    </div>
                </div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fillOpacity={1} d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,144C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>


        </div>
    );
}

export default Footer;