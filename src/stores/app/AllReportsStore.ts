import { defineStore } from "pinia";

export interface IReport {
    ReportId: number;
    ReportTitle: string; 
}

interface IReportState{
    // Report: IReport;
    AllReports: IReport[];
}

export const useReportStore = defineStore("reportStore", {
    state: (): IReportState => {
        return {
            AllReports: [],
            // Report: {
            //     ReportId: -1,
            //     ReportTitle: "",
            // },              
        }
    },
    actions: {
        // async getAllReports() {
        //     const getComplete = (Message: any): void => {
        //         if (Message) { 
        //             this.AllReports = Message as ITask[];
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