import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Log in with Google</a></li>;
            default:
                return [
                    <li key="1"><Payment /></li>,
                    <li key="3" style={{ margin: "0px 10px"}}>Credits: {this.props.auth.credits}</li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
            ]
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                    className="left brand-logo"
                    to={this.props.auth ? '/surveys': '/'}
                    >
                        Logo
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}

export default connect(mapStateToProps)(Header);