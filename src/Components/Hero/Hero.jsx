import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>We ensure better education world-wide</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem error libero dolores repudiandae consectetur tempore ipsa beatae eius cum temporibus recusandae ullam nesciunt nisi, nobis tempora earum, quas eveniet.</p>

                <button className='btn'>Explore More <img src={arrow} alt="" /></button>


            </div>
        </div>
    )
}

export default Hero
