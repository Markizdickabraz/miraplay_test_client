import Header from "../../components/header/header"
import { HeroComponent } from "../../components/hero/Hero";
import { PopularGamesComponent} from "../../components/popularGames/popularGames";
import './home.css';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <HeroComponent />
            <PopularGamesComponent />
        </div>
    )
}
export { Home };