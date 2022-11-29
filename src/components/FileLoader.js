import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React, { useEffect } from "react";
import Papa from "papaparse";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

function FileLoader(props) {
    const handleLoaded = (e) => {
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            handleFileChange(inputFile, allowedExtensions);
        }
    }

    // This will get called whenever the 'file' variable changes values.
    // For more info see: https://stackoverflow.com/questions/62376767/how-to-use-async-await-with-react-hooks
    useEffect(() => {
        readFile();
    }, [props.file])

    useEffect(() => {

    }, [props.view])
 
    const isValidFile = (e, allowedExtensions) => {
        const fileExtension = e?.type.split("/")[1];
        if (!allowedExtensions.includes(fileExtension)) {
            return false;
        }
        return true;
    }

    const readFile = () => {
        if(props.file)
        {
            let reader = new FileReader();

            reader.onload = async ({ target }) => {
                const csv = Papa.parse(target.result, { header: false });
                const parsedData = csv?.data;
                const columns = parsedData;
                props.setData(columns);
            };
            
            reader.readAsText(props.file);
            props.setView("all");
        }
    }

    const handleFileChange = (e) => {
        props.setError("");

        if (!isValidFile(e, allowedExtensions)) {
            props.setError("Моля използвай [" + allowedExtensions.map((value) => "." + value).join(", ") + "] файл!");
            props.setView("err");
            return;
        }

        if (!e) {
            props.setError("Моля избери файл!");
            props.setView("err");
            return; 
        }

        props.setFile(e);
    };

    return (
    <Container>
        <Form.Group controlId="formFile" className="mb-3">
            <h1 style={{textAlign:'center', color:'turquoise'}}>-зареди файл-</h1>
            <h5 style={{textAlign:'center', color:'gray'}}>избери .csv файлът</h5>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div class="arrow-down">
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <Form.Control 
                onChange={handleLoaded}
                id="csvInput"
                name="file"
                type="File"
                size="lg"
            />
        </Form.Group>
    </Container>
    );
}

export default FileLoader;