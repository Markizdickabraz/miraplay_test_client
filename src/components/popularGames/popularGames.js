import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { popularGames } from '../../redux/popularGames/operations';
import { selectGames } from '../../redux/popularGames/selectors';
import './popularGamesStyle.css'

export const PopularGamesComponent = () => {
  const dispatch = useDispatch();
  const gamesData = useSelector(selectGames); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(popularGames());
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='popular_container'>
      <h2 className='popular_title'>ПОПУЛЯРНІ</h2>
      <ul className='popular_list'>
        {gamesData && gamesData.slice(0, 12).map(({ commonGameName, gameImage }) => (
          <li className='popular_item' key={commonGameName}>
            <div style={{ backgroundImage: `url(${gameImage})` }} className='popular_img' />
            <h3 className='popular_text'>{commonGameName}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
