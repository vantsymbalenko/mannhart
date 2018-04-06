import React from 'react';
import {connect } from 'react-redux';
import {Route, Redirect } from 'react-router-dom';

const PrivateWrapper = ({component : Component, isAuth : isAuth, ...rest}) => {
    if(isAuth){
        console.log("User is Auth");
        return <Route{...rest} render = {(props) => <Component {...props}/>}/>
    }else{
        console.log("User is not Auth");
        return <Redirect to={"/"}/>
    }
};

const mapStateToProps = (state) => {
    return {
        isAuth : state.initState.isAuth
    }
};

const mapStateToDispatch = {

};

export default connect(mapStateToProps, mapStateToDispatch)(PrivateWrapper)