import router from '../router';

import { Login } from './users';

const session = {
    user: null,

    messages: [],

    toRoute: '/',

    Login(aEmail, aPassword) {

        const response = Login(aEmail, aPassword);

        this.user = response.user;

        router.push(this.toRoute);
    }

}

export default session;
