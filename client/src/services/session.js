import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";

import router from '../router';
import { Login } from './users';

const session = {
    user: null,
    messages: [],
    toRoute: '/home',

    async Login(a_Email, a_Password) {
        try {
            const response = await Login(a_Email, a_Password);

            this.user = response.user;

            router.push(this.toRoute);
        }
        catch(error) {
            this.Error(error);
        }
    },
    Error(a_error) {
        console.log(a_error);
        const msg = a_error.msg ?? a_error;

        NotificationProgrammatic.open({
            duration: 7500,
            message: msg,
            variant: 'danger',
            type: 'danger',
            closable: true
        }) 
    }
};

export default session;
