import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    charachterList: [],
    loading: false,
    currentPage: 1,
    searchName: '',
});

export function fetchData() {
    store.loading = true;
    //axios.get('https://swapi.dev/api/people/' + '?page=' + store.currentPage)
    axios.get('https://swapi.dev/api/people/', {
        params: {
            page: store.currentPage,
            search: store.searchName,
        }
    })
        .then((resp) => {
            store.charachterList = resp.data.results;
            store.loading = false;
        })
        .catch((error) => {
            //inserire codice in caso di errore
            //console.log(error);
            store.loading = false;
        })
}