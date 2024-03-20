<template>

    <v-container class="content-container">
        <PendingReportsView />
        <StatusReportsView />
        <AllReportsView/> 
       
    </v-container>

</template>

<script setup lang="ts">
    import PendingReportsView from '../PendingReports/PendingReportsView.vue';
    import AllReportsView from '../AllReports/AllReportsView.vue';
    import StatusReportsView from '../StatusReports/StatusReportsView.vue';
</script>