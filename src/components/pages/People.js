import React from "react"
import PersonCard from "./people/PersonCard";

export default class About extends React.Component {
  
  componentDidMount() {
    if(window.twttr != null)
      window.twttr.widgets.load()
  }

  render() {
    return (
      <div id="people" className="centerMargins">
        <h1>People</h1>
        <PersonCard 
          name="Dr. Saber Sami" 
          role="Principle Investigator &amp; Senior Lecturer​" 
          org="Norwich Medical School" 
          img="./img/sabersami.png"
          />
        <PersonCard 
          name="Thomas Carr" 
          role="Postgraduate Researcher" 
          org="School of Pharmacy​" 
          img="./img/tomcarr.png"

          linkedin="thomas-carr-151b5053"
          />
        <PersonCard
          name="Rory Pinkney" 
          role="Postgraduate Researcher" 
          org="School of Computing" 
          img="./img/rorypinkney.jpg"

          linkedin="rtybanana"
          github="rtybanana"
          />
        <PersonCard 
          name="Christopher Fleetwood" 
          role="Postgraduate Researcher" 
          org="School of Computing" 
          img="./img/chrisfleetwood.jpg"
          
          github="fl33TW00D"
          linkedin="christopher-fleetwood-1725aa160"
          />
        <PersonCard
          name="Codie Newark" 
          role="Postgraduate Researcher" 
          org="School of Computing" 
          img="./img/codienewark.jpg"

          github="codieradical"
          // twitter="codieradical"
          linkedin="codienewark"
          email="codienewark@outlook.com"
          />
      </div>
  );
  }
}