import './About.css'
import { Grid, GridColumn, Image } from 'semantic-ui-react'

export default function About() {
	return (
		<div id="aboutSection">
			<head>
				<meta name="viewport" content="width=device-width" />
			</head>
			<Grid columns={2}>
				<h2 className="aboutTitles">About</h2>
				<Grid.Row>
					{/*<div>*/}
					{/*<div>*/}
					{/*<a name="about-anchor">*/}
					{/*</a>*/}
					<Grid.Column style={{ width: "75%" }}>
						<p>I am a Seattle based Full-stack Web Developer who has spent the last two years growing my knowledge base by following my curiosity.</p>
						<p>I am eager to actively contribute to a team, and apply my spectrum of skills. I pursue both personal and communal growth while delivering solutions with confidence and accuracy. I am design driven and artistic, excel in collective communication, and have a strong ability to pick up new languages and skills quickly.</p>
						<p>My current abilities include proficiency in: JavaScript, Python, React, HTML/CSS, Django, Express, Node.js, Heroku, AWS, Data Modeling, MongoDB, PostgreSQL.</p>
					</Grid.Column>
					{/*</div>*/}
					{/*</div>*/}
					{/*<div>*/}
					<Grid.Column style={{ width: "25%" }}>
						<Image src="https://i.imgur.com/KG96xW4.png" alt="sophie-headshot" id="headshot" size={"small"} circular={true} centered={true} />
					</Grid.Column>
					{/*</div>*/}
				</Grid.Row>
			</Grid>
			<Grid columns={2}>
				<h2 className="aboutTitles" style={{ paddingBottom: "1rem" }}>Certifications</h2>
				<Grid.Row verticalAlign={"middle"} style={{ display: "flex", flexWrap: "nowrap" }}>
					<Grid.Column className="gaImageParent" style={{ width: "15%" }}>
						<Image className="gaImage" style={{ width: "100%" }} src="https://i.imgur.com/hN7GAid.png" alt="general-assembly-logo" />
					</Grid.Column>
					<Grid.Column style={{ width: "90%" }}>
						<p>Completed a full-stack software engineering immersive program in an intensive, twelve-week, 420+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects.</p>
						<a href="https://drive.google.com/file/d/1vFMhW7A67_FyFyjmjjXrg0Gu0-61xG27/view" target="blank" className="aboutCta">Show credential</a>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row verticalAlign={"middle"} style={{ display: "flex", flexWrap: "nowrap" }}>
					<Grid.Column className="awsImageParent" style={{ width: "15%" }}>
						<Image className="awsImage" style={{ width: "100%" }} src="https://i.imgur.com/5feNx95.png" alt="amazon-web-services-certification-image" />
					</Grid.Column>
					<Grid.Column style={{ width: "90%" }}>
						<p>Earned Amazon Web Services Cloud Practitioner in December 2022.</p>
						<a href="https://drive.google.com/file/d/1D5v2TuKKotWfzmyLNL6wXJBFDioDU36U/view" target="blank" className="aboutCta">Show credential</a>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div >
	)
}