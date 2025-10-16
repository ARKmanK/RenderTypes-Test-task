'use client'
import useSWR from 'swr'
import axios from 'axios'

interface IAlbum {
	userId: number
	id: number
	title: string
}

export default function ClientPage() {
	const { data, error, isLoading } = useSWR<IAlbum[]>(
		'https://jsonplaceholder.typicode.com/albums?_limit=10',
		async (url: string) => {
			const response = await axios.get<IAlbum[]>(url)
			return response.data
		}
	)

	if (isLoading) return <p>Loading…</p>
	if (error) return <p>Error while loading</p>

	return (
		<ul className='grid gap-2'>
			{data?.map(x => (
				<li key={x.id} className='border rounded-md p-3'>
					{x.title}
				</li>
			))}
		</ul>
	)
}
