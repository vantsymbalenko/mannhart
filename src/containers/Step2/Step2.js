import React, { Component } from 'react';
import './style.css';

export default class Step2 extends Component{
    render(){
        return(
            <main>
                <div className="status-page">
                    <h1 className={"status-page-header"}>Grundriss</h1>
                    <p className={"status-page-state"}>Schritt 1 von 6</p>
                </div>
                <div className="draw-area"></div>
                <div className="option-area">
                    <div className="main-options">
                        <h2 className={"main-options-header"}><span className={"main-options-header_style_uppercase"}>Dimensionen</span> (Zentimeter)</h2>
                        <ul className={"main-options-list"}>
                            <li className={"main-option"}>
                                <label className={"main-option-name"} htmlFor="length" >Länge</label>
                                <input id="length" type="number"  className={"main-option-input"}/>
                            </li>
                            <li  className={"main-option"}>
                                <label className={"main-option-name"} htmlFor="width" >Breite</label>
                                <input id="width" type="number"  className={"main-option-input"}/>
                            </li>
                            <li  className={"main-option"}>
                                <label className={"main-option-name"} htmlFor="wall-width" >Wandstärke</label>
                                <input id="wall-width" className={"main-option-input"} type="number"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
}