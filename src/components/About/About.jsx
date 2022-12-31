import './About.css'
import { Grid, Image } from 'semantic-ui-react'

export default function About() {
	return (
		<div id="aboutSection">
			<Grid columns={2}>
				<h2 id="aboutTitle">About</h2>
				<Grid.Row>
					{/*<div>*/}
					{/*<div>*/}
					{/*<a name="about-anchor">*/}
					{/*</a>*/}
					<Grid.Column style={{ width: "70%" }}>
						<p>I am a Seattle based Full-stack Web Developer who has spent the last two years growing my knowledge base by following my curiosity.</p>
						<p>I am eager to actively contribute to a team, and apply my spectrum of skills. I pursue both personal and communal growth while delivering solutions with confidence and accuracy. I am design driven and artistic, excel in collective communication, and have a strong ability to pick up new languages and skills quickly.</p>
						<p>My current abilities include proficiency in: JavaScript, Python, React, HTML/CSS, Django, Express, Node.js, Heroku, AWS, Data Modeling, MongoDB, PostgreSQL.</p>
					</Grid.Column>
					{/*</div>*/}
					{/*</div>*/}
					{/*<div>*/}
					<Grid.Column style={{ width: "25%" }}>
						<Image src="https://i.imgur.com/KG96xW4.png" alt="sophie-headshot" id="headshot" size={'medium'} circular={true} />
					</Grid.Column>
					{/*</div>*/}
				</Grid.Row>
			</Grid>
		</div>
	)
}