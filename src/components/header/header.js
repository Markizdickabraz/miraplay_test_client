import './header.css';

const Header = () => {
    return (
        <header className='header'>
             <div className="container">
                <div className="logoWrap">
                    <img className="logo"
                         src="./favicon.ico" alt= 'logo' >
                    </img>
                        <h5 className="logoTitle">MIRAPLAY</h5>
                        <p className="logoText">Cloud Gaming</p>
                </div>
                <nav className="nav">
                    <ul className="list">
                        <a className='item' href="/game_lib"><div className='botLine'></div><h5 className='title'>Ігри</h5></a>
                        <a className='item' href="/about"><div className='botLine'></div><h5 className='title'>Про платформу</h5></a>
                        <a className='item' href="/news"><div className='botLine'></div><h5 className='title'>Новини</h5></a>
                        <a className='item' href="/faq"><div className='botLine'></div><h5 className='title'>FAQ</h5></a>
                    </ul>
                </nav>
                <div className='btnWrap'>
                    <div className='btn'>
                        <svg className='icon'>
                            <use href="/static/media/symbol.4050e793240adea219122f2b47914225.svg#icon-search"></use>
                        </svg>
                    </div>
                    <button className='btn'>
                        <div className='Avatar'>М</div>
                    </button>
                    <button className='btn'>
                        ЗАВАНТАЖИТИ КЛІЄНТ
                        <div className='iconWrap'>
                            <svg className='iconWindow'>
                                <use href="/static/media/symbol.4050e793240adea219122f2b47914225.svg#icon-window">
                                </use>
                            </svg>
                        </div>
                       <div className='iconWrap'>
                            <svg className='iconWindow'>
                                <use href="/static/media/symbol.4050e793240adea219122f2b47914225.svg#icon-apple">
                                </use>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
           </header>
    )
};

export default Header;