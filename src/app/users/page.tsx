import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { getUsers } from '@/lib/api'
export const revalidate = 60 // ISR 60 сек

export default async function UsersPage() {
	const users = await getUsers()

	return (
		<Table className='w-full text-sm'>
			<TableHeader>
				<TableRow className='text-left border-b'>
					<TableHead className='py-2 font-bold'>ID</TableHead>
					<TableHead className='font-bold'>Name</TableHead>
					<TableHead className='font-bold'>Email</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map(u => (
					<TableRow key={u.id} className='border-b last:border-0'>
						<TableCell className='py-2'>{u.id}</TableCell>
						<TableCell>{u.name}</TableCell>
						<TableCell>{u.email}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
