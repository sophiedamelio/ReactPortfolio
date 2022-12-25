import "./Navbar.css"
import { Header } from 'semantic-ui-react';


export default function Navbar() {
	return (
		<Header id="all-nav-links">
			<a href="/portfolio" id="title">Sophie Damelio</a>
			<div id="menu-nav-links">
				<a href="/about" className="nav-link">About</a>
				<a href="/projects" className="nav-link">Projects</a>
				<a href="/contact" className="nav-link">Contact</a>
			</div>
		</Header>
	)
}