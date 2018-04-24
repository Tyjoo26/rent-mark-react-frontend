const [handleResponse, errorLog] = require('./response-handlers')


export const baseUrl = "https://rentmark2-backend.herokuapp.com/api/v1/units"

export const getUnits = () => {
  return fetch(`${baseUrl}`)
    .then(handleResponse)
    .then((units) => {
      return units.map(function(unit, idx) {
      unit.key = idx
      return unit
    })
  })
    .catch(errorLog)
}

export const ShowUnit = (id) => {
    return fetch(`${baseUrl}/${id}`)
      .then(handleResponse)
      .catch(errorLog)
  }

export const deleteUnitUser = (unit_id, user_id) => {
    return fetch(`${baseUrl}/${unit_id}/users/${user_id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }

export const deleteUnit = (unit_id) => {
  return  fetch(`${baseUrl}/${unit_id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }

export const postConfig = (unitInfo) => {
    return {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(unitInfo)
    }
  }

export const  patchConfig = (unitInfo) =>  {
    return {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(unitInfo)
    }
  }

export const  patchUnit = (unitInfo, id) => {
  return  fetch(`${baseUrl}/${id}` , patchConfig(unitInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

export const  postUnit = (unitInfo) => {
  return  fetch(`${baseUrl}`, postConfig(unitInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

export const  postUnitUser = (unit_id, user_id, user_info) => {
  return  fetch(`${baseUrl}/${unit_id}/users/${user_id}`)
      .then(handleResponse)
      .catch(errorLog)
  }
