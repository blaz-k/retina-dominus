import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios"

export interface ILoginForm{
    StoreId: string;
    Password: string;
}

export interface IEmployeeCheckIn{
    EmployeeIdInternal: string;
    Name: string;
}

export interface IPublicHelpres {
    LoginValid: boolean;
    LoginError: string;
}

interface IPublicState{
    Login: ILoginForm;
    PublicHelpers: IPublicHelpres;
    // storeId: string;
    // password: string;
    EmployeeCheckIn: IEmployeeCheckIn;
}

export const usePublicStore = defineStore('public', {
    state: (): IPublicState => {
        return {
            Login: {
                StoreId: "",
                Password: "",
            },
            PublicHelpers: {
                LoginValid: false,
                LoginError: ""
            },
            EmployeeCheckIn: {
                EmployeeIdInternal: "",
                Name: ""
            }
        }
    },
    actions: {
        async userLogin() {
            router.push({name: 'dashboard_dashboard'})
            
        },
        // storeId

        async StoreLogin() {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZUlkIjoiMSIsImlhdCI6MTcxMjUxOTAzNiwiZXhwIjoxNzEyNTI5ODM2fQ.7QayuUg7diD3ZSooKHV_yHqkf4wL7S3yJS166wKl43o';

            try {
                const data = await axios.get('http://localhost:5001/employees/checked-in',{ 
                    headers: {
                      'Authorization': 'Bearer ' + token
                    } 
                  }

                )
                this.EmployeeCheckIn = data.data
            }
                catch (error) {
                    alert(error)
                    console.log(error)
            }
        },

        //tole gre v APP STORE
        async fetchUsers() {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZUlkIjoiMSIsImlhdCI6MTcxMjUxNzc3MiwiZXhwIjoxNzEyNTI4NTcyfQ.BqhTOGVZACt7sdiAgCnwe-2dr6ZxdixTkeJ3DgVslzM';

            try {
                const data = await axios.get('http://localhost:5001/employees',{ 
                    headers: {
                      'Authorization': 'Bearer ' + token
                    } 
                  }

                )
                this.Login = data.data
                }
                catch (error) {
                    alert(error)
                    console.log(error)
            }
        }
        
    },
});