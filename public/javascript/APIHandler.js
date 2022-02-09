class APIHandler {
  constructor(baseUrl) {
    this.axiosApp = axios.create({
      baseURL: baseUrl
    })

  }

  getFullList() {
    return this.axiosApp.get('/')
  }

  getOneRegister(characterId) {
    return this.axiosApp.get(`/${characterId}`)
  }

  createOneRegister(characterInfo) {
    return this.axiosApp.post('/', characterInfo)
  }

  updateOneRegister(characterId, characterInfo) {
    return this.axiosApp.put(`/${characterId}`, characterInfo)
  }

  deleteOneRegister(characterId) {
    return this.axiosApp.delete(`/${characterId}`)

  }
}
