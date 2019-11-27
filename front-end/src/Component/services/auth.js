//-----
// Save token to local storage
// in the key called apiKey
///-------
export const setToken = (token) =>{
 localStorage.setItem('apiKey', token)
}

//--------
// Get token from local storage
// in the key called apiKey
//-------
export const getToken = () =>{
 return localStorage.getItem('apiKey')
}

//destory token
// in the key called apiKey
export const logout = () => {
 localStorage.removeItem('apiKey')
}

export const setIsAuthenticated = (value) => {
    localStorage.setItem('authorized', value)
} 
export const getIsAuthenticated = () => {
    return localStorage.getItem('authorized')
} 