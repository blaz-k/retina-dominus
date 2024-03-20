<template>
    <tr class="table-row">
        <td>
            <v-badge>
                <v-icon icon="$vuetify" size="x-large"></v-icon>
            </v-badge>

        </td>
        <!-- <td>
            <span class="tag" :class="'tag--' + StatusReportStatusId[StatusReport!.StatusReportStatus]" >
            </span>
        </td> -->
        <td> {{ StatusReport!.StatusReportTitle }} </td>

        <td>{{ getDateCorrectedFormat(props.StatusReport!.StatusReportDate) }} </td>
        <td>08:50</td>

        <td class="">
            
            <!-- Start task btn -->
            <v-btn @click="StartTask" 
                size="small"  block 
                class="btn btn-primary"  
                >
                Start task
            </v-btn>

        </td>

    </tr>
    
</template> 

<script setup lang="ts">
    import type { PropType } from "vue";
    import router from '@/router';
    import { type IStatusReport } from '@/stores/app/StatusReports';
    import { getDateCorrectedFormat } from "../../../utils/DateFunctions";

    const props = defineProps({
        StatusReport:  Object as PropType<IStatusReport>
    });

    function StartTask(){
        alert('starting task....' + props.StatusReport?.StatusReportTitle);
        router.push({ name: "taskDetails", params: { id: props.StatusReport?.StatusReportId } });
    };

</script>