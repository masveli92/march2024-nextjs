import {IMovie, IMovieData} from '@/models/IMovie';
import { apiService } from '@/services/api.service';
import React from 'react';

const MoviesPage = async () => {
    const movies:IMovieData[]= await apiService.getAllMovies('1');

    return (
        <div>
            <ul>
                {
                    movies.results?.map((movie: IMovie)=>(<li key ={movie.id} >
                            {movie.title}
                        </li>


                    ))
                }
            </ul>
        </div>
    );
};

export default MoviesPage;