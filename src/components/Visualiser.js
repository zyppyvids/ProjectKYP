import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import FileLoader from "./FileLoader";
import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Visualiser(props) {
    const {view, setView} = props;

    // This state will store the parsed data
    const [data, setData] = useState([[]]);
    
    // This state contains last error of the app
    const [error, setError] = useState("");
    
    // This state stores the file uploaded by the user
    const [file, setFile] = useState("");
    
    const handleFileChange = (e, allowedExtensions) => {
        setError("");

        if (!isValidFile(e, allowedExtensions)) {
            setError("Please input a [" + allowedExtensions.map((value) => "." + value).join(", ") + "] file!");
            setView("d");
            return;
        }

        if (!e) {
            setError("Enter a valid file");
            setView("d");
            return; 
        }

        setFile(e);
    };

    // This will get called whenever the 'file' variable changes values.
    // For more info see: https://stackoverflow.com/questions/62376767/how-to-use-async-await-with-react-hooks
    useEffect(() => {
        readFile();
    }, [file])

    useEffect(() => {

    }, [view])
 
    const isValidFile = (e, allowedExtensions) => {
        const fileExtension = e?.type.split("/")[1];
        if (!allowedExtensions.includes(fileExtension)) {
            return false;
        }
        return true;
    }

    const readFile = () => {
        if(file)
        {
            let reader = new FileReader();

            reader.onload = async ({ target }) => {
                const csv = Papa.parse(target.result, { header: true });
                const parsedData = csv?.data;
                const columns = parsedData;
                setData(columns);
            };
            
            reader.readAsText(file);
            setView("d");
        }
    }

    return (
        //To do: state machine
        view === "fl" ?
        <div>
            <FileLoader handleFileChange={handleFileChange}/>
        </div> :
        <div>
            <div style={{ textAlign: "center" }}>
                {
                  // Displays only the error if there is one
                  error ? error : 
                  <div>
                    {
                      // This is the actual data from the .csv file
                      data.map((row, rowId) => 
                      <div key={rowId}>
                        {
                        (Object.values(row)).map((value, valId) => !value ? null : (valId === 9 && rowId !== 29 ? <div><div>{(Object.keys(data[0])[valId])}: {value}</div><br/></div> : <div>{(Object.keys(data[0])[valId])}: {value}</div>))
                        }
                      </div>)
                    }
                  </div>
                }
            </div>
        </div>
    );
}

export default Visualiser;