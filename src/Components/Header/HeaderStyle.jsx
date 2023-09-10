//import { makeStyles } from '@material-ui/styles';

import { makeStyles } from '@material-ui/core/styles'
import { blue, blueGrey } from '@material-ui/core/colors'
import { capitalize } from '@material-ui/core'

export const useStyles=makeStyles((theme)=>({
    toolbar:{
  display:"flex",
  flexFlow:"row wrap",
  justifyContent:"space-between"
  
    },
  logo:{
    color:"white",
  },
  navlist:{
minWidth:"250px",
maxWidth:"300px",

  },

  ulAvatar:{
    //backgroundColor:"blue",
    backgroundColor:blue["A200"],
    color:"white",
    
      },

  navAvatar:{
    width:"35px",
    height:"35px"
  },

  // Wrapper of main container
  wrapper:{
    height:"100vh", background:"#efefef",
    padding:theme.spacing(2,2,0,34),
    [theme.breakpoints.down("xs")]:{
      padding:theme.spacing(2,2),
    },
    
    },

    //Side Nav
  drawerPaper:{
    width:"250px",
    marginTop:"65px",
    [theme.breakpoints.down("xs")]:{
      marginTop:"0px",
    },
  },



  navlinks:{
color:blueGrey["A400"],
"&:hover div":{
color:blue["A200"],
},

"& div":{
  color:blueGrey["A400"],
}
  },


  activeNavlinks:{

    color:blue["A700"],
    
"& div":{
  color:blueGrey["A700"],
}

  },

  navButton:{
width:"100%",
texttransform:"capitalize",


  },
  
  }));