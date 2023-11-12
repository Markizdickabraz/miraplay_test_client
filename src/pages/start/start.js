import './startStyle.css'
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div className="start_container">
            <h1 className="start_title">Вітаємо, авторизуйтесь щоб перейти до ігор</h1>
            <div className="start_btn-container">
            <Link to= {'/register'} className="register_btn btn">Реєстрація</Link>
            <Link to = {'/login'} className="login_btn btn">Вхід</Link>
            </div>
        </div>
    )
}

export { Start };