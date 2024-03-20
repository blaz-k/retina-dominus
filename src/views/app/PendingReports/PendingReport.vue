<template>
    <tr class="table-row">
        <td>
            <v-badge>
                <v-icon icon="$vuetify" size="x-large"></v-icon>
            </v-badge>

        </td>
        <td>
            <span class="tag" :class="'tag--' + TaskStatusId[Report!.TaskStatus]" >
            </span>
        </td>
        <td> {{ Report!.TaskTitle }} </td>

        <td>{{ getDateCorrectedFormat(props.Report!.TaskDate) }} </td>
        <td>08:50</td>

        <td class="">
            
            <!-- Start task btn -->
            <v-btn 
                @click="SpecificReport" 
                size="small"  block 
                class="btn btn-primary"  
                >
                Start report
            </v-btn>

        </td>

    </tr>
    
</template> 

<script setup lang="ts">
    import type { PropType } from "vue";
    import router from '@/router';
    import { type ITask, TaskStatusId } from '@/stores/app/TasksStore';
    import { getDateCorrectedFormat } from "../../../utils/DateFunctions";

    const props = defineProps({
        Report:  Object as PropType<ITask>
    });

    function SpecificReport() {
        alert('starting report....' + props.Report?.TaskTitle)
        router.push({ name: "taskDetails", params: { id: props.Report?.TaskId } })
    }
</script>