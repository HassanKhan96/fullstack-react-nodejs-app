import "materialize-css/dist/css/materialize.min.css";
import React, {Component} from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import Landing from './Landing';
import axios from 'axios';
window.axios = axios;

const SurveyNew = () => <h1>SurveryNew</h1>
const Surveys = () => <h1>Dashboard</h1>

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
                        <Route exact path="/surveys" component={Surveys}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, action)(App);