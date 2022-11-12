import FileLoader from "./FileLoader";
import Bar from "./Bar"

import React, { useState } from "react";

import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Visualiser(props) {
    // This state will store the current view
    const [view, setView] = useState("fl");

    // This state will store the parsed data
    const [data, setData] = useState([[]]);
    
    // This state contains last error of the app
    const [error, setError] = useState("");
    
    // This state stores the file uploaded by the user
    const [file, setFile] = useState("");

    const determineView = () => {
        if(view === "fl"){
          return loadFileLoadView()
        } else if(view === "err") {
            return loadError()
        } else if(view === "all"){
            var allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            var allDataNumbers = data.slice(1, -2).map(function (row) { return row[2]; });
            
            var currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            var options = {
                animationEnabled: true,
			    exportEnabled: true,
                title: {
                  text: "-all schools-"
                },
                axisY: {
                    includeZero: true
                },
                data: [{				
                        type: "column",
                        dataPoints: currentDataPoints
                }]
            }
            return <div className='vertical-horizontal-center'>
                <div className='all form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart options = {options}/>
                </div>
            </div>
        } else if(view === "mid"){
            var allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            var allDataNumbers = data.slice(1, -2).map(function (row) { return row[3]; });
            
            var currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            var options = {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                  text: "-middle schools-"
                },
                axisY: {
                    includeZero: true
                },
                data: [{				
                        type: "column",
                        dataPoints: currentDataPoints
                }]
            }
            return <div className='vertical-horizontal-center'>
                <div className='mid form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart options = {options}/>
                </div>
            </div>
        } else if(view === "sp"){
            var allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            var allDataNumbers = data.slice(1, -2).map(function (row) { return row[4]; });
            
            var currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            var options = {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                  text: "-sport schools-"
                },
                axisY: {
                    includeZero: true
                },
                data: [{				
                        type: "column",
                        dataPoints: currentDataPoints
                }]
            }
            return <div className='vertical-horizontal-center'>
                <div className='sp form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart options = {options}/>
                </div>
            </div>
        } else if(view === "spi"){
            var allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            var allDataNumbers = data.slice(1, -2).map(function (row) { return row[5]; });
            
            var currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            var options = {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                  text: "-spiritual schools-"
                },
                axisY: {
                    includeZero: true
                },
                data: [{				
                        type: "column",
                        dataPoints: currentDataPoints
                }]
            }
            return <div className='vertical-horizontal-center'>
                <div className='spi form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart options = {options}/>
                </div>
            </div>
        } else if(view === "pr"){
            var allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            var allDataNumbers = data.slice(1, -2).map(function (row) { return row[6]; });
            console.log(allDataNumbers);
            var currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            var options = {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                  text: "-profiled schools-"
                },
                axisY: {
                    includeZero: true
                },
                data: [{				
                        type: "column",
                        dataPoints: currentDataPoints
                }]
            }
            return <div className='vertical-horizontal-center'>
                <div className='pr form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart options = {options}/>
                </div>
            </div>
        } else if(view === "prof"){
            var allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            var allDataNumbers = data.slice(1, -2).map(function (row) { return row[7]; });
            console.log(allDataNumbers);
            var currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            var options = {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                  text: "-proffesional schools-"
                },
                axisY: {
                    includeZero: true
                },
                data: [{				
                        type: "column",
                        dataPoints: currentDataPoints
                }]
            }
            return <div className='vertical-horizontal-center'>
                <div className='prof form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart options = {options}/>
                </div>
            </div>
        }
    }

    const loadFileLoadView = () => {
        return (
            <div className='vertical-horizontal-center'>
                <div className='fileload form content'>
                    <FileLoader data={data} setData={setData} view={view} setView={setView} error={error} setError={setError} file={file} setFile={setFile}/>
                </div>
            </div>
        );
    }

    const loadError = () => {
        return (
            <div className='vertical-horizontal-center'>
                <div className='err form content' style={{ textAlign: "center" }}>
                    {<h1 style={{textAlign:'center', color:'rgb(243, 80, 80)'}}>{error}</h1>}
                </div>
            </div>
        );
    }

    return (
        [
            <Bar view={view} setView={setView} />,
            determineView()
        ]
    );
}

export default Visualiser;