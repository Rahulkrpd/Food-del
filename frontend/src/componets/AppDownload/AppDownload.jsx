
import { assets } from '../../assets/assets'
import './AppDownload.css'
const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br /> Tomato App</p>
            <div className="app-download-platforms">
                <a href="https://play.google.com/store/games?hl=en_US" target='_blank'><img src={assets.play_store} alt="" /></a>
                <a href="https://www.apple.com/app-store/" target='_blank'> <img src={assets.app_store} alt="" /></a>
            </div>
        </div>
    )
}

export default AppDownload
