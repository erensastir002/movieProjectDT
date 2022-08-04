<template>
<div class="movie-detail">
    <h2>{{movie.fullTitle}}</h2>
    <p>{{ movie.year}}</p>
 <img :src="movie.image" alt="Movie Poster" class="featured-img" />
  <p> {{movie.plot}}</p>
</div>
</template> 

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup () {
        const movie = ref({});
        const route = useRoute();

        onBeforeMount(() => {
            fetch(`https://imdb-api.com/en/API/Title/k_a2kxta69/${route.params.id}`)
            .then(response => response.json())
            .then(data => {
                movie.value = data;

                console.log(data);
            });
        });

        return {
            movie
        }
    }

}
</script>

<style lang="scss">
.movie-detail {
    padding: 16px;

    h2 {
        color: white;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .featured-img {
        display: block;
        max-width: 200px;
        margin-bottom: 16px;
    }

    p {
        color: rgb(255, 255, 255);
        font-size: 18px;
        line-height: 1.4;
    }
}

</style>