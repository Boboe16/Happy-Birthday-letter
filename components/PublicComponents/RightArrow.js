export default function Component() {
	return  (
		<div className='right-arrow-container'>
			<a className="arrow arrow-right" title="Next" href={`${process.env.NEXT_PUBLIC_URL}/flip-note`}></a>
		</div>
	)
}