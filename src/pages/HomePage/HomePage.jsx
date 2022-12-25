import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

import './HomePage.css';

import { useState } from 'react'


export default function HomePage() {

	const [sophie, setSophie] = useState("https://i.imgur.com/P5KDK68.png")

	return (
		<div id="proj">
			<Navbar className="components" />
			<About />
			<Projects className="components" sophie={sophie} setSophie={setSophie} />
			<Footer />
		</div>
	)
}