const [handleResponse, errorLog] = require('./response-handlers')



class FetchUnit {
  constructor() {
    this.baseUrl = "https://rentmark2-backend.herokuapp.com/api/v1/units",
    this.units = []
    this.unit = {}
  }

  getUnits = () => {
    fetch(`${this.baseUrl}`)
      .then(handleResponse)
      .then((units) => this.storeUnits(units))
      .catch(errorLog)
  }

  storeUnits = (units) => {
    units.forEach(function(unit) {
      this.units.push(unit)
    })
  }

  getUnit = (id) => {
    fetch(`${this.baseUrl}/${id}`)
      .then(handleResponse)
      .then((event) => this.storeUnit(unit))
  }

  storeUnit = (unit) => {

  }

  deleteUnitUser = (unit_id, user_id) => {
    fetch(`${this.baseUrl}/${unit_id}/users/${user_id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }

  deleteUnit = (unit_id) => {
    fetch(`${this.baseUrl}/${unit_id}`, {method: "DELETE"})
      .then(handleResponse)
      .catch(errorLog)
  }

  postConfig(unitInfo) {
    return {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(unitInfo)
    }
  }

  patchConfig = (unitInfo) =>  {
    return {
      method: "PATCH",
      headers: {`Content-Type`: "application/json"},
      body: JSON.stringify(unitInfo)
    }
  }

  patchUnit(unitInfo, id) => {
    fetch(`${this.baseUrl}/${id}` , this.patchConfig(unitInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

  postUnit = (unitInfo) => {
    fetch(`${this.baseUrl}`, this.postConfig(unitInfo))
      .then(handleResponse)
      .catch(errorLog)
  }

  postUnitUser = (unit_id, user_info) => {
    fetch(`${this.baseUrl}/${unit_id}`)
      .then(handleResponse)
      .catch(errorLog)
  }
}
