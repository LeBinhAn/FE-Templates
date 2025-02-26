import { Dashboard } from '@/blocks/Dashboard'
import { getPosts } from '@/services/postServices'

export default async function Home() {
	const posts = await getPosts()

	return <Dashboard posts={posts} />
}
