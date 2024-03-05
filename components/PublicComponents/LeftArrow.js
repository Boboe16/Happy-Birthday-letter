export default function Component() {
	return (
		<div className='left-arrow-container'>
			<a className="arrow arrow-left" title="Previous" href={`${process.env.NEXT_PUBLIC_URL}/flip-note`}></a>
		</div>
	)
}
