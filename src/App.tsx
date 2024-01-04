import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="flex-container">
                <div className="myDiv">I'm div</div>
                <img src="https://www.sitedelkino.ru/images/rasdel_css/Flexbox2.jpg" alt="" className="myImg"/>
                <input className="myInput" type="text" placeholder="I'm input"></input>
                <p className="myText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consequatur
                    distinctio esse ex excepturi facere in ipsam maiores minima nesciunt nulla quia ratione
                    reprehenderit
                    sapiente, soluta velit vitae voluptates.</p>
                <span className="mySpan">I'm span</span>
            </div>
        </div>
    );
}

export default App;
