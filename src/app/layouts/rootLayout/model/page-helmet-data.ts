const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL
const DEFAULT_IMAGE = `${WEBSITE_URL}favicon.ico`

export type LangType = 'en'

export type PageHelmetDataType = {
	path: string
	title: string
	description: string
	ogTitle: string
	ogDescription: string
	ogImage?: string
	ogUrl?: string
}

const pageHelmetData: Record<LangType, PageHelmetDataType[]> = {
	en: [
		{
			path: "/",
			title: "FastFoodTips - Home Page | Marketplace for Online Goods",
			description:
				"Welcome to FastFoodTips, the perfect platform created for you to make money from your work. Create, sell, develop, and we will help you with this! We always welcome new people, with love FastFoodTips!",
			ogTitle: "FastFoodTips - Home Page | Connect, Learn, Collaborate",
			ogDescription: "Explore FastFoodTips, a platform where people from all over the world post their creations.Explore them, participate in competitions and be active. Join us today!",
			ogImage: "favicon.ico",
			ogUrl: `${WEBSITE_URL}/`,
		},		
		{
			path: "/my-link",
			title: "FastFoodTips - Link Page | Marketplace for Online Goods",
			description:
				"Welcome to FastFoodTips, the perfect platform created for you to make money from your work. Create, sell, develop, and we will help you with this! We always welcome new people, with love FastFoodTips!",
			ogTitle: "FastFoodTips - Home Page | Connect, Learn, Collaborate",
			ogDescription: "Explore FastFoodTips, a platform where people from all over the world post their creations.Explore them, participate in competitions and be active. Join us today!",
			ogImage: "favicon.ico",
			ogUrl: `${WEBSITE_URL}/`,
		},
		{
			path: "/auth",
			title: "FastFoodTips - Sign In | Access Your Account",
			description: "Login to your FastFoodTips account to access your personalized profile, connect with others, and take advantage of exclusive features.",
			ogTitle: "FastFoodTips - Sign In | Join the Marketplace",
			ogDescription:
				"Log in to your FastFoodTips account to stay connected with the global community of programmers, manage your projects, and engage in meaningful technical discussions.",
			ogUrl: `${WEBSITE_URL}/auth`,
		},
		{
			path: "/auth/create",
			title: "FastFoodTips - Sign Up | Create Your Account",
			description:
				"Sign up for FastFoodTips to become a part of a dynamic network of developers. Personalize your profile, access tutorials, and engage with experts in coding and programming.",
			ogTitle: "FastFoodTips - Sign Up | Join the Community of Programmers",
			ogDescription:
				"Register now and start your journey on FastFoodTips, a platform designed for developers to connect, learn, and grow. Unlock exclusive content and tools for your programming career.",
			ogUrl: `${WEBSITE_URL}/auth/create`,
		},
		{
			path: "/auth/verify",
			title: "FastFoodTips - Verification | Confirm Your Email",
			description:
				"Complete the verification process by confirming your email address. This step ensures the security of your account and allows you to activate your full FastFoodTips membership.",
			ogTitle: "FastFoodTips - Verification | Activate Your Account",
			ogDescription:
				"Verify your email to finish setting up your FastFoodTips account. Ensure your information is accurate and secure to start connecting with other developers on the platform.",
			ogUrl: `${WEBSITE_URL}/auth/verify`,
		},
		{
			path: "/nickname",
			title: "FastFoodTips - Choose Nickname | Personalize Your Profile",
			description:
				"Pick a unique nickname to personalize your FastFoodTips profile and make your presence known within the programming community. Stand out and easily connect with other coders.",
			ogTitle: "FastFoodTips - Choose Nickname | Customize Your Profile",
			ogDescription:
				"Select a memorable nickname to represent you on FastFoodTips. Personalizing your profile helps you create a distinctive identity within the network of programmers.",
			ogUrl: `${WEBSITE_URL}/nickname`,
		},
		{
			path: "/chat",
			title: "FastFoodTips - Chat | Connect with Programmers",
			description:
				"Join real-time discussions with fellow programmers, ask questions, exchange ideas, and collaborate on projects. FastFoodTips's chat feature is the perfect place to learn, share knowledge, and stay connected with other developers.",
			ogTitle: "FastFoodTips - Chat | Real-Time Conversations with Developers",
			ogDescription:
				"Engage with programmers from around the world in FastFoodTips's live chat. Share insights, solve coding challenges, and expand your professional network.",
			ogUrl: `${WEBSITE_URL}/chat`,
		},
		{
			path: "/settings",
			title: "FastFoodTips - Settings | Customize Your Experience",
			description:
				"Manage your account settings, privacy preferences, and notification options. Tailor your FastFoodTips experience to suit your needs and preferences as a programmer.",
			ogTitle: "FastFoodTips - Settings | Manage Your Account and Preferences",
			ogDescription:
				"Adjust your FastFoodTips settings to enhance your experience. Customize notifications, account details, and privacy settings to get the most out of the platform.",
			ogUrl: `${WEBSITE_URL}/settings`,
		},
		{
			path: "/profile",
			title: "FastFoodTips - Profile | Your Developer Identity",
			description:
				"View and update your FastFoodTips profile. Share your coding expertise, add your projects, and let others know what technologies you're passionate about. Build your personal brand within the programming community.",
			ogTitle: "FastFoodTips - Profile | Showcase Your Skills and Projects",
			ogDescription:
				"Personalize your FastFoodTips profile to showcase your achievements, share your portfolio, and make connections with like-minded developers.",
			ogUrl: `${WEBSITE_URL}/profile`,
		},
		{
			path: "*",
			title: "FastFoodTips - Page Not Found | 404 Error",
			description:
				"Oops! The page you are looking for does not exist. Please return to the homepage or contact our support team if you need assistance.",
			ogTitle: "FastFoodTips - 404 Page Not Found | Lost in Space?",
			ogDescription:
				"The page you requested couldn't be found. Go back to the home page or reach out for help if you need assistance navigating FastFoodTips.",
			ogUrl: `${WEBSITE_URL}/404`,
		},
	],
}

export { pageHelmetData, WEBSITE_URL, DEFAULT_IMAGE }