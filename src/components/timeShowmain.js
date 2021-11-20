import React from 'react'; 
import ReactDOM from 'react-dom'; 
setInterval(()=>{
    const element= (
        <h1>{new Date().toLocaleTimeString()}</h1>
    );
    ReactDOM.render(element, document.getElementById('root'));
},1000);