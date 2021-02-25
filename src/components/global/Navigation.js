import React from "react"
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <hr/>
        <div>
          {this.props.location.pathname !== "/" ? <Link to="/">Home</Link> : <span>Home</span>}
          <span> | </span>
          {this.props.location.pathname !== "/people" ? <Link to="/people">People</Link> : <span>People</span>}
          <span> | </span>
          {this.props.location.pathname !== "/projects" ? <Link to="/projects">Projects</Link> : <span>Projects</span>}
          <span> | </span>
          {this.props.location.pathname !== "/publications" ? <Link to="/publications">Publications</Link> : <span>Publications</span>}
          {/* <span> | </span>
          {this.props.location.pathname !== "/software" ? <Link to="/software">Software</Link> : <span>Software</span>}
          <span> | </span>
          {this.props.location.pathname !== "/talks" ? <Link to="/talks">Talks</Link> : <span>Talks</span>}
          <span> | </span>
          {this.props.location.pathname !== "/volunteer" ? <Link to="/volunteer">Volunteer</Link> : <span>Volunteer</span>}
          <span> | </span>
          {this.props.location.pathname !== "/blog" ? <Link to="/blog">Blog</Link> : <span>Blog</span>} */}
        </div>
        <hr/>
      </nav>
    );
  }
}