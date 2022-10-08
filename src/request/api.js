import request from './request'

export const RequestApi = (prarms) => request.post('/register', prarms)

export const LoginApi = (prarms) => request.post('/login', prarms)

export const ArticleListApi = (parmas) => request.get('/article', { parmas })