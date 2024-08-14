import {IMovieData } from "@/models/IMovie"

const baseURL: string = 'https://api.themoviedb.org/3'

const urls ={
    allMovies:'/discover/movie',
    // movieById:'/movie',
    // genres:'/genre/movie/list',
    // searchByName:'/search/movie'
}

const posterURL = 'https://image.tmdb.org/t/p/w500'

const token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzliYWNlZGExMzc3Yzc2MDUxNjQwNjVlZWMyMWNhYSIsInN1YiI6IjYzNGEwOGJjZjE3NTljMDA3ZmMwMDkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0bWxWpgdFYwdUojerArBVJrlu286XhRaK0fZhzPbl58'

const apiService = {
    getAllMovies: async (page: string): Promise<IMovieData[]> => {
        const movieData = await fetch(baseURL + urls.allMovies, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(value => value.json())

        return movieData;
    }
}

export {
    apiService
}