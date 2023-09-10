
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';


export const useStyles=makeStyles((theme)=>({
    section:{
      margin:theme.spacing(3,0),
    },
responsiveImg:{
width:"100%",
height:"auto%",
},

cardImage:{
maxHeight:"150px",
overflowY:"hidden",

},
    // Page
    pageTitle:{
      color:blueGrey[800],
      marginBottom:theme.spacing(2),
      textTransform:"capitalize",
    },

    pageSubTitle:{
      color:blueGrey[500],
      marginBottom:theme.spacing(1,0),
      textTransform:"uppercase",
    },

  
        cardLabel:{
        textTransform:"uppercase",
        color:blueGrey[500],
        textAlign:"center",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down("sm")]:{
        fontSize:"0.8rem",
},
    },



        cardTitle:{
        textTransform:"capitalize",
        color:blueGrey[800],
        textAlign:"center",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down("sm")]:{
            fontSize:"2.8rem",
        },
            },

            ratioBtn:{
         fontSize:"1rem",
         fontWeight:"bold"
            },
            CardContent:{
                  position:"relative",
            },

            //CardGraph

            displayCardGraph:{
               position:"absolute",
               bottom:"0",
               left:"0",
               width:"100% !important",
               height:"45% !important",

            },

            // User Traffic Graph

            displayUserGraph:{
               width:"100%",
               minHeight:"300px",
               height:"auto",

            },

            footer:{
             background:"#feffee",
             marginTop:"18px",
             padding:theme.spacing(0,0,0,33),
             [theme.breakpoints.down("sm")]:{
              padding:theme.spacing(1,1),
              marginTop:"8px",

             },

            },

            // CircularProgress Box
            boxCentered:{
              width:"100%",
              minHeight:"250px",
              display:"flex",
               flexFlow:"row wrap",
                justifyContent:"center",
                alignItems:"center"
            }

    }));