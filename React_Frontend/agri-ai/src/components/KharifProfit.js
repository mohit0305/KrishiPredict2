import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import api from "../api/recommenderapi"
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "../styles/croprecommenderoutput.css"
import {Kharif} from "./yield1.js"
import CanvasJSReact from './canvasjs.react';
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: "280px",
      height:"100px",
      backgroundColor: "whitesmoke",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
        maxWidth: 550,
    },
    table: {
        minWidth: 450,
    },
}));
function KharifProfit() {
    const [formData, setFormData] = useState({
        Area:0,
        states:"Assam",
        crop1:"select",
        crop2:"select",
        crop3:"select",
    })
    const classes = useStyles();
    const formRenderData = [
        {
           name:"Area",
           description:"Area of farm in hactares"
        },
    ]

    const stateTypes = [
    'Andhra Pradesh',
    'ArunachalPradesh',
    'Assam',
    'Bihar',  
    'Chhatisgarh',
    'Gujarat',
    'Haryana',
    'HimachalPradesh',  
    'JammuKashmir',
    'Jharkhand',  
    'Karnataka',
    'MadhyaPradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Nagaland',
    'Orissa', 
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu', 
    'Tripura ',
    'UttarPradesh',
    'Uttarakhand',
    'WestBengal']
    const cropTypes = ['rice','cotton','soyabean','sunflower','sugarcane']
    const price = [1940,5726,3950,6051,290]
   
   
   
   
   
    const handleChange = (e, changeKey=undefined) => {
        //console.log(changeKey, e.target.value)
       let newData = {...formData}
       if(changeKey) {
           newData[changeKey] = e.target.value
       }
       else newData[e.target.id] = e.target.value
       setFormData(newData)
   }
     var b1 = formData.crop1;
     var b2 = formData.crop2;
     var b3 = formData.crop3; 
   //console.log(formData.crop1)
   var a = Kharif.filter(Kharif => {
       return Kharif.state === formData.states 
   })
   



   var c = a[0];
   var d1;
   var d2;
   var d3;
   var yield1;
   var yield2;
   var yield3;
   var price1;
   var price2;
   var price3;
   var rev1;
   var rev2;
   var rev3;


   for(var i =0;i<5;i++){
         if(cropTypes[i] === b1){
            price1 = price[i];
         }
         if(cropTypes[i] === b2){
            price2 = price[i];
         }
         if(cropTypes[i] === b3){
            price3 = price[i];
         }
        }


            
   if(c!= undefined){
    var keys = Object.keys(c);
    keys.forEach(function(key){
        if(key === b1){
            d1 = key;
        }
        if(key == b2){
            d2 = key;
        }
        if(key == b3){
            d3 = key;
        }
    })
    if(d1 != undefined){
        yield1 = a[0][d1]
        rev1 = (price1*yield1)
    console.log(a[0][d1])
    }
    
    if(d2 != undefined){
        yield2 = a[0][d2]
        rev2 = (price2*yield2)
    console.log(a[0][d2])
    }
    
    if(d3 != undefined){
        yield3 = a[0][d3]
        rev3 = (price3*yield3)
    console.log(a[0][d3])
    }
}
const handleClick = async () => {}



var ar = formData.Area
var ar11 = (ar*5)/10;
var ar12 = (ar*3)/10;
var ar13 = (ar*2)/10;
var ar21 = (ar*5)/10;
var ar22 = (ar*25)/100;
var ar23 = (ar*25)/100;
var ar31 = (ar*6)/10;
var ar32 = (ar*2)/10;
var ar33 = (ar*2)/10;
var ar41 = (ar*4)/10;
var ar42 = (ar*3)/10;
var ar43 = (ar*3)/10;
var p11 = parseInt(((ar*5)/10) * rev1);
var p12 = parseInt(((ar*3)/10) * rev2);
var p13 = parseInt(((ar*2)/10) * rev3);
var t1 = parseInt(p11 + p12 + p13)

var p21 = parseInt(((ar*5)/10) * rev1);
var p22 = parseInt(((ar*25)/100) * rev2);
var p23 = parseInt(((ar*25)/100) * rev3);
var t2 = parseInt(p21 + p22 + p23)

var p31 = parseInt(((ar*6)/10) * rev1);
var p32 = parseInt(((ar*2)/10) * rev2);
var p33 = parseInt(((ar*2)/10) * rev3);
var t3 = parseInt(p31 + p32 + p33)

var p41 = parseInt(((ar*4)/10) * rev1);
var p42 = parseInt(((ar*3)/10) * rev2);
var p43 = parseInt(((ar*3)/10) * rev3);
var t4 = parseInt(p41 + p42 + p43)


const option1 = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "New Year Resolutions",
    exportEnabled: false,
    title:{
        text: "Approach - 1"
    },subtitles:[
		{
			text: "Total Revenue : " +"₹ " + t1,
			//Uncomment properties below to see how they behave
			//fontColor: "red",
			fontSize: 16
		}
		],
    data: [{
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{z} (Hectares) : ₹ {x}",
        width:100,
        height: 100,
        indexLabelPlacement: "inside",
        dataPoints: [
            { y: 50, label: b1,x: p11,z: ar11 },
            { y: 30, label: b2,x: p12 ,z: ar12 },
            { y: 20, label: b3,x: p13,z: ar13 },
        ]
    }]
}

const option2 = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "New Year Resolutions",
    exportEnabled: false,
    title:{
        text: "Approach - 2"
    },
    subtitles:[
		{
			text: "Total Revenue : " + "₹ " + t2,
			//Uncomment properties below to see how they behave
			//fontColor: "red",
			fontSize: 16
		}
		],
    data: [{
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{z} (Hectares) : ₹ {x}",
        width:100,
        height: 100,
        indexLabelPlacement: "inside",
        dataPoints: [
            { y: 50, label: b1,x: p21,z: ar21  },
            { y: 25, label: b2,x: p22,z: ar22  },
            { y: 25, label: b3,x: p23,z: ar23  },
        ]
    }]
}

const option3 = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "New Year Resolutions",
    exportEnabled: false,
    title:{
        text: "Approach - 3"
    },
    subtitles:[
		{
			text: "Total Revenue : " + "₹ " + t3,
			//Uncomment properties below to see how they behave
			//fontColor: "red",
			fontSize: 16
		}
		],
    data: [{
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{z} (Hectares) : ₹ {x}",
        width:100,
        height: 100,
        indexLabelPlacement: "inside",
        dataPoints: [
            { y: 60, label: b1,x: p31 ,z: ar31 },
            { y: 20, label: b2,x: p32,z: ar32 },
            { y: 20, label: b3,x: p33 ,z: ar33 },
        ]
    }]
}

const option4 = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "New Year Resolutions",
    exportEnabled: false,
    title:{
        text: "Approach - 4"
    },
    subtitles:[
		{
			text: "Total Revenue: " + "₹ " + t4,
			//Uncomment properties below to see how they behave
			//fontColor: "red",
		    fontSize: 16
		}
		],
    data: [{
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{z} (Hectares) : ₹ {x}",
        width:100,
        height: 100,
        indexLabelPlacement: "inside",
        dataPoints: [
            { y: 40, label: b1,x: p41 ,z: ar41 },
            { y: 30, label: b2,x: p42 ,z: ar42 },
            { y: 30, label: b3,x: p43 ,z: ar43 },
        ]
    }]
}


if ( d1!= undefined && d2!= undefined && d3!= undefined ) {

    const outputComponent = (


        <div className="output_container">
            <Card className={`${classes.root} output_container__card`}>
              
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell component="th" align="center"><b>Crops</b></TableCell>
                                <TableCell component="th" align="center"><b>Yield (estimated)</b></TableCell>
                                <TableCell component="th" align="center"><b>MSP(2022)</b></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">{b1} </TableCell>
                                    <TableCell align="center">{yield1} <b> (quintal per hectares)</b> </TableCell>
                                    <TableCell align="center">{price1} <b> (Rupees per quintal)</b> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">{b2} </TableCell>
                                    <TableCell align="center">{yield2} <b> (quintal per hectares)</b> </TableCell>
                                    <TableCell align="center">{price2} <b> (Rupees per quintal)</b> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">{b3} </TableCell>
                                    <TableCell align="center">{yield3} <b> (quintal per hectares)</b> </TableCell>
                                    <TableCell align="center">{price3} <b> (Rupees per quintal)</b> </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                
            </Card>
        </div>
    )

    return (
        <div><div>
            {outputComponent}
            </div>
            <div className="output_container">  
            <CanvasJSChart options = {option1}
				 /*onRef={ref => this.chart = ref} */
                > <h1>Approach 1</h1> </CanvasJSChart>
                <CanvasJSChart options = {option2}
				/* onRef={ref => this.chart = ref} */
                />
                <CanvasJSChart options = {option3}
				/* onRef={ref => this.chart = ref} */
                /> 
                <CanvasJSChart options = {option4}
				/* onRef={ref => this.chart = ref} */
                /> 
             </div>   
            </div>)


}
   else return (
    <div className="form">
        <div className="form__form_group">

            <center><div className="form__title">Revenue Estimator (Kharif Season)</div></center>

            {
                formRenderData.map((formAttribute) => {
                    return <TextField
                    key={formAttribute.name} 
                    onChange={(e) => handleChange(e)}
                    value={formData[formAttribute.name]}
                    className="form__text_field"
                    id={formAttribute.name}
                    name={formAttribute.name}
                    variant="filled"
                    label={formAttribute.description}
                    />
                })
            }


            <TextField
                id="soil_type"
                name="soil_type"
                select 
                label="Select State"
                value={formData.states}
                onChange={(e) => handleChange(e, "states")}
                SelectProps={{
                    native: true,
                }}
                variant="filled"
                className="form__text_field"
                >
                <option key={"select"} value={"select"}>
                {"Select"}
                </option>
                {stateTypes.map((statetype) => (
                    <option key={statetype} value={statetype}>
                    {statetype}
                    </option>
                ))}
            </TextField>


            <TextField
                id="soil_type"
                name="soil_type"
                select
                label="Select Top Priority Crop "
                value={formData.crop1}
                onChange={(e) => handleChange(e, "crop1")}
                SelectProps={{
                    native: true,
                }}
                variant="filled"
                className="form__text_field"
                >
                <option key={"select"} value={"select"}>
                {"Select"}
                </option>
                {cropTypes.map((croptype) => (
                    <option key={croptype} value={croptype}>
                    {croptype}
                    </option>
                ))}
            </TextField>
            <TextField
                id="soil_type"
                name="soil_type"
                select
                label="Select Second Priority Crop "
                value={formData.crop2}
                onChange={(e) => handleChange(e, "crop2")}
                SelectProps={{
                    native: true,
                }}
                variant="filled"
                className="form__text_field"
                >
                <option key={"select"} value={"select"}>
                {"Select"}
                </option>
                {cropTypes.map((croptype) => (
                    <option key={croptype} value={croptype}>
                    {croptype}
                    </option>
                ))}
            </TextField>
            <TextField
                id="soil_type"
                name="soil_type"
                select
                label="Select Third Priority Crop "
                value={formData.crop3}
                onChange={(e) => handleChange(e, "crop3")}
                SelectProps={{
                    native: true,
                }}
                variant="filled"
                className="form__text_field"
                >
                <option key={"select"} value={"select"}>
                {"Select"}
                </option>
                {cropTypes.map((croptype) => (
                    <option key={croptype} value={croptype}>
                    {croptype}
                    </option>
                ))}
            </TextField>

            {/* <div style={{display:"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
            <FormControl variant="filled" className={`${classes.formControl} form__select`}>
                <InputLabel id="demo-simple-select-filled-label">Soil Type</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label"
                id="soil_type"
                name="soil_type"
                value={formData.soil_type}
                onChange={(e) => handleChange(e, "soil_type")}
                >
                {
                    soilTypes.map((soiltype) => {
                        return <MenuItem key={soiltype} value={soiltype}>{soiltype}</MenuItem>
                    })
                }
                </Select>
            </FormControl>

            <FormControl variant="filled" className={`${classes.formControl} form__select`}>
                <InputLabel id="demo-simple-select-filled-label">Crop Type</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label"
                id="crop_type"
                name="crop_type"
                value={formData.crop_type}
                onChange={(e) => handleChange(e, "crop_type")}
                >
                {
                    cropTypes.map((cropType) => {
                        return <MenuItem key={cropType} value={cropType}>{cropType}</MenuItem>
                    })
                }
                </Select>
            </FormControl>
            </div> */}

<Button onClick={()=>handleClick()} className="form__button" color="primary" variant="contained">Estimate Revenue</Button>
        </div>
    </div>
)
}

export default KharifProfit 



/*<Button onClick={()=>handleClick()} className="form__button" color="primary" variant="contained">Predict Fertilizer</Button>
<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} 
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods}
            </div>
            */
