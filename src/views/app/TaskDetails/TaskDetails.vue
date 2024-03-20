<template>
    <v-row>
        <v-col>
            <div>
                {{ TaskDetails?.TaskName }}
            </div>
        </v-col>
        <v-col class="ml-8">
            <div>
                {{ TaskDetails?.RequiredTemp }}
            </div>
        </v-col class="ml-8">
        <v-col class="ml-8">
            <div>
                {{ TaskDetails?.MeasuredTemp }}
            </div>
        </v-col>
        <v-col class="ml-8">
            <td>
                <span class="tag" :class="'tag--' + TaskStatusId[TaskDetails!.TaskStatus]">
                </span>
            </td>
        </v-col>
    </v-row>

    <hr>
                            
    <v-row justify="space-between" no-gutters>

        <v-col class="v-col-12 v-col-sm">
        </v-col>

    </v-row>
    <v-row>
        <v-btn @click="SubmitAudit" 
            size="small"  block 
            class="btn btn-primary"  
            >
            Submit
        </v-btn>
    </v-row>
    
</template> 

<script setup lang="ts">
    import type { PropType } from "vue";
    import { type ITaskDetails, TaskStatusId } from '@/stores/app/TasksStore';

    const props = defineProps({
        TaskDetails:  Object as PropType<ITaskDetails>
    });

    function SubmitAudit(){
        alert('Submiting......');
    }
</script>