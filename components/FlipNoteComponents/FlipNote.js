import Image from "next/image"
import LeftArrow from "../PublicComponents/LeftArrow.js"

export default function FlipNote() {

	return (
		<>
			<div className="card">
				<div className="imgBox">
					<div className="bark"></div>
					<Image src="/cover2.jpg" alt='FlipNoteCover' width='300' height='400' />
				</div>
				<div className="details">
					<h4 className="color1">🥰🥰😘😘😻😻</h4>
					<h4 className="color2 margin">🥳🥳🎉🎉🤩🤩</h4>
					<p>Dear Ange</p>
					<p>Happy birthday to you, my love, </p>
					<p>on your special day, I love you now,</p>
					<p>and always will, you're one of the </p>
					<p>best thing that has ever happened to me </p>
					<p>, I'm lucky to have you in my life ♡.</p>
					<p>I will cherish you, forever & ever. Always </p>
					<p>take care of yourself, I love you Baby</p>
					<p className="text-right">Happy Birthday Labidabs</p>
					<p className="text-right">˚ʚ♡ɞ˚Jeric</p>
				</div>
			</div>
			<LeftArrow />
		</>
	)
}