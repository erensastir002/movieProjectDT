<template>
<div class="home">
    <div class="img-container">
        <div class="feature-card">
            <router-link to="/movie/tt1375666">
                <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg" alt="matrix poster" class="featured-img" />
                <div class="detail">
                    <h3>Inception</h3>
                    <p>2010</p>
                </div>
            </router-link>
        </div>

        <div class="feature-card">
            <router-link to="/movie/tt10872600">
                <img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.7273_AL_.jpg" alt="matrix poster" class="featured-img" />
                <div class="detail">
                    <h3>Spiderman No Way Home</h3>
                    <p>2021</p>
                </div>
            </router-link>
        </div>

        <div class="feature-card">
            <router-link to="/movie/tt0468569">
                <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.7273_AL_.jpg" alt="matrix poster" class="featured-img" />
                <div class="detail">
                    <h3>The Dark Knight</h3>
                    <p>2008</p>
                </div>
            </router-link>
        </div>

        <div class="feature-card">
            <router-link to="/movie/tt0133093">
                <img src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6751_AL_.jpg" alt="matrix poster" class="featured-img" />
                <div class="detail">
                    <h3>The Matrix</h3>
                    <p>1999</p>
                </div>
            </router-link>
        </div>
    </div>

    <div class="MiddlePart">

        <form @submit.prevent="SearchMovies()" class="search-box">
            
          <input type="text" placeholder="What are you looking for ?" v-model="search" />
          
          <div class="buttons3-try"> 
             <input type="submit" value="Search">  

             <router-link to="/topview">
             <button class="top250-button">TOP 250</button>
             </router-link>

             <router-link to="/ComingView">
             <button class="comingSoon-button">COMING SOON</button>
             </router-link>

          </div>
        </form>

  

    </div>

    <div class="movies-list">
        <div class="movie" v-for="movie in movies" :key="movie.id">
            <router-link :to="'/movie/' + movie.id" class="movie-link">
                <div class="product-image">
                    <img :src="movie.image" alt="Movie Poster" />
                    <div class="type">{{movie.type}}</div>
                </div>
                <div class="detail">
                    <p class="year">{{movie.description}}</p>
                    <h3>{{movie.title}}</h3>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

import {
    ref
} from 'vue';

export default {
    setup() {

        const search = ref("");

        const movies = ref([]);

        const SearchMovies = () => {

            if (search.value != "") {

                fetch(`https://imdb-api.com/en/API/SearchMovie/k_a2kxta69/${search.value}`)

                    .then(response => response.json())

                    .then(data => {

                        movies.value = data.results;

                        search.value = "";

                        console.log(data);

                    });

            }

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
.home {
    .img-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .feature-card {
            position: relative;

            .featured-img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                padding-right: 10px;
                padding-left: 10px;

                position: relative;
                z-index: 0;
            }

            .detail {
                position: absolute;
                left: 10px;
                right: 10px;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                padding: 16px;
                z-index: 1;

                h3 {
                    color: white;
                    margin-bottom: 16px;
                }

                p {
                    color: white;
                }
            }
        }
    }

    .MiddlePart {
        display: grid;
        grid-template-columns: 1fr ;
        cursor: pointer;
    

    .top250-button {
        width: 100%;
        max-width: 300px;
        background-color: #1a529b;
        padding: 16px;
        border-radius: 8px;
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        margin-top: 6px;
        border-style: none;

    }

    .comingSoon-button {
        width: 100%;
        max-width: 300px;
        background-color: #6a21bd;
        padding: 16px;
        border-radius: 8px;
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        margin-top: 6px;
        border-style: none;
    }

    .search-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;

        input {
            display: block;
            appearance: none;
            border: none;
            outline: none;
            background: none;

            &[type="text"] {
                width: 100%;
                color: white;
                background-color: #496583;
                font-size: 20px;
                padding: 10px 16px;
                border-radius: 8px;
                margin-bottom: 15px;
                transition: 0.4s;

                &::placeholder {
                    color: #f3f3f3;
                }

                &:focus {
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
                }
            }

            &[type="submit"] {
                width: 100%;
                max-width: 300px;
                background-color: #42B883;
                padding: 16px;
                border-radius: 8px;
                color: white;
                font-size: 20px;
                text-transform: uppercase;
                transition: 0.4s;

                &:active {
                    background-color: #388070;
                }
            }
        }
    }
}
}

        .movies-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

        .movie {
            padding: 16px 8px;

            .movie-link {
                display: flex;
                flex-direction: column;
                height: 100%;

                .product-image {

                    position: relative;
                    display: block;

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    
                }

                .detail {
                    background-color: #496583;
                    padding: 16px 8px;
                    flex: 1 1 100%;
                    border-radius: 0px 0px 8px 8px;

                    .year {
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
