<template>
    <tr class="table-row">
        <td>
            <v-badge>
                <v-icon icon="$vuetify" size="x-large"></v-icon>
            </v-badge>
        </td>

        <td> {{ Report!.ReportTitle }} </td>

        <td class="">
            
            <!-- open report -->
            <v-btn @click="OpenReport" 
                size="small"  block 
                class="btn btn-primary"  
                >
                Open report
            </v-btn>

        </td>

    </tr>
    
</template> 

<script setup lang="ts">
    import type { PropType } from "vue";
    import router from '@/router';
    import type { IReport } from "@/stores/app/AllReportsStore";

    const props = defineProps({
        Report:  Object as PropType<IReport>
    });

    function OpenReport(){
        alert('opening report....');
        router.push({ name: "taskDetails", params: { id: props.Report?.ReportId } });

    }

</script>