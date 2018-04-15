const [handleResponse, errorLog] = require('./response-handlers')

class FetchEvent {
  constructor() {
    this.events = [],
    this.baseUrl = "https://rentmark2-backend.herokuapp.com/api/v1/events"
    this.event = {}
  }

  getEvents = () => {
    fetch(`${this.baseUrl}`)
      .then(handleResponse)
      .then((events) => this.storeEvents(events))
      .catch(errorLog)
  }

  storeEvents = (events) => {
    events.forEach(function(event) {
      this.events.push(event)
    })
  }

  getEvent = (id) => {
    fetch(`${this.baseUrl}/${id}`)
      .then(handleResponse)
      .then((event) => storeEvent(event))
  }

  storeEvent = (event) => {
    if(this.event.users === undefined) {
      this.event.id = event.id,
      this.event.name = event.name,
      this.event.details = event.details,
      this.event.date = event.date
    } else {
      this.event.id = event.id,
      this.event.name = event.name,
      this.event.details = event.details,
      this.event.date = event.date,
      this.event.users = [],
      event.users.forEach(function(user){
        this.event.users.push(user)
      })
    }
  }

  patchEvent(eventInfo, id) => {
    fetch(`${this.baseUrl}/${id}` , this.patchConfig(eventInfo))
      .then(handleResponse)
      .catch(errorLog)
  }
  patchConfig = (userInfo) =>  {
    return {
      method: "PATCH",
      headers: {`Content-Type`: "application/json"},
      body: JSON.stringify(userInfo)
    }
  }
  postEvent = (eventInfo) => {
    fetch(`${this.baseUrl}`, this.postConfig(eventInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

  postEventUser = (event_id, user_info) => {
    fetch(`${this.baseUrl}/${event_id}`)
      .then(handleResponse)
      .catch(errorLog)
  }

  postConfig(eventInfo) {
    return {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(eventInfo)
    }
  }

  deleteEvent(event_id) => {
    fetch(`${this.baseUrl}/${event_id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }

  deleteEventUser(event_id, user_id) => {
    fetch(`${this.baseUrl}/${event_id}/users/${user_id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }
}
