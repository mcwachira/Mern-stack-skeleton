
//create user  
//method POST

const createUser = async(user) => {

	 try{
		const response=  await fetch('/api/users/', {
			method:'POST',
			headers : {
				'Accept':'application/json',
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		})

		return await response.json()

	 }catch(error){
		console.log('error', error)
	 }
}



//fetch users 
//method GET

const fetchUsers = async () => {

	try {
		const response = await fetch('/api/users/', {
			method: 'GET',
		})

		return await response.json()

	} catch (error) {
		console.log('error', error)
	}
}

//fetch user by Id
//method GET

const fetchUserById = async (params, credentials) => {

	try {
		const response = await fetch('/api/users/' + params.usedId, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + credentials.t
			}
		})

		return await response.json()

	} catch (error) {
		console.log('error', error)
	}
}


//update user by Id
//method PUT

const updateUser = async (params, credentials , user) => {

	try {
		const response = await fetch('/api/users/' + params.usedId, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + credentials.t
			},
			body: JSON.stringify(user)
		})

		return await response.json()

	} catch (error) {
		console.log('error', error)
	}
}

//delete user
//method PUT

const deleteUser = async (params, credentials) => {

	try {
		const response = await fetch('/api/users/' + params.usedId, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + credentials.t
			}
		})

		return await response.json()

	} catch (error) {
		console.log('error', error)
	}
}

export {
	createUser,
	fetchUsers,
	fetchUserById,
	updateUser,
	deleteUser
}