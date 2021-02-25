import React from "react"
//import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
		return (
		<div className="centerMargins" id="home">
			{/* <h1>Laboratory of Personalised Medicine in Dementia</h1> */}
			<p>In recent years large a number of initiatives have been taken to record the health status of the individuals with dementia including genetic, neuroimaging as well as behaviour. However, the essential aim of using this data for personalised medicine remains generally unfulfilled.
			<br/><br/>
			A recent EU health ministers council defined Personalized Medicine as: A medical model using characterization of individuals’ phenotypes and genotypes (e.g. molecular profiling, medical imaging, lifestyle data) for tailoring the right therapeutic strategy for the right person at the right time, and/or to determine the predisposition to disease and/or to deliver timely and targeted prevention.
			<br/><br/>
			The aim of the lab is to address the personalised medicine gap in dementia research with innovative experimental and analytical methodologies. Several analytical and experimental techniques have seen dramatic progress over the last decade that could address many of the key methodological challenges that personalised medicine faces today.
			<br/><br/>
			Even with the vast potential of these methods, (e.g. machine learning etc.) in personalized medicine, its impact on data-driven medicine continues to be low. This is principally due to a lack of experts working in dementia related fields.
			<br/><br/>
			Using personalised medicine methodology (PMM) is testing these approaches in innovative experimental settings for diagnostic assessment and at targeted neuro-rehabilitation interventions. The lab is also contribute to the burgeoning field of neuroimaging-genetics by bringing together leading researchers in machine learning and statistical genetics to address mechanistic questions that have the potential to improve targeted personalised medicine interventions.</p>
			<br/>
			<img src="./img/homepage-image.png" width="100%"/>
			<br/><br/>
		</div> 
	);
  }
}