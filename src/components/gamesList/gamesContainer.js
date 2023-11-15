// gamesContainer.js
import { GamesList } from './gamesList/gamesList';
import './gamesListStyles.css'
import { GenresList } from "./genresList/genresList";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectGamesList } from '../../redux/gameList/selectors';
import { DateFilter } from './datefilter/dateFilter';

export const GamesContainer = () => {
    const gamesData = useSelector(selectGamesList);
    const result = gamesData.games;
    const [gamesShow, setGamesShow] = useState(9);
    const [isFreshGamesFirst, setIsFreshGamesFirst] = useState(true);

    const isFresh = (e) => {
        setIsFreshGamesFirst(e);
    }

    const handleGenreChange = () => {
        if (gamesShow <= gamesData.gamesListLength) {
            setGamesShow(gamesShow + 9);
        };
    };

    const gamesShowItem = (oldGenre, newGenre) => {
        if (oldGenre !== newGenre) {
            setGamesShow(9);
        };
    };

    return (
        <section className="gamesList_container">
            <h4 className="gamesList_title">ВСІ ІГРИ</h4>
            <div className='filter'>
                <GenresList freshGames={isFreshGamesFirst} gamesShow={gamesShow} onGenreChange={gamesShowItem} />
                <DateFilter filter= {isFresh} />
            </div>
            <GamesList gamesShow={gamesShow} result={result} />
            {gamesShow <= gamesData.gamesListLength && <button className="btnMore" type="button" onClick={handleGenreChange}>ПОКАЗАТИ ЩЕ</button>}
        </section>
    );
};
