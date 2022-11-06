import { AddIcon } from '@src/components/icons'
import { ListIcon } from '@src/components/icons/ListIcon'
import { NoteIcon } from '@src/components/icons/NoteIcon'

export const sideNavLinks = [
	{ href: 'orders', id: 'orders', text: 'Orders', icon: <NoteIcon />, isPlus: false },
	{ href: 'menu', id: 'menu', text: 'Menu', icon: <ListIcon />, isPlus: true },
	{
		href: 'new-order',
		id: 'new-order',
		text: 'Create New Order',
		icon: <AddIcon />,
		isPlus: true,
	},
]
