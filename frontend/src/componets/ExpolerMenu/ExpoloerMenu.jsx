
import './ExpolerMenu.css'
import { menu_list } from '../../assets/assets'
const ExpoloerMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu feature a delectable array of dishes crafted with finest ingredients and culinary experties .Our mission is to stisfy your craving and elevate your dinning experience , one delicious meal at a Anytime </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div  onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>

                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExpoloerMenu
