import React from "react"
import { Link } from 'react-router-dom';

export default class PersonCard extends React.Component {
  render() {
    return (
        <div className="col-md-12 personCard">
            <div className="left">
                {this.props.img ? <img alt={this.props.name + " Icon"} src={this.props.img}/> : ""}
            </div>
            <div className="right">
                <h4>{this.props.name}</h4>
                <p>
                  {this.props.role}<br/>
                  {this.props.org}<br/>
                </p>
                {this.props.linkedin ? <a href={"https://www.linkedin.com/in/" + this.props.linkedin}><img alt="LinkedIn" src="/img/social/linkedin.png"/></a> : ""}
                {this.props.github ? <a href={"https://github.com/" + this.props.github}><img alt="GitHub" src="/img/social/github.png"/></a> : ""}
                {this.props.twitter ? <a href={"https://twitter.com/" + this.props.twitter}><img alt="Twitter" src="/img/social/twitter.png"/></a> : ""}
                {this.props.email ? <a href={"mailto:" + this.props.email}><img alt="E-Mail" src="/img/social/email.png"/></a> : ""}
            </div>
        </div>
    );
  }
}