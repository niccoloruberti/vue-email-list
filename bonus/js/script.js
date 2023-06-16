'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmails: []
        }
    },
    mounted() {
        this.generateTenRandomEmails();
    },
    methods: {
        // funzione che genara 10 emails random
        generateTenRandomEmails() {
            for (let i = 1; i <= 10; i++) {
                // utilizzo la librearia axios per fare la chiamata dell'API
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                                        // inserisco la mail creata all'interno dell'array
                                        console.log(result.data.response)
                                        this.randomEmails.push(result.data.response);
                })
                };
            }
        },
}).mount('#app');

