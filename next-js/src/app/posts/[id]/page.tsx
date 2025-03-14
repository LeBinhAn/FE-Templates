import PostDetails from '@/blocks/Post/Post'
import { getPostComments, getPost } from '@/services/postServices'
import { getUser } from '@/services/userServices'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
	params: {
		id: number
	}
}

export default async function Page({ params }: Props) {
	const { id } = params
	const post = await Promise.resolve()
		.then(() => getPost(params.id))
		.catch(() => notFound())

	const [authorResult, commentsResult] = await Promise.allSettled([
		getUser(post.userId),
		getPostComments(id)
	])

	// Extract user data or set default values
	const author =
		authorResult.status === 'fulfilled'
			? authorResult.value
			: { id: post.userId, name: 'Unknown Author' }

	// Extract comments or use empty array
	const comments =
		commentsResult.status === 'fulfilled' ? commentsResult.value : []

	// Track errors for UI display
	const errors = {
		user:
			authorResult.status === 'rejected' ? authorResult.reason.message : null,
		comments:
			commentsResult.status === 'rejected'
				? commentsResult.reason.message
				: null
	}

	return (
		<PostDetails
			post={post}
			author={author}
			comments={comments}
			error={errors}
		/>
	)
}
