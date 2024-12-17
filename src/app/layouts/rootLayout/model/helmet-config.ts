type PageHelmetConfig = {
	path: string
	title: string
	description: string
	ogTitle: string
	ogDescription: string
	ogImage: string
	ogUrl?: string
}

import {
	pageHelmetData,
	WEBSITE_URL,
	DEFAULT_IMAGE,
	LangType,
} from "./page-helmet-data"

export const getHelmetConfig = (
	path: string,
	lang: LangType = 'en'
) => {
	const defaultConfig: PageHelmetConfig = {
		path: "/",
		title: "UsefulPeople - Social Network for Programmers",
		description:
			"Join Codersbud to connect, collaborate, and share with other programmers.",
		ogTitle: "Codersbud",
		ogDescription: "The best social network for programmers.",
		ogImage: DEFAULT_IMAGE,
		ogUrl: WEBSITE_URL,
	}

	const matchedPage = pageHelmetData[lang]?.find(page => page.path === path)

	return {
		...defaultConfig,
		...matchedPage,
		ogImage: matchedPage?.ogImage
			? `${WEBSITE_URL}${matchedPage.ogImage}`
			: defaultConfig.ogImage,
		ogUrl: matchedPage?.ogUrl ?? `${WEBSITE_URL}${path}`,
	}
}