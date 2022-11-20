import { signOut } from "./auth"


//save jwt credentials in session storage

const authenticate = (jwt, cb) => {

    if(typeof window !== 'undefined')
    sessionStorage.setItem('jwt', JSON.stringify(jwt))
}

//retrieve jwt credentials

const isAuthenticated = (jwt, cb) => {

    if (typeof window === 'undefined')
      return false

      if(sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
      else{
        return false
      }
}

//deleting  jwt credentials

const clearJwt = (cb) => {
    if(typeof window !== 'undefined')
    sessionStorage.removeItem('jwt')
    cb()
    signOut.then((data) => {
        // document.cookie = "t=; expires=Thu, 01 Jan 1970 00: 00: 00
        // UTC; path = /;"
        console.log(data)
    })
}

export {authenticate, isAuthenticated,clearJwt}