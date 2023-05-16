import { Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config.js'
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import { DonutLarge, Pix } from "@mui/icons-material";
import { fontStyle } from "@mui/system";
import logo from "./logo.png";
import kabir from "./1.png";
import manav from "./2.png";
import madhav from "./3.png";
import aman from "./4.png";

// var a= 1;
console.log(logo)
const About = () => {
    const navigate = useNavigate();
    function changeImage(file)
    {
        let img=document.querySelector("#image");
        img.setAttribute("src",file);
    }
    const myStyle = {
        backgroundImage:
        "url('https://wallpaperaccess.com/full/2003822.png')",
        height: '1000px',
        width:'1600px',
        // marginTop: '30px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'left',

    };

    
    return (

            <div style={myStyle}>
            <div style ={{height:'10px',backgroundColor:"red"}}>
            <Grid item xs={6} style={{ paddingLeft: 30, textAlign: "left",height:'10px',width:'10px'}}>
            <img id="image" src={logo} width="200" height="200"/>
            </Grid>
            </div>
  
            <Grid item xs={6} style={{ paddingLeft: 30, textAlign: "left" }}>
            <Typography align='center' variant='h3' style={{paddingTop:'30px', paddingLeft:'200px', textAlign:"left", fontFamily: "cursive",fontWeight: "bold",fontSize:'90px',color:"white"}} >OUR TEAM</Typography>
            </Grid>

            <div>
            <Grid style={{ width: 290 }}>
            <Typography onClick={()=> changeImage(logo)} align='center' variant='h1' style={{paddingTop:'50px', paddingLeft:'20px', textAlign:"left", fontFamily: "cursive",fontSize:'57px',color:"yellow"}} >Members</Typography>
            <Typography onClick={()=> changeImage(kabir)} align='center' variant='h3' style={{paddingTop:'30px', paddingLeft:'30px', textAlign:"left", fontFamily: "monospace",fontSize:'30px',color:"darkblue"}} >Kabir Shamlani</Typography>
            <Typography onClick={()=> changeImage(manav)} align='center' variant='h3' style={{paddingTop:'0px', paddingLeft:'30px', textAlign:"left", fontFamily: "monospace",fontSize:'30px',color:"darkblue"}} >Manav Shah</Typography>
            <Typography onClick={()=> changeImage(madhav)} align='center' variant='h3' style={{paddingTop:'0px', paddingLeft:'30px', textAlign:"left", fontFamily: "monospace",fontSize:'30px',color:"darkblue"}} >Madhav Tank</Typography>
            <Typography onClick={()=> changeImage(aman)} align='center' variant='h3' style={{paddingTop:'0px', paddingLeft:'30px', textAlign:"left", fontFamily: "monospace",fontSize:'30px',color:"darkblue"}} >Aman Raj</Typography>
            </Grid>
            </div>
          
            <Grid item xs={12} style={{ paddingLeft: '30px' ,paddingBottom:'0px', paddingTop:'500px'}}>
                    <Button
                    
                        variant="outlined"
                        onClick={() => navigate('/')}
                        sx={{ minWidth: "100px", minHeight: "60px"
                   , backgroundColor:"red" }}
                    >
                       Back
                    </Button>
                </Grid>
             </div>


)

}
export default About