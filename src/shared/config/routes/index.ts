export const PathNames = {
	root: '/',
	auth: '/auth',
	create: '/auth/create',
	verify: '/auth/verify',
} as const

export type PathNamesKeys = keyof typeof PathNames
export type PathNamesValues = typeof PathNames[PathNamesKeys]