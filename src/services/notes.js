import axios from 'axios'
const baseurl = 'http://localhost:3001/notes'

const getAll = () => {
    return axios.get(baseurl).then(response => response.data)
}

const create = newObject => {
    return axios.post(baseurl, newObject).then(response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseurl}/${id}`, newObject).then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}