export interface AuthType {
	email: string
	displayName?: string
	uid: string
	photoURL?: string
}

export interface UserType {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
}

export interface TAuth {
	email: string
	password: string
}
