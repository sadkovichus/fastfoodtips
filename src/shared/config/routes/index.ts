export const PathNames = {
	root: '/',
	auth: '/auth',
} as const

export type PathNamesKeys = keyof typeof PathNames
export type PathNamesValues = typeof PathNames[PathNamesKeys]