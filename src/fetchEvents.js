const [handleResponse, errorLog] = require('./response-handlers')

export const baseUrl = "https://rentmark2-backend.herokuapp.com/api/v1/events"

export const  getEvents = () => {
    return fetch(`${baseUrl}`)
      .then(handleResponse)
      .then((events) => {
        return events.map(function(e, idx){
        e.key = idx
        return e
      })})
      .catch(errorLog)
  }


export const  getEvent = (id) => {
    return fetch(`${baseUrl}/${id}`)
      .then(handleResponse)
      .catch(errorLog)
  }



export const  patchEvent = (eventInfo, id) => {
  return fetch(`${baseUrl}/${id}` , patchConfig(eventInfo))
      .then(handleResponse)
      .catch(errorLog)
  }
export const  patchConfig = (userInfo) =>  {
    return {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userInfo)
    }
  }
export const  postEvent = (eventInfo) => {
  return fetch(`${baseUrl}`, postConfig(eventInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

export const  postEventUser = (event_id, user_id, user_info) => {
return fetch(`${baseUrl}/${event_id}/users/${user_id}`)
      .then(handleResponse)
      .catch(errorLog)
  }

export const  postConfig = (eventInfo) => {
    return {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(eventInfo)
    }
  }

export const  deleteEvent = (event_id) => {
  return fetch(`${baseUrl}/${event_id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }

export const  deleteEventUser = (event_id, user_id) => {
    return fetch(`${baseUrl}/${event_id}/users/${user_id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }
