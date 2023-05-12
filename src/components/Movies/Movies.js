
import React, { useState } from "react";
import './Movies.css';
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from '../MoviesCardList';
import { Header } from '../HeaderComponent';
import { Footer } from '../Footer';
import Preloader from "../Preloader/Preloader";

export const Movies = ({ saved }) => {
    const [isLoading, setIsLoading] = useState(false);

    return isLoading ? <Preloader /> :
        <>
            <Header />
            <main>
                <SearchForm />
                <MoviesCardList saved={saved} />
            </main>
            <Footer />
        </>


};
