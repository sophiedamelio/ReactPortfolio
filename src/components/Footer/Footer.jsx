import "./Footer.css"


export default function Footer() {
	return (
		<>
			{/*<a name="contact-anchor">*/}
			<h2>Contact</h2>
			{/*</a>*/}
			<p>Email: sophiedamelio@gmail.com</p>
			<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sophiedamelio/"><button class="cta">LinkedIn</button></a>
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/sophiedamelio/"><button class="cta">GitHub</button></a>
			<a href="https://docs.google.com/document/d/1LPEHmH7vYy471BvStVojWTBq3CVGEgukQoUej6Y2k0w/export?format=pdf" download="sophie_damelio_resume"><button class="cta">Download Resume</button></a>
		</>
	)
}