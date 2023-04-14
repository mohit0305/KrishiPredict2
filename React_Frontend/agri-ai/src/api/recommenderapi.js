import axios from "axios"

export default axios.create({
    baseURL:" https://mk-1-flask.onrender.com/",
    headers: { "Content-Type": "multipart/form-data" },
})