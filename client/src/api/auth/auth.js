
//sign in 
//method POST

const signIn = async (user) => {

	try {
		const response = await fetch('/auth/signin/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		})

		return await response.json()

	} catch (error) {
		console.log('error', error)
	}
}


//sign out
//method GET

const signOut = async (user) => {

	try {
		const response = await fetch('/auth/signout/', {
			method: 'GET',
			
		})

		return await response.json()

	} catch (error) {
		console.log('error', error)
	}
}


export { signIn, signOut};
