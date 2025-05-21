import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlay}) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} alt="" className='about-img'/>
                <img src={play_icon} alt="" className='about-icon' onClick={() => {
                    setPlay(true)
                }}/>
            </div>

            <div className='about-right'>
                <h3>About Universiry</h3>
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nisi et ad accusantium, sit numquam nesciunt excepturi, voluptate, voluptatibus eos dolor! Quae aliquid perferendis porro odit deleniti minima pariatur earum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nisi et ad accusantium, sit numquam nesciunt excepturi, voluptate, voluptatibus eos dolor! Quae aliquid perferendis porro odit deleniti minima pariatur earum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nisi et ad accusantium, sit numquam nesciunt excepturi, voluptate, voluptatibus eos dolor! Quae aliquid perferendis porro odit deleniti minima pariatur earum.</p>
            </div>

        </div>
    )
}

export default About
