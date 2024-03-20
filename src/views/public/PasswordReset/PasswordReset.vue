<template>

    <div class="mb-10">
        <h1>
            Password reset
        </h1>
    </div>

    <div class="mb-8">

        <div>
            <v-row justify="space-between" no-gutters>
                <v-col>

                    <div class="mb-2">
                        <label class="form-label">
                            New password
                        </label>
                        <v-text-field                             
                            variant="outlined"
                            type="password"
                            >
                        </v-text-field >

                    </div>
                </v-col>

            </v-row>

            <v-row justify="space-between" no-gutters>
                <v-col>

                    <div class="mb-2">
                        <label class="form-label">
                            Repeat password
                        </label>
                        <v-text-field 
                            variant="outlined"
                            type="password"
                            >
                        </v-text-field>

                    </div>
                </v-col>

            </v-row>

        </div>
       
        <v-row justify="space-between" no-gutters>
            <!-- Panel footer -->
            <div class="panel__footer text-right">                        
                <v-btn 
                    @click="nextPage()"
                    block
                    class="text-none"
                    color="grey-lighten-3"
                    size="x-large"
                    variant="flat"
                    >
                        Set password
                </v-btn>
            </div>
        </v-row>
        <router-link
            :to="{name: 'sign_in'}">
            <div >
                Back
            </div>
        </router-link>

    </div>
    
</template>

<script setup lang="ts">

    function nextPage(){
        alert('novo geslo nastavljeno')
    }

</script>