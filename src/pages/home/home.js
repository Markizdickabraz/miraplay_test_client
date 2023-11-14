import Header from "../../components/header/header"
import { HeroComponent } from "../../components/hero/Hero";
import { PopularGamesComponent } from "../../components/popularGames/popularGames";
import { GamesList } from "../../components/gamesList/gamesList";
import './home.css';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <HeroComponent />
            <PopularGamesComponent />
            <GamesList />
        </div>
    )
}
export { Home };