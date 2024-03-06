import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Component() {
	const router = useRouter()

	return  (
		<div className='right-arrow-container arrow-container'>
			<p className="arrow arrow-right" title="Next" onClick={() => router.push('/flip-note')} />
		</div>
	)
}