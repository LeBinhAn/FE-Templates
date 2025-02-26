import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

type Props = {
	id: number
	title: string
	body: string
}

export default function Post({ id, title, body }: Props) {
	return (
		<Card className='cursor-pointer'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>
					{body.substring(0, 50)}...{' '}
					<Link
						href={`/posts/${id}`}
						className='italic underline underline-offset-1'
					>
						Read more
					</Link>
				</CardDescription>
			</CardHeader>
		</Card>
	)
}
