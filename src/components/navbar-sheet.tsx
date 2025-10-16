'use client'

import React from 'react'
import { PanelLeft, ZapIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { menuData } from '@/lib/menu'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const NavbarSheet = () => {
	const pathname = usePathname()

	return (
		<>
			<div className='flex justify-between items-center gap-2 mb-3'>
				<div className='flex gap-2'>
					<Sheet>
						<SheetTrigger>
							<PanelLeft />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>
									<SheetClose asChild>
										<Link href='/' className='font-semibold flex gap-2 items-center'>
											<ZapIcon /> Next Test Task
										</Link>
									</SheetClose>
								</SheetTitle>
								<SheetDescription className='sr-only'>Menu</SheetDescription>
								<NavigationMenu className='w-full'>
									<NavigationMenuList className={'grid w-full'}>
										{menuData.map(item => (
											<NavigationMenuItem key={item.name} className='w-full'>
												<SheetClose asChild>
													<NavigationMenuLink asChild className='px-3 py-2 w-full'>
														<Link
															href={item.link}
															className={cn(pathname === item.link && 'bg-background', 'w-full')}
														>
															{item.name}
														</Link>
													</NavigationMenuLink>
												</SheetClose>
											</NavigationMenuItem>
										))}
									</NavigationMenuList>
								</NavigationMenu>
							</SheetHeader>
						</SheetContent>
					</Sheet>
					<div className='h-[24px] w-px bg-plt-grey' />
					<span>{menuData.find(item => item.link === pathname)?.name || 'Main'}</span>
				</div>
			</div>
		</>
	)
}
