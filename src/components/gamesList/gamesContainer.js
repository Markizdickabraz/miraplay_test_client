import { GamesList } from './gamesList/gamesList';
import './gamesListStyles.css'
import { GenresList } from "./genresList/genresList";

export const GamesContainer = () => {

    return (
        <section className="gamesList_container">
            <h4 className="gamesList_title">ВСІ ІГРИ</h4>
            <GenresList />
            <GamesList />
       </section>
    )
}