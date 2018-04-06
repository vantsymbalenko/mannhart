import React, { Component } from 'react';
import './option-area.css';

export default class OptionArea extends Component{
    render(){
        return(
            <div className="main__option-area">
                <h2 className={"main__header"}><span className={"main_header_theme_uppercase"}>Dimensionen </span>(Zentimeter)</h2>
                <ul className={"main__options"}>
                    <li className={"main__option"}>
                        <label className={"main__option-name"} htmlFor="length" >1.Länge</label>
                        <input id="length" type="number"  className={"main__input"}/>
                    </li>
                    <li  className={"main__option"}>
                        <label className={"main__option-name"} htmlFor="width" >2.Breite</label>
                        <input id="width" type="number"  className={"main__input"}/>
                    </li>
                    <li  className={"main__option"}>
                        <label className={"main__option-name"} htmlFor="wall-width" >3.Wandstärke</label>
                        <input id="wall-width" className={"main__input"} type="number"/>
                    </li>
                </ul>
                <div className="main__additional-options">
                    <ul className={"main__additional-option"}>
                        <li className={"main__additional-option"}>
                            <label className={"main__option-name"} htmlFor="inclusive-checkbox" >Inclusiv Deckel</label>
                            <input id = "inclusive-checkbox" type="checkbox"/>
                        </li>
                        <li  className={"main__additional-option"}>
                            <label className={"main__option-name"} htmlFor="deckelklass" >Deckelklasse</label>
                            <select id = "deckelklass">
                                <option value="0">A15</option>
                                <option value="1">D400</option>
                                <option value="1">E600</option>
                                <option value="1">Unterflur</option>
                            </select>
                        </li>
                        <li  className={"main__additional-option"}>
                            <label className={" main__option-name"} htmlFor="boden" >Inclusiv Boden</label>
                            <input id = "boden" type="checkbox"/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}