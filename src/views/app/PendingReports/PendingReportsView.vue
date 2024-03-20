<!-- eslint-disable vue/valid-v-for -->
<template>
    <v-container class="container-contracts">
        <v-row>
            <v-col>

                <div class="panel__title">
                    Pending reports
                </div>

                <hr/>

                <div class="table-contracts-wrap">
                    <table class="table-contracts table-contracts--placane">
                        <!-- Table content -->
                        <PendingReport v-for="report in allReports" :Report="report"
                        />

                    </table>
                </div>

            </v-col>
        </v-row>
        <v-btn
            @click="UpcomingReports"   
            size="x-large"  block 
            class="btn btn-primary"  
            >
                More upcoming reports
        </v-btn>
    </v-container>
</template> 

<script setup lang="ts">
    import PendingReport from './PendingReport.vue';
    import { type ITask, TaskStatusId } from '@/stores/app/TasksStore';

    const allReports: ITask[] = [
        {
            TaskId: 1,
            TaskTitle: "HACCP retail unit review template",
            TaskDate: "November 9, 2024 03:24:00",
            TaskStatus: TaskStatusId.Pending
        },
        {
            TaskId: 2,
            TaskTitle: "HACCP Bi-daily critical control template",
            TaskDate: "November 9, 2024 03:24:00",
            TaskStatus: TaskStatusId.Pending
        },
        {
            TaskId: 3,
            TaskTitle: "HACCP Daily production record template",
            TaskDate: "November 9, 2024 03:24:00",
            TaskStatus: TaskStatusId.Finished
        },
        {
            TaskId: 4,
            TaskTitle: "Weekly AC Check",
            TaskDate: "November 9, 2024 03:24:00",
            TaskStatus: TaskStatusId.Failed
        },
    ];

    function UpcomingReports(){
        alert('Loading more upcoming tasks')
        //@bkmetic @emislej  -- kliči metodo ki jih nalouda več
    }
</script>

<style lang="scss">

.panel__title {
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 30px;
}

.table-contracts-wrap {
    max-height: calc(100vh - 500px);
    overflow-y: auto;
    margin-top: 15px;
    
}

.table-contracts {
    width: 100%;
    border-spacing: 0 15px;
    
    th {
        color: #A8ADB6;
        font-size: 13px;
        font-weight: 500;
        text-align: left;
        padding: 15px 15px;
        position: sticky;
        top: 0;
        background-color: white;
        white-space: nowrap;
        z-index: 100;
    }
    
    td {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        padding: 15px 15px;
        height: 72px;
        border-top: 1px solid #CED4DA;
        border-bottom: 1px solid #CED4DA;
        cursor: pointer;
        vertical-align: middle; 
    }
    
    tr:hover td {
        background-color: lighten(#EEF1F4, 3%);
    }
    
}

.table-contracts--v-obdelavi,
.table-contracts--placane {
    td {
        &:nth-child(4n) {
            white-space: nowrap;
        }

        &:nth-child(5n) {
            white-space: nowrap;
        }

        &:nth-child(10n) {
            border-right: 1px solid #CED4DA;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        
        &:nth-child(10n + 1) {
            border-left: 1px solid #CED4DA;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
    }
}

.table-contracts--stats {
    td {
        &:nth-child(4n) {
            white-space: nowrap;
        }

        &:nth-child(5n) {
            white-space: nowrap;
        }

        &:nth-child(9n) {
            border-right: 1px solid #CED4DA;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        
        &:nth-child(9n + 1) {
            border-left: 1px solid #CED4DA;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
    }
}
.tag--Pending {
    background-color: #F5C342;
    color: #505035;
    border: 1px solid #F5C342;
    display: block;
    border-radius:50%;
    height: 30px;
    width: 30px;
}
.tag--Failed {
    background-color: #EA3323;
    color: #090808;
    border: 1px solid #EA3323;
    display: block;
    border-radius:50%;
    height: 30px;
    width: 30px;
}
.tag--Finished {
    background-color: #45B501;
    color: #000000;
    border: 1px solid #45B501;
    display: block;
    border-radius:50%;
    height: 30px;
    width: 30px;
}
// .tag--Pending {
//     background-color: #F0F7C4;
//     color: #9EB706;
//     display: block;
// }

// .tag--Finished {
//     background-color: #CDEABB;
//     color: #45B501;
//     display: block;
// }

// .tag--Failed {
//     background-color: #fff;
//     color: #cc0909;
//     border: 1px solid #DCE3E7;
//     display: block;
// }

</style>./PendingReport.vue