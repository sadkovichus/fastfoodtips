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
			title: "UsefulPeople - Home Page | Marketplace for Online Goods",
			description:
				"Welcome to UsefulPeople, the perfect platform created for you to make money from your work. Create, sell, develop, and we will help you with this! We always welcome new people, with love Usefulpeople!",
			ogTitle: "UsefulPeople - Home Page | Connect, Learn, Collaborate",
			ogDescription: "Explore UsefulPeople, a platform where people from all over the world post their creations.Explore them, participate in competitions and be active. Join us today!",
			ogImage: "favicon.ico",
			ogUrl: `${WEBSITE_URL}/`,
		},
		{
			path: "/auth",
			title: "UsefulPeople - Sign In | Access Your Account",
			description: "Login to your UsefulPeople account to access your personalized profile, connect with others, and take advantage of exclusive features.",
			ogTitle: "UsefulPeople - Sign In | Join the Marketplace",
			ogDescription:
				"Log in to your UsefulPeople account to stay connected with the global community of programmers, manage your projects, and engage in meaningful technical discussions.",
			ogUrl: `${WEBSITE_URL}/auth`,
		},
		{
			path: "/auth",
			title: "UsefulPeople - Sign Up | Create Your Account",
			description:
				"Sign up for UsefulPeople to become a part of a dynamic network of developers. Personalize your profile, access tutorials, and engage with experts in coding and programming.",
			ogTitle: "UsefulPeople - Sign Up | Join the Community of Programmers",
			ogDescription:
				"Register now and start your journey on UsefulPeople, a platform designed for developers to connect, learn, and grow. Unlock exclusive content and tools for your programming career.",
			ogUrl: `${WEBSITE_URL}/auth`,
		},
		{
			path: "/verification",
			title: "UsefulPeople - Verification | Confirm Your Email",
			description:
				"Complete the verification process by confirming your email address. This step ensures the security of your account and allows you to activate your full UsefulPeople membership.",
			ogTitle: "UsefulPeople - Verification | Activate Your Account",
			ogDescription:
				"Verify your email to finish setting up your UsefulPeople account. Ensure your information is accurate and secure to start connecting with other developers on the platform.",
			ogUrl: `${WEBSITE_URL}/verification`,
		},
		{
			path: "/nickname",
			title: "UsefulPeople - Choose Nickname | Personalize Your Profile",
			description:
				"Pick a unique nickname to personalize your UsefulPeople profile and make your presence known within the programming community. Stand out and easily connect with other coders.",
			ogTitle: "UsefulPeople - Choose Nickname | Customize Your Profile",
			ogDescription:
				"Select a memorable nickname to represent you on UsefulPeople. Personalizing your profile helps you create a distinctive identity within the network of programmers.",
			ogUrl: `${WEBSITE_URL}/nickname`,
		},
		{
			path: "/chat",
			title: "UsefulPeople - Chat | Connect with Programmers",
			description:
				"Join real-time discussions with fellow programmers, ask questions, exchange ideas, and collaborate on projects. UsefulPeople's chat feature is the perfect place to learn, share knowledge, and stay connected with other developers.",
			ogTitle: "UsefulPeople - Chat | Real-Time Conversations with Developers",
			ogDescription:
				"Engage with programmers from around the world in UsefulPeople's live chat. Share insights, solve coding challenges, and expand your professional network.",
			ogUrl: `${WEBSITE_URL}/chat`,
		},
		{
			path: "/settings",
			title: "UsefulPeople - Settings | Customize Your Experience",
			description:
				"Manage your account settings, privacy preferences, and notification options. Tailor your UsefulPeople experience to suit your needs and preferences as a programmer.",
			ogTitle: "UsefulPeople - Settings | Manage Your Account and Preferences",
			ogDescription:
				"Adjust your UsefulPeople settings to enhance your experience. Customize notifications, account details, and privacy settings to get the most out of the platform.",
			ogUrl: `${WEBSITE_URL}/settings`,
		},
		{
			path: "/profile",
			title: "UsefulPeople - Profile | Your Developer Identity",
			description:
				"View and update your UsefulPeople profile. Share your coding expertise, add your projects, and let others know what technologies you're passionate about. Build your personal brand within the programming community.",
			ogTitle: "UsefulPeople - Profile | Showcase Your Skills and Projects",
			ogDescription:
				"Personalize your UsefulPeople profile to showcase your achievements, share your portfolio, and make connections with like-minded developers.",
			ogUrl: `${WEBSITE_URL}/profile`,
		},
		{
			path: "*",
			title: "UsefulPeople - Page Not Found | 404 Error",
			description:
				"Oops! The page you are looking for does not exist. Please return to the homepage or contact our support team if you need assistance.",
			ogTitle: "UsefulPeople - 404 Page Not Found | Lost in Space?",
			ogDescription:
				"The page you requested couldn't be found. Go back to the home page or reach out for help if you need assistance navigating UsefulPeople.",
			ogUrl: `${WEBSITE_URL}/404`,
		},
	],
}

export { pageHelmetData, WEBSITE_URL, DEFAULT_IMAGE }