// Allowed extensions for input file
const allowedExtensions = ["csv"];

function FileLoader(props) {
    const handleLoaded = (e) => {
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            props.handleFileChange(inputFile, allowedExtensions);
        }
    }

    return <div>
        <label htmlFor="csvInput" style={{ display: "block" }}>
            Enter CSV File
        </label>
        <input
            onChange={handleLoaded}
            id="csvInput"
            name="file"
            type="File"
        />
    </div>
}

export default FileLoader;