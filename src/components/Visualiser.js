import FileLoader from "./FileLoader";
import Bar from "./Bar"
import Sources from "./Sources"

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
            document.documentElement.style.setProperty('--border-clr','turquoise');

            return loadFileLoadView()
        } else if(view === "err") {
            document.documentElement.style.setProperty('--border-clr','rgb(243, 80, 80)');
            
            return loadError()
        } else if(view === "src") {
            document.documentElement.style.setProperty('--border-clr','rgb(100, 52, 155)');

            return loadSources();
        } else if(view === "all"){
            document.documentElement.style.setProperty('--border-clr','plum');

            let allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            let allDataNumbers = data.slice(1, -2).map(function (row) { return row[2]; });
            
            let currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            let options = {
                animationEnabled: true,
                animationDuration: 2000,
			    exportEnabled: true,
                title: {
                  text: "-всички-",
                  fontFamily: "arial",
                  fontWeight: "bold",
                  fontColor: "plum"
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
                <div className='brded form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart key={2} options = {options}/>
                </div>
            </div>
        } else if(view === "mid"){
            document.documentElement.style.setProperty('--border-clr','rgb(40, 150, 250)');

            let allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            let allDataNumbers = data.slice(1, -2).map(function (row) { return row[3]; });
            
            let currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            let options = {
                animationEnabled: true,
                animationDuration: 2000,
                exportEnabled: true,
                title: {
                  text: "-средни-",
                  fontFamily: "arial",
                  fontWeight: "bold",
                  fontColor: "rgb(40, 150, 250)"
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
                <div className='brded form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart key={3} options = {options}/>
                </div>
            </div>
        } else if(view === "sp"){
            document.documentElement.style.setProperty('--border-clr','rgb(230, 133, 6)');
            
            let allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            let allDataNumbers = data.slice(1, -2).map(function (row) { return row[4]; });
            
            let currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            let options = {
                animationEnabled: true,
                animationDuration: 2000,
                exportEnabled: true,
                title: {
                  text: "-спортни-",
                  fontFamily: "arial",
                  fontWeight: "bold",
                  fontColor: "rgb(230, 133, 6)"
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
                <div className='brded form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart key={4} options = {options}/>
                </div>
            </div>
        } else if(view === "spi"){
            document.documentElement.style.setProperty('--border-clr','rgb(208, 230, 6)');

            let allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            let allDataNumbers = data.slice(1, -2).map(function (row) { return row[5]; });
            
            let currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            let options = {
                animationEnabled: true,
                animationDuration: 2000,
                exportEnabled: true,
                title: {
                  text: "-духовни-",
                  fontFamily: "arial",
                  fontWeight: "bold",
                  fontColor: "rgb(208, 230, 6)"
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
                <div className='brded form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart key={5} options = {options}/>
                </div>
            </div>
        } else if(view === "pr"){
            document.documentElement.style.setProperty('--border-clr','rgb(251, 42, 181)');

            let allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            let allDataNumbers = data.slice(1, -2).map(function (row) { return row[6]; });
            console.log(allDataNumbers);
            let currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            let options = {
                animationEnabled: true,
                animationDuration: 2000,
                exportEnabled: true,
                title: {
                  text: "-профилирани-",
                  fontFamily: "arial",
                  fontWeight: "bold",
                  fontColor: "rgb(251, 42, 181)"
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
                <div className='brded form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart key={6} options = {options}/>
                </div>
            </div>
        } else if(view === "prof"){
            document.documentElement.style.setProperty('--border-clr','rgb(42, 230, 251)');

            let allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            let allDataNumbers = data.slice(1, -2).map(function (row) { return row[7]; });
            console.log(allDataNumbers);
            let currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            let options = {
                animationEnabled: true,
                animationDuration: 2000,
                exportEnabled: true,
                title: {
                  text: "-професионални-",
                  fontFamily: "arial",
                  fontWeight: "bold",
                  fontColor: "rgb(42, 230, 251)"
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
                <div className='brded form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart key={7} options = {options}/>
                </div>
            </div>
        } else if(view === "special") {
            document.documentElement.style.setProperty('--border-clr','rgb(42, 52, 251)');

            let allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            let allDataNumbers = data.slice(1, -2).map(function (row) { return row[8]; });

            let currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            let options = {
                animationEnabled: true,
                animationDuration: 2000,
                exportEnabled: true,
                title: {
                  text: "-специални-",
                  fontFamily: "arial",
                  fontWeight: "bold",
                  fontColor: "rgb(42, 52, 251)"
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
                <div className='brded form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart key={8} options = {options}/>
                </div>
            </div>
        } else if(view === "art") {
            document.documentElement.style.setProperty('--border-clr','rgb(42, 251, 73)');

            let allDataCities = data.slice(1, -2).map(function (row) { return row[1]; });
            let allDataNumbers = data.slice(1, -2).map(function (row) { return row[9]; });

            let currentDataPoints = []
            for(let i = 0; i < allDataCities.length; i++)
            {
                currentDataPoints.push({label: allDataCities[i], y: parseFloat(allDataNumbers[i]) ?? 0});
            }
            let options = {
                animationEnabled: true,
                animationDuration: 2000,
                exportEnabled: true,
                title: {
                  text: "-изкуства-",
                  fontFamily: "arial",
                  fontWeight: "bold",
                  fontColor: "rgb(42, 251, 73)"
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
                <div className='brded form content' style={{ textAlign: "center" }}>
                    <CanvasJSChart key={9} options = {options}/>
                </div>
            </div>
        }
    }

    const loadFileLoadView = () => {
        return (
            <div className='vertical-horizontal-center'>
                <div className='brded form content'>
                    <FileLoader data={data} setData={setData} view={view} setView={setView} error={error} setError={setError} file={file} setFile={setFile}/>
                </div>
            </div>
        );
    }

    const loadError = () => {
        return (
            <div className='vertical-horizontal-center'>
                <div className='brded form content' style={{ textAlign: "center" }}>
                    {<h1 style={{textAlign:'center', color:'rgb(243, 80, 80)'}}>{error}</h1>}
                </div>
            </div>
        );
    }

    const loadSources = () => {
        return (
            <div className='vertical-horizontal-center'>
                <div className='brded form content'>
                    <Sources/>
                </div>
            </div>
        )
    }

    return (
        [
            <Bar view={view} setView={setView} />,
            determineView()
        ]
    );
}

export default Visualiser;