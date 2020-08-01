import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-69c07.firebaseio.com/'
})