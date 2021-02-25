import React from "react"

import Navigation from "./Navigation"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div id="headerImage">
                    <div>
                        <header>
                            <img src="/img/uea-logo.svg"/>
                            <span>
                                <h1>Laboratory of Personalised Medicine in Dementia</h1>
                            </span>
                        </header>
                    </div>
                </div>
                <Navigation location={this.props.location}/>
            </div>
        );
    }
}