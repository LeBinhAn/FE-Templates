import { API_URL } from '@/configs/api'
import { notFound } from 'next/navigation'

export async function getPosts(): Promise<Post[]> {
	const res = await fetch(`${API_URL}/posts`, {
		next: { revalidate: 60 }
	})

	if (!res.ok) {
		if (res.status === 404) notFound()
		throw new Error('Failed to fetch post')
	}

	return res.json()
}

export async function getPost(id: number): Promise<Post> {
	const res = await fetch(`${API_URL}/posts/${id}`, {
		next: { revalidate: 60 }
	})

	if (!res.ok) {
		if (res.status === 404) notFound()
		throw new Error('Failed to fetch post')
	}

	return res.json()
}

export async function getPostComments(postId: number): Promise<PostComment[]> {
	const res = await fetch(`${API_URL}/posts/${postId}/comments`, {
		next: { revalidate: 60 }
	})

	if (!res.ok) {
		throw new Error('Failed to fetch comments')
	}

	return res.json()
}
