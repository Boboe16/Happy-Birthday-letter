import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Component() {
	const router = useRouter()

	return (
		<div className='left-arrow-container arrow-container'>
			<p className="arrow arrow-left" title="Previous" onClick={() => router.push('/')} />
		</div>
	)
}
