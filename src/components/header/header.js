import './header.css';

const Header = () => {
    return (
        <header className='header'>
             <div className="header_container">
                <div className="header_logoWrap">header_
                    <img className="header_logo"
                         src="./favicon.ico" alt= 'logo' >
                    </img>
                        <h5 className="header_logoTitle">MIRAPLAY</h5>
                        <p className="header_logoText">Cloud Gaming</p>
                </div>
                <nav className="header_nav">
                    <ul className="header_list">
                        <a className='header_item' href="/game_lib"><div className='botLine'></div><h5 className='title'>Ігри</h5></a>
                        <a className='header_item' href="/about"><div className='botLine'></div><h5 className='title'>Про платформу</h5></a>
                        <a className='header_item' href="/news"><div className='botLine'></div><h5 className='title'>Новини</h5></a>
                        <a className='header_item' href="/faq"><div className='botLine'></div><h5 className='title'>FAQ</h5></a>
                    </ul>
                </nav>
                <div className='header_btnWrap'>
                    <div className='header_btn'>
                        <svg className='header_icon'>
                            <use href="/static/media/symbol.4050e793240adea219122f2b47914225.svg#icon-search"></use>
                        </svg>
                    </div>
                    <button className='header_btn'>
                        <div className='header_Avatar'>М</div>
                    </button>
                    <button className='header_btn'>
                        ЗАВАНТАЖИТИ КЛІЄНТ
                    </button>
                </div>
            </div>
           </header>
    )
};

export default Header;