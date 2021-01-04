import "materialize-css/dist/css/materialize.min.css";
import React, {Component} from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import axios from 'axios';
window.axios = axios;

class App extends Component {
    componentDidMount(){
        this.props.authCheck()
    }
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, action)(App);