import React from 'react'
import {
	TypographyH1,
	TypographyH3,
	TypographyMuted,
	TypographyP,
	TypographySmall
} from '@/components/ui/typography'

type Props = {
	post: Post
	author: User
	comments: PostComment[]
	error?: {
		user?: string
		comments?: string
	}
}

export default async function Post({ post, author, comments, error }: Props) {
	return (
		<div>
			<TypographyH1>{post.title}</TypographyH1>
			<TypographyMuted>{author.name}</TypographyMuted>
			<TypographyP>{post.body}</TypographyP>
			<section className='comments'>
				<TypographyH3>Comments ({comments.length})</TypographyH3>

				{error?.comments ? (
					<div className='error-message mt-4'>
						Unable to load comments: {error.comments}
					</div>
				) : comments.length > 0 ? (
					<div className='flex flex-col gap-4 mt-4'>
						{comments.map(comment => (
							<div key={comment.id} className='flex flex-col'>
								<TypographySmall>{comment.body}</TypographySmall>
								<TypographyMuted>By: {comment.email}</TypographyMuted>
							</div>
						))}
					</div>
				) : (
					<p>No comments yet.</p>
				)}
			</section>
		</div>
	)
}
