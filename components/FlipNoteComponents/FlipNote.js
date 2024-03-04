import Image from "next/image"
export default function FlipNote() {

	
	return (
		<>
			<div className="card">
				<div className="imgBox">
					<div className="bark"></div>
					<Image src="/cover.jpg" alt='FlipNoteCover' width='300' height='400' />
				</div>
				<div className="details">
					<h4 className="color1">asdddddddddddddddddddddddd</h4>
					<h4 className="color2 margin">asdddddddddddddddd</h4>
					<p>Dear Dadasdasdasdas</p>
					<p>Lets see</p>
					<p>asdsdaaaaaaaaaaaaaou</p>
					<p>haasdddddddddddddddddddd</p>
					<p>asddddddddddddddddddddddddddddd</p>
					<p>like and yetsadddddddddddd</p>
					<p>sadasddddddddddddddddddddd</p>
					<p>zxxxxxxxxxxxxxxxxxxxxx</p>
					<p className="text-right">zxxxxxxxxxxxxxxxxxxxxx</p>
					<p className="text-right">Jeric</p>
				</div>
			</div>
		</>
	)
}