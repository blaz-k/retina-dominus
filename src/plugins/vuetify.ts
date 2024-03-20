// Styles
// import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
// import '@/app/styles/main.scss';

import { mdi } from "vuetify/iconsets/mdi";
// import { customSVGs } from "../assets/customSvgs";

// Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';

export default createVuetify({
    // theme: false,
    components,
    directives,
    defaults: {
        VBtn: {
            // class: 'btn-primary',
        },
        VCard: {
            // style: 'border-radius: 10px',
        }
    },
    icons: {
        defaultSet: "mdi",
        sets: {
          mdi,
        //   custom: customSVGs,
        },
      },
})
