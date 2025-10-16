export const API = process.env.API_URL

export async function getPosts(limit = 10) {
	const response = await fetch(`${API}/posts?_limit=${limit}`, { next: { revalidate: false } }) // SSG
	if (!response.ok) throw new Error('Failed to fetch posts')
	return response.json() as Promise<Array<{ id: number; title: string; body: string }>>
}

export async function getTodos(limit = 10) {
	const response = await fetch(`${API}/todos?_limit=${limit}`, { cache: 'no-store' }) // SSR
	if (!response.ok) throw new Error('Failed to fetch todos')
	return response.json() as Promise<Array<{ id: number; title: string; completed: boolean }>>
}

export async function getUsers() {
	const response = await fetch(`${API}/users`, { next: { revalidate: 60 } }) // ISR 60 сек
	if (!response.ok) throw new Error('Failed to fetch users')
	return response.json() as Promise<Array<{ id: number; name: string; email: string }>>
}
