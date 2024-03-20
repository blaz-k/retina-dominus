<template>
  <v-container class="sign-in-bg">

    <v-row>
        <v-col class="text-right">
			<h1 class="panel__title panel-sign-in__title text-center">

				Dominus Eye
			</h1>
        
        </v-col>
    </v-row>

    <v-row>

        <v-col class="d-flex justify-center">

            <!-- Panel Sign-in -->
            <div class="panel panel-sign-in pb-10">


                <!-- Title  -->
                <h1 class="panel__title panel-sign-in__title text-center">
                    Sign in to your account
                </h1>

                <v-form >
                                      
                  	<div class="mb-5">
                        <label class="form-label">
                            Email
                        </label>
                        <v-text-field 
                        	v-model="publicStore.Login.Email"
							:error="v$.Email.$error"
							:error-messages="v$.Email.$errors[0] != null ? v$.Email.$errors[0].$message : ''"
							variant="outlined">
                        </v-text-field>
                    </div>

                    <div class="mb-5">
                        <label class="form-label">
                            Password
                        </label>
                        <v-text-field 
							v-model="publicStore.Login.Password"
							:error="v$.Password.$error"
							:error-messages="v$.Password.$errors[0] != null ? v$.Password.$errors[0].$message : ''"
							@focus="clearPasswordErrorOnFocus()" 
							type="password" 
							variant="outlined">
                        </v-text-field>
                    </div> 

					<v-btn 
						@click="loginRetina()"
						size="x-large"  block 
						class="btn btn-primary">
                        Sign in
                    </v-btn>
     
					<router-link
						:to="{name: 'password_reset'}">
						<div >
						Forgot password?
						</div>
					</router-link>

                </v-form>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import router from '@/router';
  import { useVuelidate } from "@vuelidate/core";
  import errors from "../../../GlobalErrors";
  import { computed } from 'vue';
  import { usePublicStore } from '@/stores/public/PublicStore';

  const publicStore = usePublicStore();

  function clearPasswordErrorOnFocus(){
      v$.value.Password.$reset();
  }

  async function loginRetina(){
    await validateForm().then(() => {
            v$.value.$reset();
            router.push({name: 'dashboard_dashboard'})
        });
  }

    async function validateForm(): Promise<void> {
        v$.value.$touch();
        let formValid = await v$.value.$validate();
        return new Promise((resolve) => {
            if (formValid) {
                resolve();
            }
        });
    }

    const validationRules = computed(() => ({
        Email: {      
          required: errors.fieldRequired,
          customRequired: errors.customEmail,
        },
        Password: {
            required: errors.fieldRequired
        }
    }));

    const v$: any = useVuelidate(validationRules, publicStore.Login, { $autoDirty: true });
</script>