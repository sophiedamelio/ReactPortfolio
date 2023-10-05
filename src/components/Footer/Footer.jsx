import "./Footer.css"

import { Grid } from "semantic-ui-react"

export default function Footer() {
	return (
		<section id="contact">
			<Grid columns={1}>
				<Grid.Row>
					<Grid.Column>
						<h2 style={{ fontFamily: "Merriweather" }}>Contact</h2>
						<p>Email: sophiedamelio@gmail.com</p>
						<div style={{ marginTop: "3.5vh" }}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sophiedamelio/" className="footer-nav-link">LinkedIn</a>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/sophiedamelio/" className="footer-nav-link">GitHub</a>
							<a href="https://docs.google.com/document/d/1LPEHmH7vYy471BvStVojWTBq3CVGEgukQoUej6Y2k0w/export?format=pdf" download="sophie_damelio_resume" className="footer-nav-link">Download Resume</a>
							<a href="https://drive.google.com/file/d/1CJNBY9hLpkBf6B8dgjULcjn_ohNnPSvJ/view" target="blank" className="footer-nav-link">View Resume</a>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
	)
}