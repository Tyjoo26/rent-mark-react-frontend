const [handleResponse, errorLog] = require('./response-handlers')


class FetchUser {
  constructor(){
    this.users = []
    this.baseUrl = "https://rentmark2-backend.herokuapp.com/api/v1/users"
  }

  getUsers = () => {
    fetch(`${this.baseUrl}`)
      .then(handleResponse)
      .then((users) => this.storeUsers(users))
      .catch(errorLog)
  }

  storeUsers = (users) => {
    users.forEach(function(user){
      this.users.push(user)
    })
  }

  patchUser = ( userInfo , id) => {
    fetch(`${this.baseUrl}/${id}` , this.patchConfig(userInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

  patchConfig = (userInfo) =>  {
    return {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userInfo)
    }
  }

  postUser = (userInfo) => {
    fetch(`${this.baseUrl}`, this.postConfig(userInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

  postConfig(userInfo) {
    return {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(userInfo)
    }
  }

  destroyUser = (e) => {
    fetch(`${this.baseUrl}/${e.id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }
}
