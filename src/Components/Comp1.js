import React from "react";
import {Button} from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const count = 0;

addone = () => {
    count++;
}

subone = () => {
    count--;
}

reset = () => {
    count = 0;
}

function Comp1 {
    return (
        <button onClick={addone}> +1 </button> &nbsp; &nbsp; &nbsp;
        <button onClick={reset}>RESET</button> &nbsp; &nbsp; &nbsp;
        <button onClick={subone}>-1</button>  &nbsp; &nbsp; &nbsp;
    );
}

export default Comp1;