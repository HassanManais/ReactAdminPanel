
import {Line} from 'react-chartjs-2';
import { fakeArrayDataGenetator } from '../../utils/fakeArrayDataGenetator';
import { blue, red } from '@material-ui/core/colors';
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement

}from 'chart.js';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


export const DisplayCardGraph=(id,dataa,brColor,bgColor)=>{

  const data={
    labels:[id],
    datasets:[{
     data:dataa,
     fill:true,
     backgroundColor:bgColor,
     borderColor:brColor,
     //pointBorderColor:"transparent",
     //pointBorderWidth:4,
     tention:0.5

    }]
};

const options={

  scales:{
    x:{
   
    display:false,
    title:{display:false},

  },

  y:{
   
    display:false,
    title:{display:false},

  },
  },

  plugins:{
    legend:{display:false}
  },

  responsive:true,
maintainAspectRatio:false,


}


return(
 


  //<div style={{width:"500px", height:"500px",marginLeft:"20px" }}>

  <div> 
    {/*--------------First-Handle-Choty-Graph-Issues-------------*/}
{/*<Line data={data} options={options}></Line>------------*/}

  </div>


)};


export const GeneralGraphComponent=(id,typee,dataset,xAxislabel)=>{

  const data={
    type:typee,
    labels:xAxislabel,
    datasets:dataset

};

const options={

  scales:{
  /*  x:{
   
    display:false,
    title:{display:false},

  },

  y:{
   
    display:false,
    title:{display:false},

  },

  */
  },

  plugins:{
    legend:{position:"bottom"}
  },

  responsive:true,
maintainAspectRatio:false,

}

return(
 

<div>
  
    {/*--------------First-Handle-Choty-Graph-Issues-------------*/}
    
  {/*<div style={{width:"500px", height:"500px",marginLeft:"20px" }}>*/}
{/*<Line data={data} options={options}></Line>------------*/}



  </div>

)};






