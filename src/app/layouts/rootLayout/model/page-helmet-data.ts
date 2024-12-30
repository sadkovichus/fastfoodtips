const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL || "https://example.com"
const DEFAULT_IMAGE = `${WEBSITE_URL}/favicon.ico`

export type LangType = "en"

export type PageHelmetDataType = {
	path: string
	title: string
	description: string
	ogTitle?: string
	ogDescription?: string
	ogImage?: string
	ogUrl?: string
}




const pageHelmetData: Record<LangType, PageHelmetDataType[]> = {
	en: [
		{
			path: "/",
			title: "Главная",
			description:
				"Welcome to FastFoodTips, the perfect platform created for you to make money from your work. Create, sell, develop, and we will help you with this! We always welcome new people, with love FastFoodTips!",
			ogTitle: "Главная",
			ogDescription: "Explore FastFoodTips, a platform where people from all over the world post their creations.Explore them, participate in competitions and be active. Join us today!",
			ogImage: "favicon.ico",
			ogUrl: ` ${WEBSITE_URL} /`,
		},
		{
			path: "/my-link",
			title: "Ваша ссылка",
			description:
				"Welcome to FastFoodTips, the perfect platform created for you to make money from your work. Create, sell, develop, and we will help you with this! We always welcome new people, with love FastFoodTips!",
			ogTitle: "Ваша ссылка на перевод",
			ogDescription: "Explore FastFoodTips, a platform where people from all over the world post their creations.Explore them, participate in competitions and be active. Join us today!",
			ogImage: "favicon.ico",
			ogUrl: `${WEBSITE_URL}/my-link`,
		},
		{
			path: "/auth",
			title: "Вход в аккаунт",
			description: "Login to your FastFoodTips account to access your personalized profile, connect with others, and take advantage of exclusive features.",
			ogTitle: "Вход в ваш аккаунт",
			ogDescription:
				"Log in to your FastFoodTips account to stay connected with the global community of programmers, manage your projects, and engage in meaningful technical discussions.",
			ogUrl: `${WEBSITE_URL}/auth`,
		},
		{
			path: "/auth/create",
			title: "Создание аккаунта",
			description:
				"Sign up for FastFoodTips to become a part of a dynamic network of developers. Personalize your profile, access tutorials, and engage with experts in coding and programming.",
			ogTitle: "Создание аккаунта",
			ogDescription:
				"Register now and start your journey on FastFoodTips, a platform designed for developers to connect, learn, and grow. Unlock exclusive content and tools for your programming career.",
			ogUrl: `${WEBSITE_URL} /auth/create`,
		},
		{
			path: "/auth/verify",
			title: "Верификация аккаунта",
			description:
				"Complete the verification process by confirming your email address. This step ensures the security of your account and allows you to activate your full FastFoodTips membership.",
			ogTitle: "Верификация аккаунта",
			ogDescription:
				"Verify your email to finish setting up your FastFoodTips account. Ensure your information is accurate and secure to start connecting with other developers on the platform.",
			ogUrl: `${WEBSITE_URL} / auth / verify`,
		},
		{
			path: "/settings",
			title: "Настройки профиля",
			description:
				"Manage your account settings, privacy preferences, and notification options. Tailor your FastFoodTips experience to suit your needs and preferences as a programmer.",
			ogTitle: "Настройки вашего профиля",
			ogDescription:
				"Adjust your FastFoodTips settings to enhance your experience. Customize notifications, account details, and privacy settings to get the most out of the platform.",
			ogUrl: `${WEBSITE_URL}/settings`,
		},
		{
			path: "/settings/change-password",
			title: "Смена пароля",
			description:
				"Manage your account settings, privacy preferences, and notification options. Tailor your FastFoodTips experience to suit your needs and preferences as a programmer.",
			ogTitle: "Смена вашего пароля",
			ogDescription:
				"Adjust your FastFoodTips settings to enhance your experience. Customize notifications, account details, and privacy settings to get the most out of the platform.",
			ogUrl: `${WEBSITE_URL}/settings/change-password`,
		},
		{
			path: "/pay",
			title: "Введите код получателя",
			description:
				"Manage your account settings, privacy preferences, and notification options. Tailor your FastFoodTips experience to suit your needs and preferences as a programmer.",
			ogTitle: "Введите код получателя чаевых",
			ogDescription:
				"Adjust your FastFoodTips settings to enhance your experience. Customize notifications, account details, and privacy settings to get the most out of the platform.",
			ogUrl: `${WEBSITE_URL}/settings/change-password`,
		},
		{
			path: "/pay/*", // Тут вместо звезды будет код который вводит пользователь 
			title: "Отправка чаевых", // а тут после "Отправка чаевых " должен быть этот код
			description:
				"Manage your account settings, privacy preferences, and notification options. Tailor your FastFoodTips experience to suit your needs and preferences as a programmer.",
			ogTitle: "Отправьте чаевые",
			ogDescription:
				"Adjust your FastFoodTips settings to enhance your experience. Customize notifications, account details, and privacy settings to get the most out of the platform.",
			ogUrl: `${WEBSITE_URL}/settings/change-password`,
		},
		{
			path: "*",
			title: "Такой страницы нет",
			description:
				"Oops! The page you are looking for does not exist. Please return to the homepage or contact our support team if you need assistance.",
			ogTitle: "404 Page Not Found | Lost in Space?",
			ogDescription:
				"The page you requested couldn't be found. Go back to the home page or reach out for help if you need assistance navigating FastFoodTips.",
			ogUrl: `${WEBSITE_URL}/404`,
		},
	],
}

/**
 * Генерация JSON-LD для улучшения SEO
 */
export const generateJsonLd = (path: string) => {
	return {
		"@context": "http://schema.org",
		"@type": "WebPage",
		url: `${WEBSITE_URL}${path}`,
		name: "FastFoodTips",
		description:
			"FastFoodTips это онлайн сервис для отправки чаевых.",
	}
}

/**
 * Генерация мета-тегов
 */
export const generateMetaTags = (path: string, lang: LangType = "en") => {
	const pageData = pageHelmetData[lang].find((page) => page.path === path) || pageHelmetData[lang].find((page) => page.path === "*")

	return {
		title: pageData?.title || "FastFoodTips",
		meta: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			description: pageData?.description || "FastFoodTips is your go-to platform.",
			"og:title": pageData?.ogTitle || pageData?.title,
			"og:description": pageData?.ogDescription || pageData?.description,
			"og:url": pageData?.ogUrl || `${WEBSITE_URL}${path}`,
			"og:image": pageData?.ogImage || DEFAULT_IMAGE,
			"og:type": "website",
			"twitter:card": "summary_large_image",
			"twitter:title": pageData?.ogTitle || pageData?.title,
			"twitter:description": pageData?.ogDescription || pageData?.description,
			"twitter:image": pageData?.ogImage || DEFAULT_IMAGE,
		},
		link: [
			{ rel: "icon", href: DEFAULT_IMAGE },
		],
		script: [
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify(generateJsonLd(path)),
			},
		],
	}
}

export { pageHelmetData, WEBSITE_URL, DEFAULT_IMAGE }
