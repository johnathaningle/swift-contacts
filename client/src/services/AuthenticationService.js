import Api from './Api';

export default {
    register (credentials) {
        return Api().post('account/register', credentials);
    }
}
