"use client";
import { MoviesSearch } from "@/components/MoviesSearch";
import { useState } from "react";
import { FoundMovies } from "@/components/FoundMovies";

export default function Movies() {
const [movies, setItem] = useState<any[]>([])

    return <>
        <h1>Movies</h1>
        <MoviesSearch onSearch={setItem} />
        <FoundMovies movies={movies} /> 
    </>
}