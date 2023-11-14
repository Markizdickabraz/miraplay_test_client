import { useDispatch} from "react-redux"
import { gamesList } from "../../redux/gameList/operations";
import './gamesListStyles.css'

export const GamesList = () => {
    const dispatch = useDispatch();

    function chooseGenres(e) {
    const id = e.target.id
    const initialValues = {
    "page": 0,
    "isFreshGamesFirst": true,
    "genre": id ,
    "gamesToShow": 9,
}
    dispatch(gamesList(initialValues));
    }

    return (
        <section className="gamesList_container">
            <h4 className="gamesList_title">ВСІ ІГРИ</h4>
             <ul className="genres_list" onClick={chooseGenres}>
            <li className="genres_item" id='ALL'>ВСІ</li>
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
       </section>
    )
}