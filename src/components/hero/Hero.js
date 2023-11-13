import './hero.css'

const HeroComponent = () => {
    return (
        <div className="hero_content">
            <section className="hero_container">
                <div className='content'>
                    <div className='hero_leftSide'>
                        <p className='hero_navInfo'>
                            Головна - Бібліотека ігор
                        </p>
                        <h1 className='hero_title'>Наша бібліотека топових ігор</h1>
                        <p className='hero_description'>Оберіть гру знашої бібліотеки і почніть грати <span className='hero_description-span'>безкоштовно 30 хвилин</span> </p>
                    </div>
                    <div className='hero_rightSide'></div>
            </div>
            </section>
        </div>
    )
}
export { HeroComponent };