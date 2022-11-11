import React, { useState } from 'react';
import './App.css';
import Visualiser from "./components/Visualiser";

function App() {
    const [view, setView] = useState("fl");
    return [
    <Visualiser view={view} setView={setView}/>
    ];
};

export default App;
