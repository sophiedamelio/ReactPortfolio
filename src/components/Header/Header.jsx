import { Link } from 'react-router-dom'

import "./Header.css"


export default function Header() {
	return (
		<div id="all-nav-links">
			<a href="/portfolio" id="title">Sophie Damelio</a>
			<div id="menu-nav-links">
				<a href="/about" className="nav-link">About</a>
				<a href="/projects" className="nav-link">Projects</a>
				<a href="/contact" className="nav-link">Contact</a>
			</div>
		</div>
	)
}