import { Grid, Image, Accordion, Icon } from 'semantic-ui-react'
//import React, { useState } from 'react';
import './Itg.css'

export default function Itg() {

	////const [activeIndex, setActiveIndex] = useState(0)
	//state = { activeIndex: 0 }

	//let handleClick = (e, titleProps) => {
	//	const { index } = titleProps
	//	const { activeIndex } = this.state
	//	const newIndex = activeIndex === index ? -1 : index

	//	this.setState({ activeIndex: newIndex })
	//}

	//const { activeIndex } = this.state

	const panels = [
		{
			key: 'what-is-dog',
			title: 'What is a dog?',
			content: [
				'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
				'guest in many households across the world.',
			].join(' '),
		},
		{
			key: 'kinds-of-dogs',
			title: 'What kinds of dogs are there?',
			content: [
				'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
				'that they find to be compatible with their own lifestyle and desires from a companion.',
			].join(' '),
		},
		{
			key: 'acquire-dog',
			title: 'How do you acquire a dog?',
			content: {
				content: (
					<div>
						<p>
							Three common ways for a prospective owner to acquire a dog is from
							pet shops, private owners, or shelters.
						</p>
						<p>
							A pet shop may be the most convenient way to buy a dog. Buying a dog
							from a private owner allows you to assess the pedigree and
							upbringing of your dog before choosing to take it home. Lastly,
							finding your dog from a shelter, helps give a good home to a dog who
							may not find one so readily.
						</p>
					</div>
				),
			},
		},
	]

	//  const AccordionExampleStandardShorthand = () => (
	//  )

	return (

		<div>
			<Accordion defaultActiveIndex={0} panels={panels} />
			<div style={{ margin: "5vh" }}>
				<h2 style={{ fontFamily: "OPTIAmway" }}>Ideas To Go Website Build</h2>
				<p>I developed and designed this website for Ideas To Go from May 2021 - Oct 2021 as a freelance contractor. I no longer maintain the website, the contract ended upon completion of the build. It is hosted on Squarespace, and uses a custom theme I created. I was provided design assets including logos, fonts, and a color pallet. I worked with their Designer <a href="https://francesbarra.wixsite.com/mysite" target="blank" id="frankie-link">Frances Barra</a> to implement page designs, and picked up so many skills throughout our communication as well as technical exposure. I learned a lot from the task of recreating detailed designs for the live website.</p>
				<p>I developed the entire website of 40+ pages, and utilized a combination of built in Squarespace features and my own custom CSS. The process of this project brought me many new ways of approaching a problem, and I learned the most from utilizing flexibility and researching and understanding process before delving deep into it. The most technical aspects of the website that I implemented are the angled and responsive page transitions, the custom CTA buttons, the contact form (embed from their CRM), and the responsive images.</p>
				{/*<div class="carousel-item active">*/}
				<Grid columns={5}>
					<Grid.Row>
						<Grid.Column>
							<Image src="https://i.imgur.com/gK6tkHZ.jpg" alt="First slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column>
							<Image src="https://i.imgur.com/UIfSHC1.jpg" alt="Second slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column>
							<Image src="https://i.imgur.com/A9rRfgg.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column>
							<Image src="https://i.imgur.com/1z0NPZI.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column>
							<Image class="d-block w-100" src="https://i.imgur.com/H1n061w.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>

					<img class="d-block w-100" src="https://i.imgur.com/6dGoGb1.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/doAsgK1.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/2MvQylD.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/OeLb6Up.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/AfXUQ8E.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/CB5NQa3.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/9mBHFKt.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/lAqkpka.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/lbs2mEB.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/lmzsSwF.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/pNELKQJ.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/e6QPKi8.png" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/yxWTgsT.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/ifdhqwH.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/uJgpJQb.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/czgMYjj.jpg" alt="Third slide" />
					{/*</div>*/}
					{/*<div class="carousel-item">*/}
					<img class="d-block w-100" src="https://i.imgur.com/QreTmcf.jpg" alt="Third slide" />
					{/*</div>*/}
				</Grid>
			</div>
		</div>
	)
}