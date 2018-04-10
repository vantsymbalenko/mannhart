import React, { Component } from 'react';
import './style.css';
import imgSrcArrow from '../../image/arrow_h.png';

export default class Step2 extends Component{
    render(){
        return(
            <main>
                <div className="status-page">
                    <h1 className={"status-page-header"}>Grundriss</h1>
                    <div className={"status-page-state"}>Schritt 1 von 6</div>
                </div>
                <div className="draw-area">
                    <div className="draw-area-side-a draw-area-side-header">Ansicht A <span className={"draw-area__triangle"}/></div>
                    <div className="draw-area-side-b draw-area-side-header">
                        <div className="draw-area-side-b-text-wrapper">
                            <span className={"draw-area__triangle draw-area__triangle_180"}/>
                            Ansicht B
                            <input className={"draw-area__thickness"} type="number"/>
                        </div>
                    </div>
                    <div className="draw-area-side-c draw-area-side-header">
                        <div className="draw-area-side-c-text-wrapper">
                            Ansicht C <span className={"draw-area__triangle draw-area__triangle_90"}/>
                        </div>
                    </div>
                    <div className="draw-area-side-d draw-area-side-header">
                        <div className="draw-area-side-d-text-wrapper">
                            Ansicht D <span className={"draw-area__triangle draw-area__triangle_-90"}/>
                        </div>
                    </div>
                    <div className="draw-area-outer-area" style = {{padding: "10px"}}>
                        <div className="draw-area__inside-area">
                            <div className="draw-area__input-arrow_h">
                                <div className="left-arrow">
                                    <span/>
                                </div>
                                <div className="arrow-line">
                                    <span/>
                                    <input type="number"  className={"main-option-input"}/>
                                </div>
                                <div className="right-arrow">
                                    <span/>
                                </div>
                            </div>
                            <div className="draw-area__input-arrow_h draw-area__input-arrow_v">
                                <div className="left-arrow">
                                    <span/>
                                </div>
                                <div className="arrow-line">
                                    <span/>
                                    <input type="number"  className={"main-option-input"}/>
                                </div>
                                <div className="right-arrow">
                                    <span/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="option-area">
                    <div className="main-options">
                        <h2 className={"main-options-header"}><span className={"main-options-header_style_uppercase"}>Dimensionen</span> (Zentimeter)</h2>
                        <ul className={"main-options-list"}>
                            <li className={"main-option main-option__margin_custom"}>
                                <label className={"main-option-name"} htmlFor="length" >1.Länge</label>
                                <input id="length" type="number"  className={"main-option-input"}/>
                            </li>
                            <li  className={"main-option"}>
                                <label className={"main-option-name"} htmlFor="width" >2. Breite</label>
                                <input id="width" type="number"  className={"main-option-input"}/>
                            </li>
                            <li  className={"main-option"}>
                                <label className={"main-option-name"} htmlFor="wall-width" >3. Wandstärke</label>
                                <input id="wall-width" className={"main-option-input"} type="number"/>
                            </li>
                        </ul>
                    </div>
                    <div className="additional-options">
                        <ul className={"additional-options-list"}>
                            <li className={"additional-option additional-option__margin_custom"}>
                                <label className={"additional-option-name"} htmlFor="deckel" >Inklusiv Deckel</label>
                                <div className="additional-option-input-wrapper">
                                    <input id="deckel" type="checkbox"  className={"additional-option-input"}/>
                                </div>
                            </li>
                            <li  className={"additional-option"}>
                                <label className={"additional-option-name"} htmlFor="deckelklasse" >Deckelklasse</label>
                                <div className="additional-option-input-wrapper">
                                    <select name="deckel-klasse" id="deckelklasse" className={"additional-option-input"}>
                                        <option value="A15">A15</option>
                                        <option value="A15">B125</option>
                                        <option value="A15">D400</option>
                                        <option value="A15">E600</option>
                                        <option value="A15">Unterflur</option>
                                    </select>
                                </div>
                            </li>
                            <li  className={"additional-option"}>
                                <label className={"additional-option-name"} htmlFor="boden" >Inklusiv Boden</label>
                                <div className="additional-option-input-wrapper">
                                    <input id="boden" className={"additional-option-input"} type="checkbox"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="buttons-paginations">
                        <button className={"button-paginations-prev button-paginations-default"}>&#60;&#60; Prev</button>
                        <button className={"button-paginations-next button-paginations-default"}>Next &#62;&#62;</button>
                    </div>
                </div>
            </main>
        )
    }
}