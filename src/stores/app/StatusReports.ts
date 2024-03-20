import { defineStore } from "pinia";

export interface IStatusReport {
    StatusReportId: number;
    StatusReportTitle: string;
    StatusReportDate: string;
    StatusReportStatus: StatusReportStatusId;
}

// export interface ITaskDetails {
//     TaskId: number;
//     TaskName: string;
//     RequiredTemp: number | null;
//     MeasuredTemp: number | null;
//     TaskStatus: StatusReportStatusId;
// }

export enum StatusReportStatusId {
    AllPass = 1,
    Failed = 2,
}

interface IStatusReportsState{
    AllStatusReport: IStatusReport[];
}

export const useStatusReportsStore = defineStore("statusReportsStore", {
    state: (): IStatusReportsState => {
        return {
            AllStatusReport: [],         
        }
    },
    actions: {
        // async getAllStatusReports() {
        //     const getComplete = (Message: any): void => {
        //         if (Message) { 
        //             this.AllTasks = Message as IStatusReports[];
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