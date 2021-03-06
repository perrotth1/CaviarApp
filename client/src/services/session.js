import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";
import { GetByHandle } from "./users.js";

import router from '../router';
import { Login } from './users';

const session = {
    user: null,
    messages: [],
    toRoute: '/',

    async Login(a_handle, a_password) {
        try {
            const response = await Login(a_handle, a_password);

            console.log("Returned from users service");

            this.user = response.user;

            router.push(this.toRoute);
        }
        catch(error) {
            this.Error(error);
        }
    },
    async UpdateUser() {
        if(this.user != null) {
            this.user = await GetByHandle(this.user.userHandle);
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
