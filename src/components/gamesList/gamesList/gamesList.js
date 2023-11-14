import { useSelector } from 'react-redux';
import { selectGamesList } from '../../../redux/gameList/selectors';

export const GamesList = () => {

    const gamesData = useSelector(selectGamesList); 
    const result = gamesData.games;
    
    return (
        <ul className='games_list'>
            {result && result.slice(0, 9).map(({ _id, gameDescription, gameImage, genre, commonGameName, intop, gameClass }) =>
             (
    <li className='games_item itemWithoutButtons' key={_id}>
      <img src={gameImage} alt={commonGameName} className='games_img' />
      <div className='games_title-container'>
        <h4 className='games_title'>{commonGameName}</h4>
        <p className='games_text'>{gameDescription}</p>
      </div>
      <div className='games_genre'>
        {intop && <p className='game_is_top'>Top</p>}
        <p className='genre_item'>{genre}</p>
      </div>
      {gameClass === 'STANDART' && <p className='game_price'>БЕЗКОШТОВНО</p>}
    </li>
  
            ))}
</ul>
    )
}