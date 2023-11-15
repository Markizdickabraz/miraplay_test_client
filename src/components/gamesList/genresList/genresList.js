import { gamesList } from "../../../redux/gameList/operations";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const GenresList = ({ gamesShow, onGenreChange}) => {
    const dispatch = useDispatch();
    const [selectedGenre, setSelectedGenre] = useState(false);

    useEffect(() => {

        if (selectedGenre === setSelectedGenre) {
            return;
        }

        if (selectedGenre === 'ALL') {
            setSelectedGenre(false);
        }

        onGenreChange(selectedGenre, setSelectedGenre);

        const initialValues = {
            "page": 0,
            "isFreshGamesFirst": true,
            "genre": selectedGenre,
            "gamesToShow": gamesShow,
        };
        dispatch(gamesList(initialValues));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedGenre]);

    function chooseGenres(e) {
        const newGenre = e.target.id;
        if (e.target.nodeName === 'UL') { 
            return;
        }
        else {
            setSelectedGenre(newGenre); 
            
            if (selectedGenre === false) {
                document.getElementById("ALL").classList.remove('selected');
            }
            else {
                document.getElementById(selectedGenre).classList.remove('selected');
            }
            
        e.target.classList.add('selected');
        }
    }

    return (
        <ul className="genres_list" onClick={chooseGenres}>
            <li className="genres_item selected" id='ALL'>ВСІ</li>
            <li className="genres_item" id='FREE'>Безкоштовне</li>
            <li className="genres_item" id='MOBA'>МОВА</li>
            <li className="genres_item" id='SHOOTERS'>ШУТЕРИ</li>
            <li className="genres_item" id='LAUNCHERS'>ЛАУНЧЕРИ</li>
            <li className="genres_item" id='MMORPG'>MMORPG</li>
            <li className="genres_item" id='STRATEGY'>СТРАТЕГІЇ</li>
            <li className="genres_item" id='FIGHTING'>ФАЙТИНГ</li>
            <li className="genres_item" id='RACING'>ГОНКИ</li>
            <li className="genres_item" id='SURVIVAL'>ВИЖИВАННЯ</li>
            <li className="genres_item" id='ONLINE'>ОНЛАЙН</li>
        </ul>
    );
}
