
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const { cart } = props || {}
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.fee;
    const total = parseInt(cart.reduce(totalReducer, 0));
    return (
        <div className="text-light cart">
            <h3><i className="fas fa-user-plus"></i> Heros Added: <span className="text-warning">{cart.length} </span></h3>
            <h3>Total Cost:$ <span className="text-warning">{total}</span></h3>
            <ul>
                {
                    cart.map(hName => <div

                        className="d-flex p-2 cart-list text-;ight        ">
                        <img className="cartImage" src={hName.img} alt="" />
                        <h4>{hName.name}</h4>

                    </div>)
                }
            </ul>
        </div>
    );
};

export default Cart;