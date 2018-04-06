import React from 'react';
import imgSrcLogo from '../../image/logo.png';

export const Header = () => {
    return(
        <header>
            <img src={imgSrcLogo} alt="Manhart" className={"header__logo"}/>
        </header>
    )
};