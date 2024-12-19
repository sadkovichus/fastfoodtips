export const emailValidation = {
	// required: "Email field cannot be empty",
	minLength: {
		value: 3,
		message: "Email must be at least 3 letters long",
	},
	maxLength: {
		value: 36,
		message: "Email should be shorter",
	},
	validate: {
		validFormat: (value: string) => {
			// Исправленное регулярное выражение для корректной валидации email
			const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			return emailPattern.test(value) || "Invalid email format"
		},
	},
}

export const passwordValidation = {
	// required: "Password field cannot be empty",
	minLength: {
		value: 3,
		message: "Password must be at least 3 letters long",
	},
	maxLength: {
		value: 36,
		message: "Password should be shorter",
	},
	validate: {
		noRussianLetters: (value: string) =>
			!/[ЁА-яё]/.test(value) || "The password must not contain Russian letters",
		hasUpperCase: (value: string) =>
			/[A-Z]/.test(value) || "The password must contain at least one capital letter",
		hasNumber: (value: string) =>
			/\d/.test(value) || "The password must contain at least one number.",
	},
}

export const nicknameValidation = {
	// required: "Nickname field cannot be empty",
	minLength: {
		value: 3,
		message: "Nickname must be at least 3 letters long",
	},
	maxLength: {
		value: 36,
		message: "Nickname should be shorter",
	},
	validate: {
		notEmpty: (value: string) =>
			value.trim() !== "" || "Nickname cannot be empty", // проверка на пустоту
	},

}
