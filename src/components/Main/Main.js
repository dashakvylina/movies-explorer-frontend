
import React from "react";
import './Main.css';
import { AboutProject } from "../AboutProject/AboutProject";
import { Promo } from '../Promo';
import { Techs } from '../Techs';
import { AboutMe } from '../AboutMe'
import { Porfolio } from "../Portfolio";
import { Header } from '../HeaderComponent'
import { Footer } from '../Footer'


export const Main = ({ loggedIn }) => {

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Porfolio />
            </main>
            <Footer />
        </>
    )
};

