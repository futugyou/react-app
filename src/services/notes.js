import axios from 'axios'
const baseurl = 'http://localhost:3001/api/notes'

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    return axios.get(baseurl).then(response => response.data)
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseurl, newObject, config)
    return response.data
}

const update = async (id, newObject) => {
    const response = await axios.put(`${baseurl}/${id}`, newObject)
    return response.data
}
// eslint-disable-next-line
export default {
    getAll: getAll,
    create: create,
    update: update,
    setToken: setToken,
}