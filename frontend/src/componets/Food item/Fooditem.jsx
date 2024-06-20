import { useContext } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removFromCart, url } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={`${url}/images/${image}`} alt={name} />
                {
                    !cartItems[id] ?
                        <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
                        :
                        <div className="food-item-counter">
                            <img onClick={() => removFromCart(id)} src={assets.remove_icon_red} alt="Remove from Cart" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add to Cart" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <div className="food-item-price">${price}</div>
            </div>
        </div>
    );
};

export default Fooditem;
