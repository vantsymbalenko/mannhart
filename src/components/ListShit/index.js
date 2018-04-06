import React from 'react';
import {connect} from 'react-redux';

import './list-shit.css';

export const ListShit = (props) => {
    return(
        <div className="main__shits">
            <h1 className={"main__grundriss-text"}>Grundriss</h1>
            <p className={"main__grundriss-shit"}>Schitt 1 von 6</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {

    }
};

const mapStateToDispatch = {

};

export default connect(mapStateToProps, mapStateToDispatch)(ListShit)
