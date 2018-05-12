import React, { Component } from 'react';
import Authorize from '../Authorize/Authorize';
import './MainPage.css'

class MainPage extends Component {
    constructor(){
        super()
        this.state = {
            warning: 'hideWarning',
            autorization: false
        }
    }

    authorizeHandler = (answer) => {
        if (answer) {
            this.setState({warning:'hideWarning', autorization:true})

        } else {
           this.setState({warning:'showWarning'})
        }
    }

    render() {
        return (
            <div className='container background'>
            {this.state.autorization ? <div></div> : <Authorize authorize = {this.authorizeHandler} show={this.state.warning}/>}
            </div>
        );
    }
}

export default MainPage;