import { Link } from 'react-router-dom'

import "./Header.css"


export default function Header() {
	return (
		<div id="all-nav-links">
			<a href="/portfolio" id="title">Sophie Damelio</a>
			<div id="menu-nav-links">
				<a href="/about" class="nav-link">About</a>
				<a href="/projects" class="nav-link">Projects</a>
				<a href="/contact" class="nav-link">Contact</a>
			</div>
		</div>
	)
}