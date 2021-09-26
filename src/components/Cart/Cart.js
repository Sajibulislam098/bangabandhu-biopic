
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.fee;
    const total = parseInt(cart.reduce(totalReducer, 0));
    return (
        <div className="text-light cart">
            <h3><i className="fas fa-user-plus"></i> Heros Added :{cart.length}</h3>
            <h3>Total Cost:${total}</h3>
            <ul>
                {
                    cart.map(hName => <div className="d-flex p-2 cart-list">
                        <img className="cartImage" src={hName.img} alt="" />
                        <h4>{hName.name}</h4>
                    </div>)
                }
            </ul>
        </div>
    );
};

export default Cart;