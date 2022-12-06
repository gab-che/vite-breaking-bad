import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    charachterList: [],
    loading: false,
});

export function fetchData() {
    store.loading = true;
    axios.get('https://swapi.dev/api/people/')
        .then((resp) => {
            store.charachterList = resp.data.results;
            store.loading = false;
        })
        .catch((error) => {
            //inserire codice in caso di errore
            console.log(error);
            store.loading = false;
        })
}