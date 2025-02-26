import React from 'react'
import { PostPreview } from '@/blocks/PostPreview'
import { TypographyH1 } from '@/components/ui/typography'

type Props = {
	posts: Post[]
}

export default function Dashboard({ posts }: Props) {
	return (
		<>
			<TypographyH1 className='text-center my-4'>Blogs</TypographyH1>
			<div className='flex flex-col min-h-screen py-2 gap-4 px-5'>
				{posts.map((post: Post) => (
					<PostPreview key={post.id} {...post} />
				))}
			</div>
		</>
	)
}
