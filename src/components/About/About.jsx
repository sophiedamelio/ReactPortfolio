import './About.css'

import { Grid, Image } from 'semantic-ui-react'

// to do: css breaks at 420px ish and smaller

export default function About() {
	return (
		<section id="aboutSection">
			<head>
				<meta name="viewport" content="width=device-width" />
			</head>
			<Grid style={{ marginBottom: "2vh" }} columns={2}>
				<h2 className="aboutTitles" id="aboutTitle">About</h2>
				<Grid.Row style={{ marginBottom: "2vh" }}>
					<Grid.Column style={{ width: "75%" }}>
						<p>I am a Seattle based Software Engineer who has spent the last three years growing my knowledge base and gaining experience. I have a special passion for both teaching and learning new technology. I have strong communication skills, and I pursue growth while delivering solutions with confidence and accuracy.</p>
						<p>I am design driven and artistic, excel in collective communication, and have a strong ability to pick up new languages and skills quickly. My primary experience has been in creating responsive websites and mobile-first apps.</p>
						<p>My current abilities include proficiency in: JavaScript, Python, React, HTML/CSS, Django, Express, Node.js, Heroku, Data Modeling, MongoDB and PostgreSQL.</p>
					</Grid.Column>

					<Grid.Column style={{ width: "25%" }}>
						<Image src="https://i.imgur.com/KG96xW4.png" alt="sophie-headshot" id="headshot" size={"small"} circular={true} centered={true} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Grid className="certificationsGrid" columns={2}>
				<h2 className="aboutTitles" id="certifications" style={{ paddingBottom: "1rem" }}>Certifications</h2>

				<Grid.Row verticalAlign={"middle"} style={{ display: "flex", flexWrap: "nowrap" }}>
					<Grid.Column id="gaImageParent">
						<Image className="gaImage" style={{ width: "100%" }} src="https://i.imgur.com/hN7GAid.png" alt="general-assembly-logo" />
					</Grid.Column>
					<Grid.Column style={{ width: "90%" }}>
						<p>Completed a full-stack software engineering immersive program in an intensive, twelve-week, 420+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects.</p>
						<a href="https://drive.google.com/file/d/1vFMhW7A67_FyFyjmjjXrg0Gu0-61xG27/view" target="blank" className="aboutCta">Show credential</a>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row verticalAlign={"middle"} style={{ display: "flex", flexWrap: "nowrap" }}>
					<Grid.Column id="awsImageParent">
						<Image className="awsImage" style={{ width: "100%" }} src="https://i.imgur.com/5feNx95.png" alt="amazon-web-services-certification-image" />
					</Grid.Column>
					<Grid.Column style={{ width: "90%" }}>
						<p>Earned Amazon Web Services Cloud Practitioner in December 2022.</p>
						<a href="https://drive.google.com/file/d/1D5v2TuKKotWfzmyLNL6wXJBFDioDU36U/view" target="blank" className="aboutCta">Show credential</a>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row verticalAlign={"middle"} style={{ display: "flex", flexWrap: "nowrap" }}>
					<Grid.Column id="googleImageParent">
						<Image className="googleImage" style={{ width: "100%" }} src="https://i.imgur.com/IqzzwgZ.png" alt="google-tag-manager-certification-image" />
					</Grid.Column>
					<Grid.Column style={{ width: "90%" }}>
						<p>Earned Google Tag Manager Fundamentals Certificate in December 2023.</p>
						<a href="https://drive.google.com/file/d/13QhWh7uNg0XcbECrxOSrdNHCWzbmmprV/view" target="blank" className="aboutCta">Show credential</a>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section >
	)
}