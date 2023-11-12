import './hero.css'

const HeroComponent = () => {
    return (
        <div className="hero_content">
            <section className="container">
                <div className='content'>
                    <div className='leftSide'>
                        <p className='navInfo'>
                            Головна - Бібліотека ігор
                        </p>
                        <h1 className='title'>Наша бібліотека топових ігор</h1>
                        <p className='desription'>Оберіть гру знашої бібліотеки і почніть грати <span>безкоштовно 30 хвилин</span> </p>
                    </div>
                    <div className='rightSide'></div>
            </div>
            </section>
        </div>
    )
}
export { HeroComponent };