import {Line,Pie} from 'react-chartjs-2';
import { Box, CardContent, Typography,Card,Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useStyles } from '../BodyStyle';
import { fakeArrayDataGenetator } from '../../../utils/fakeArrayDataGenetator';
import { blue, red } from '@material-ui/core/colors';
import {GeneralGraphComponent} from '../../Common/GraphComponent';

import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend

}from 'chart.js';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);


export default function UserOverview() {
    const classes=useStyles();
    const [fetched, setFetched]=useState(false);



    const GraphData=[
      {
        id:"UserGraph",
         type:"line",
          datasets:[
            {
            label:"Current Month",
            data:fakeArrayDataGenetator({count:30,digit:100}),
            backgroundColor:"rgba(21,101,192,0.6)",
            borderColor:blue["A200"],
            fill:true,
            tension:0.5,
          },

          {
            label:"Last Month",
            data:fakeArrayDataGenetator({count:30,digit:100}),
            backgroundColor:"rgba(198,40,40,0.6)",
            borderColor:red["A200"],
            fill:true,
            tension:0.5,
          },
        
        
        ],
           xAxislabels:["week1, week2, week3, week4, week5 "]
        
        
        
        },
        {
          id:"userPieGraph",
           type:"pie",
            datasets:[
              {
              label:"Current Month",
              data:fakeArrayDataGenetator({count:3,digit:1000}),
              backgroundColor:[blue[100],blue[200],blue[300]],
              borderColor:blue["A200"],
              fill:true,
              tension:0.5,
            },
          
          ],
             xAxislabels:["Desktop, Tablet, Mobile"]
          
          
          
          },
    ];


    useEffect(()=>{
      if(!fetched){
    GraphData.map((item)=>
    GeneralGraphComponent({
         id:item.id,
         type:item.type,
         datasets:item.datasets,
         xAxislabels:item.xAxislabels,

    })
    );
    setFetched(true);
  }
    },[fetched]);


    // Start Testing graph including all code  for Line Chart
    const data={
      labels:["May 12","May 13","May 14","May 15","May 16","May 17"],
      datasets:[{
       data:[8,7.8,6,8,7,5,6],
       backgroundColor:'transparent',
       borderColor:"#f26c6d",
       pointBorderColor:"transparent",
       pointBorderWidth:4,
       tention:0.5

      }]
 };

 const options={

   plugins:{
     legend:false
   },
   scales:{
     x:{
       grid:{
         display:false
       }
     },
     y:{
       min:2,
       max:10,
       ticks:{
         stepSize:2,
         callback:(value)=>value + 'K'
       
       },
       grid:{
         borderDash:[10]
       }
     }
   }
 };

    // End Testing graph including all code for Line Chart

        // Start Testing graph including all code  for Line Chart
        const piedata={
          labels:["Desktop","Tablet","Mobile"],
          datasets:[
            {
           data:[3,6,9],
          // backgroundColor:['aqua','orangered','purple'],
          backgroundColor:[blue[100],blue[200],blue[300]],
          borderColor:blue["A200"],
            }, 
            {
              data:[3,6,9],
             // backgroundColor:['aqua','orangered','purple'],
             backgroundColor:[blue[100],blue[200],blue[300]],
             borderColor:blue["A200"],
               },
          ]
     };
    
     const pieoptions={
    
     };
    
        // End Testing graph including all code for Line Chart

  return (
    <Box className={classes.section}>
     <Grid container spacing={5}>
        <Grid item xs={12} sm={7}>
            <Card>
                <CardContent>
                    <Typography variant='h5' component="h6">

                      User Overview
                      <Line data={data} options={options}></Line>
                    </Typography>
                </CardContent>
                {/* Testing
                <CardContent style={{width:"500px", height:"500px",marginLeft:"20px" }}>
                <canvas id="UserGraph" className={classes.displayUserGraph}></canvas> 
                

                </CardContent>

  */}
            </Card>
        </Grid>


        <Grid item xs={12} sm={4}>
        {/*<Grid item xs={12} sm={3}>*/}
          {/* Testing
                <canvas id="userPieGraph" className={classes.displayUserGraph}></canvas> 
                
  */}

  {/* 
  <div style={{padding:'20px', width:'50%'}}>
<Pie data={data} options={options}></Pie>
  </div>
  */}




<Card>
                <CardContent>
                    <Typography variant='h5' component="h6">

                      Device Overview
                      <Pie data={piedata} options={pieoptions}></Pie>
                    </Typography>
                </CardContent>
                {/* Testing
                <CardContent style={{width:"500px", height:"500px",marginLeft:"20px" }}>
                <canvas id="UserGraph" className={classes.displayUserGraph}></canvas> 
                

                </CardContent>

  */}
            </Card>



        </Grid>
     </Grid>
        </Box>
  )
}
