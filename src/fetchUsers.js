export const [handleResponse, errorLog] = require('./response-handlers')

export const url = "https://rentmark2-backend.herokuapp.com/api/v1/units"

export const baseUrl = "https://rentmark2-backend.herokuapp.com/api/v1/users"

export const getUsers = () => {
    return fetch(`${url}`)
      .then(handleResponse)
      .then((users) => {
        return users.map(function(user, idx) {
          user.key = idx
          return user
        })
      })
      .catch(errorLog)
  }

export const showUser = (id) => {
  return fetch(`${baseUrl}/${id}`)
    .then(handleResponse)
    .catch(errorLog)
}

export const patchUser = ( userInfo , id) => {
    fetch(`${baseUrl}/${id}` , patchConfig(userInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

export const patchConfig = (userInfo) =>  {
    return {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userInfo)
    }
  }

export const  postUser = (userInfo) => {
    fetch(`${baseUrl}`, postConfig(userInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

export const postConfig = (userInfo) => {
    return {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(userInfo)
    }
  }

export const  destroyUser = (e) => {
    fetch(`${baseUrl}/${e.id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }
