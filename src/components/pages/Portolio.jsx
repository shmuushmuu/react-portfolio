import React, { useState } from "react";
import Projects from "../Projects/Projects";
import battleJots from "../../assets/visuals/battle-jots-demo.png";
import pokemonInfoDump from "../../assets/visuals/pokemon-info-dump.png";
import noteTaker from "../../assets/visuals/note-taker-app-screenshot.png";

export default function Portfolio() {
    const [apps, setApps] = useState(
        [
            {
                title: "Battle Jots",
                body: "Play competitive wordle with your friends!",
                img: battleJots,
                deployed: "https://battle-jots.herokuapp.com/",
                gitLink: "https://github.com/shmuushmuu/battle-jots",
                id: 1
            },
            {
                title: "Pokemon Info Dump",
                body: "Learn about Pokemon! Find a related YouTube video and info from the Pokemon API, as well as resources regarding the Pokemon types.",
                img: pokemonInfoDump,
                deployed: "https://shmuushmuu.github.io/Pokemon-info-dump/",
                gitLink: "https://github.com/shmuushmuu/Pokemon-info-dump",
                id: 2
            },
            {
                title: "Note Taker App",
                body: "Take notes that persist, and delete them with ease! A great way to keep info together just by logging into a website.",
                img: noteTaker,
                deployed: "https://shmuushmuu-note-taker-app.herokuapp.com/Links to an external site.",
                gitLink: "https://github.com/shmuushmuu/note-taker-app",
                id: 3,
            },
        ],
        []
    );
    return (
        <div className="m-2 min-vh-100">
            <h1 className="text-center p-2"> Portfolio </h1>
            <Projects apps={apps} heading="Projects" />
        </div>
    );
}