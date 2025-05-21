
import './Testimonials.css'
import nxt_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-2.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {

    const slider = useRef();
    // const [tx, setTx] = useState(0);

    // useEffect(() => {
    //     if (slider.current) {
    //         slider.current.style.transform = `translateX(${tx}%)`;
    //     }
    // }, [tx]);

    let tx = 0;

    const next = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const back = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }




    return (
        <div className='testimonials'>
            <img src={nxt_icon} alt="" className='nxt-btn' onClick={next} />
            <img src={back_icon} alt="" className='back-btn' onClick={back} />
            _
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>John Wick</h3>
                                    <span>Torrento, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil est ipsum illum ab totam quaerat impedit fuga temporibus unde qui, earum assumenda dolorem corrupti placeat. Atque, consectetur earum! Illo.</p>

                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>John Wick</h3>
                                    <span>Torrento, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil est ipsum illum ab totam quaerat impedit fuga temporibus unde qui, earum assumenda dolorem corrupti placeat. Atque, consectetur earum! Illo.</p>

                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>John Wick</h3>
                                    <span>Torrento, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil est ipsum illum ab totam quaerat impedit fuga temporibus unde qui, earum assumenda dolorem corrupti placeat. Atque, consectetur earum! Illo.</p>

                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>John Wick</h3>
                                    <span>Torrento, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil est ipsum illum ab totam quaerat impedit fuga temporibus unde qui, earum assumenda dolorem corrupti placeat. Atque, consectetur earum! Illo.</p>

                        </div>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Testimonials
