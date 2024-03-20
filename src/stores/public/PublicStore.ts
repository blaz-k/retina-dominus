import { defineStore } from "pinia";
import router from "@/router";

export interface ILoginForm{
    Email: string;
    Password: string;
}

export interface IPublicHelpres {
    LoginValid: boolean;
    LoginError: string;
}

interface IPublicState{
    Login: ILoginForm;
    PublicHelpers: IPublicHelpres;
}

export const usePublicStore = defineStore('public', {
    state: (): IPublicState => {
        return {
            Login: {
                Email: "",
                Password: "",
            },
            PublicHelpers: {
                LoginValid: false,
                LoginError: ""
            }
        }
    },
    actions: {
        async userLogin() {
            router.push({name: 'dashboard_dashboard'})
            // return new Promise((resolve, reject) => {
            //     const loginComplete = (Message: any): void => {
            //         if (Message.loginValid === true) {
            //             this.login.loginValid = true;
            //             sessionStorage.setItem("authToken", Message.authToken);
            //             router.push("/app");
            //             resolve("Success");
            //         } else {
            //             this.login.password = "";
            //             this.login.loginError = Message.loginError;
            //             // reject(Error("Napačno uporabniško ime in/ali geslo."));
            //             this.login.loginValid = false;
            //         }
            //     };
    
            //     commClient.executeMethod("Login",
            //         {
            //             Username: this.login.username,
            //             Password: this.login.password,
            //             AppVer: SummitVersion
            //         },
            //         loginComplete);
            // });
        },
    },
});