import api from './api';

const checkSession = () => {
    let checkSession = false;
    api.post('/check/session')
    .then(res => checkSession = res.data)
    return checkSession;
}

export { checkSession };