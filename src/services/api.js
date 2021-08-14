const params = {
    headers: {
        Accept: 'application;json',
        'Content-type': 'application/json'
    }
}

const URL = 'https://stormy-brook-79548.herokuapp.com/api'

function getNews(subject) {
    return fetch(`${URL}/${subject}`, params)
        .then(res => res.json())
        .catch((err) => console.log(err))
}

function getNewsById(subject, id) {
    return fetch(`${URL}/${subject}/${id}`, params)
        .then(res => res.json())
        .catch((err) => console.log(err))
}

export default {
    getNews,
    getNewsById
}