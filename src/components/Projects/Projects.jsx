import "./Projects.css"

import { Grid, Card, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function Projects() {
	return (
		<div id="projectsSection">
			<section id="projects">
				<h2 style={{ fontFamily: "Merriweather", marginBottom: "3vh" }}>Projects</h2>

				<Grid doubling columns={2}>
					<Grid.Column>
						<Card style={{ backgroundColor: "rgb(234, 204, 203)", width: "100%", height: "100%" }}>
							<Card.Content>
								<Card.Header style={{ color: "rgb(110, 87, 91)", fontFamily: "Merriweather" }}>songSpace Express App</Card.Header>
								<Image id="projectImg" src="https://i.imgur.com/QmloUf2.png" alt="screenshot of app" size={'big'} style={{ paddingTop: "2vh", paddingBottom: "2vh" }} />
								<Card.Description style={{ color: "rgb(110, 87, 91)" }}>
									I built a Fullstack Express App with React frontend, that performs full CRUD functionality.
									I utilized JWT for authentication, MongoDB for storage, Semantic-ui-react for styling, and Heroku for deployment.
									Create your own account if you'd like, or view a demo of app using this login: <br></br>
									username: demo@demo.com <br></br>
									password: demo <br></br>
									<a target="_blank" rel="noopener noreferrer" href="https://github.com/sophiedamelio/project_4" className="projectCta" style={{ marginLeft: "0vh" }}>Link to the Repo</a>
									<a target="_blank" rel="noopener noreferrer" href="https://songspace-app.herokuapp.com/" className="projectCta" style={{ marginLeft: "0vh" }}>Explore songSpace</a>
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>

					<Grid.Column>
						<Card style={{ backgroundColor: "rgb(234, 204, 203)", width: "100%", height: "100%" }}>
							<Card.Content>
								<Card.Header style={{ color: "rgb(110, 87, 91)", fontFamily: "Merriweather" }}>everyJob Django App</Card.Header>
								<Image id="projectImg" src="https://i.imgur.com/ixSrCHd.png" alt="screenshot of app" size={'big'} style={{ paddingTop: "2vh", paddingBottom: "2vh" }} />
								<Card.Description style={{ color: "rgb(110, 87, 91)" }}>
									<p class="card-text">As a part of a four person team I collaboratively  built a Fullstack Django app with full CRUD functionality.
										We utilized PostgreSQL for database storage, Django built-in Authentication, and deployment on Heroku.</p>
									<a className="projectCta" target="_blank" rel="noopener noreferrer" href="https://github.com/sophiedamelio/everyJob" style={{ marginLeft: "0vh" }}>Link to the Repo</a>
									<a className="projectCta" target="_blank" rel="noopener noreferrer" href="https://sophie-everyjob.herokuapp.com/" style={{ marginLeft: "0vh" }}>Explore everyJob</a>
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>

					<Grid.Column>
						<Card style={{ backgroundColor: "rgb(234, 204, 203)", width: "100%", height: "100%" }}>
							<Card.Content>
								<Card.Header style={{ color: "rgb(110, 87, 91)", fontFamily: "Merriweather" }}>Wishlist Express App</Card.Header>
								<Image id="projectImg" src="https://i.imgur.com/DgzgQqh.png" alt="screenshot of app" size={'big'} style={{ paddingTop: "2vh", paddingBottom: "2vh" }} />
								<Card.Description style={{ color: "rgb(110, 87, 91)" }}>
									<p class="card-text">I built a Wishlist app using Express with full CRUD functionality and Google OAuth.
										MongoDB is used for storage, and it is deployed on Heroku.</p>
									<a className="projectCta" target="_blank" rel="noopener noreferrer" href="https://github.com/sophiedamelio/project_two" style={{ marginLeft: "0vh" }}>Link to the Repo</a>
									<a className="projectCta" target="_blank" rel="noopener noreferrer" href="https://sophie-project-two.herokuapp.com/" style={{ marginLeft: "0vh" }}>Get Listing</a>
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>

					<Grid.Column>
						<Card style={{ backgroundColor: "rgb(234, 204, 203)", width: "100%", height: "100%" }}>
							<Card.Content>
								<Card.Header style={{ color: "rgb(110, 87, 91)", fontFamily: "Merriweather" }}>Connect Four Browser Game</Card.Header>
								<Image id="projectImg" src="https://i.imgur.com/b9LmOUu.png" alt="screenshot of app" size={'big'} style={{ paddingTop: "2vh", paddingBottom: "2vh" }} />
								<Card.Description style={{ color: "rgb(110, 87, 91)" }}>
									<p>I built a Connect Four browser game using JavaScript and HTML/CSS.
										I used a Trello board to plan, and deployed via Github Pages. </p>
									<a className="projectCta" target="_blank" rel="noopener noreferrer" href="https://github.com/sophiedamelio/connect_four/" style={{ marginLeft: "0vh" }}>Link to the Repo</a>
									<a className="projectCta" target="_blank" rel="noopener noreferrer" href="https://sophiedamelio.github.io/connect_four_browser_game/" style={{ marginLeft: "0vh" }}>Play Connect Four</a>
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>

					<Grid.Column>
						<Card style={{ backgroundColor: "rgb(234, 204, 203)", width: "100%", height: "100%" }}>
							<Card.Content>
								<Card.Header style={{ color: "rgb(110, 87, 91)", fontFamily: "Merriweather" }}>Ideas To Go Website</Card.Header>
								<Image id="projectImg" src="https://i.imgur.com/Zgn5lPV.jpg" alt="screenshot of app" size={'big'} style={{ paddingTop: "2vh", paddingBottom: "2vh" }} />
								<Card.Description style={{ color: "rgb(110, 87, 91)" }}>
									<p class="card-text">I developed and designed this website with provided design assets. I organized content, converted graphics and created page layouts. I wrote responsive CSS including section transitions, CTAs, and general styling of elements beyond the built in Squarespace options. </p>
									<a className="projectCta" target="_blank" rel="noopener noreferrer" href='https://github.com/sophiedamelio/itg_css' style={{ marginLeft: "0vh" }}>Link to the Repo</a>
									<Link className="projectCta" to='FreelanceDetail' style={{ marginLeft: "0vh" }}>View</Link>
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>

					<Grid.Column>
						{/*<Card style={{ backgroundColor: "rgb(234, 204, 203)", width: "100%", height: "100%" }}>
							<Card.Content>
								<Card.Header style={{ color: "rgb(110, 87, 91)", fontFamily: "Merriweather" }}>placeholder</Card.Header>
								<Image id="projectImg" src="https://i.imgur.com/Zgn5lPV.jpg" alt="screenshot of app" size={'big'} style={{ paddingTop: "2vh", paddingBottom: "2vh" }} />
								<Card.Description style={{ color: "rgb(110, 87, 91)" }}>
									<p class="card-text">I developed and designed this website with provided design assets. I organized content, converted graphics and created page layouts. I wrote responsive CSS including section transitions, CTAs, and general styling of elements beyond the built in Squarespace options. </p>
									<a className="projectCta" target="_blank" rel="noopener noreferrer" href='https://github.com/sophiedamelio/itg_css' style={{ marginLeft: "0vh" }}>Link to the Repo</a>
								</Card.Description>
							</Card.Content>
						</Card>*/}
					</Grid.Column>
				</Grid>
			</section>
		</div>
	)
}