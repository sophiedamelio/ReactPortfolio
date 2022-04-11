import "./Projects.css"
import { useEffect, useState } from "react"



export default function Projects({ sophie, setSophie }) {

	//const [sophie, setSophie] = useState("sophie")

	useEffect(() => {
		console.log('value of sophie changed, useEffect envoked')
		console.log(sophie, "<---- updated value of sophie")

		return () => console.log('component unmounted')

	}, [sophie])


	const skills = [
		{ skill: "Manipulate the DOM", id: 1 },
		{ skill: "Create responsive CSS", id: 2 },
		{ skill: "Read errors", id: 3 },
		{ skill: "Ask questions frequently", id: 4 },
		{ skill: "Read and utilize documentation", id: 5 },
	];

	const listSkills = skills.map((skill, index) =>
		<li key={skill.id}>
			{skill.skill}
		</li>
	);

	//const listSkills = null;


	return (
		<div id="projects">
			<p>projects</p>
			<button onClick={() => {
				if (sophie === "https://i.imgur.com/P5KDK68.png") {
					setSophie("https://i.imgur.com/tCg6n3O.jpg")
				} else {
					setSophie("https://i.imgur.com/P5KDK68.png")
				}
			}}
			>CHANGE SOPHIE'S VALUE</button>
			<img src={sophie} />

			{/* if listSkills is truthy (has value in this case), list them out as a unordered list. If listSkills is falsey/ does not have value, render nothing */}
			{listSkills ? <ul>{listSkills}</ul> : null}

		</div>
	)
}