import React, {Component} from 'react';
import ListShit from '../../components/ListShit';
import DrawArea from '../DrawArea/DrawArea';
import OptionArea from '../OptionArea/OptionArea';

export default class Step extends Component{
    render(){
        return(
            <div className="main">
                <ListShit />
                <DrawArea />
                <OptionArea/>
            </div>
        )
    }
}