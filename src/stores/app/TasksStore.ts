import { defineStore } from "pinia";

export interface IEsignature{
    DisableSignature: boolean;
}

export interface ITask {
    TaskId: number;
    TaskTitle: string;
    TaskDate: string;
    TaskStatus: TaskStatusId;
}

export interface ITaskDetails {
    TaskId: number;
    TaskName: string;
    RequiredTemp: number | null;
    MeasuredTemp: number | null;
    TaskStatus: TaskStatusId;
    AuditRecivedBy: string; //verjento IKeyValue??? @Enej
    ERN: string;
    DigitalSignature: string;
}

export enum TaskStatusId {
    Finished = 1,
    Pending = 2,
    Failed = 3,
}

interface ITaskState{
    TaskDetails: ITaskDetails;
    AllTasks: ITask[];
}

export const useTaskStore = defineStore("taskStore", {
    state: (): ITaskState => {
        return {
            AllTasks: [],
            TaskDetails: {
                TaskId: -1,
                TaskName: "",
                RequiredTemp: null,
                MeasuredTemp: null,
                TaskStatus: TaskStatusId.Pending,
                AuditRecivedBy: "",
                ERN: "",
                DigitalSignature: "",
            },              
        }
    },
    actions: {
        // async getAllTasks() {
        //     const getComplete = (Message: any): void => {
        //         if (Message) { 
        //             this.AllTasks = Message as ITask[];
        //         } 
        //         else {
        //             console.log("nek error")
        //         }
        //     };

        //     commClient.executeMethod("sf.PogodbaListPlacane", {

        //     }, getComplete);
        // },

    },
});