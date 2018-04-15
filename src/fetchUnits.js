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
    this.unit.users = [],
    unit.forEach(function(u) {
      this.unit.unit_id = unit.unit_id,
      this.unit.unit_type = unit.unit_type,
      this.unit.unit_number = unit.unit_number,
      this.unit.unit_rent = unit.unit_rent,
      this.unit.rent_due_date = unit.rent_due_date,
      this.unit.users.push(unit.user_id),
      this.unit.users.push(unit.first_name),
      this.unit.users.push(unit.last_name),
      this.unit.users.push(unit.email)
    })
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

  postUnitUser = (unit_id, user_id, user_info) => {
    fetch(`${this.baseUrl}/${unit_id}/users/${user_id}`)
      .then(handleResponse)
      .catch(errorLog)
  }
}
