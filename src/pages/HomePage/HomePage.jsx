import Header from '../../components/Header/Header'
import Projects from '../../components/Projects/Projects'

import { useState } from 'react'


export default function HomePage() {

	const [sophie, setSophie] = useState("https://i.imgur.com/P5KDK68.png")

	return (
		<div id="proj">
			<Header className="components" />
			<Projects className="components" sophie={sophie} setSophie={setSophie} />
		</div>
	)
}