<template>
    <div class="moviess-list">
        <div class="movies" v-for="movie in movies" :key="movie.id">
            <router-link :to="'/movie/' + movie.id" class="movies-link">
                <div class="products-image">
                    <img :src="movie.image" alt="Movie Poster" />
                </div>

                <div class="details">
                <p class="years">{{movie.description}}</p>
                <h3>{{movie.title}}</h3> 
                <h3>{{movie.year}}</h3>
                <h3>{{movie.releaseState}}</h3>
                </div>
                
            </router-link>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import {
    ref
} from 'vue';

export default {
    created() {
        this.SearchMovies();        
    },

    setup() {

        const search = ref("");

        const movies = ref([]);

        const SearchMovies = () => {

            

                fetch(`https://imdb-api.com/en/API/ComingSoon/k_a2kxta69`)

                    .then(response => response.json())

                    .then(data => {

                        movies.value = data.items;

                        search.value = "";

                        console.log(data);

                    });

            

        }

        return {

            search,

            movies,

            SearchMovies

        }

    }
}
</script>

<style lang="scss"> 

      .moviess-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

        .movies {
            padding: 16px 8px;

            .movies-link {
                display: flex;
                flex-direction: column;
                height: 100%;

                .products-image {

                    position: relative;
                    display: block;

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    
                }

                .details {
                    background-color: #496583;
                    padding: 16px 8px;
                    flex: 1 1 100%;
                    border-radius: 0px 0px 8px 8px;

                    .years {
                        color: #AAA;
                        font-size: 14px;
                    }

                    h3 {
                        color: white;
                        font-weight: 600;
                        font-size: 18px;
                    }
                }
            }
        }
    }


</style>
