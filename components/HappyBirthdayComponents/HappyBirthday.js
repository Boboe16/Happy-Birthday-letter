import Script from 'next/script'
import Image from "next/image"
import Canva from'./Script.js'

export default function Component() {
	return (
		<>
			<link href='https://fonts.googleapis.com/css?family=Josefin+Sans:100,300' rel='stylesheet' type='text/css' />
			<div className="cover super-centered-container">
			  <canvas id="can">Get a browser</canvas>
			  <Canva />
			  <div className="overlay-static">    
			    <div className="inline-blocks">
			      <h2 className="twenty-one block">2</h2>
			      <Image className="image block" src="https://pbs.twimg.com/profile_images/598530118873550849/JpypZ9M2.jpg" width='100' height='100' />
			      <h2 className="twenty-one block"> + 1</h2>
			    </div>
			    <h1 className="bday">Happy Birthday <a href="https://twitter.com/drpatil78/">@drpatil78</a></h1>
			  </div>
			</div>
			{/*<Script src='./Script.js' />*/}
		</>
	)
}