export const PathNames = {
	root: '/',
	auth: '/auth',
	create: '/auth/create',
	verify: '/auth/verify',
	pay: '/pay',
	settings: '/settings',
	changePassword: '/settings/change-password',
	myLink: '/my-link',
} as const

export type PathNamesKeys = keyof typeof PathNames
export type PathNamesValues = typeof PathNames[PathNamesKeys]