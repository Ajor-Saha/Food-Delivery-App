import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="mt-8">
      <div className="max-h-[480px] overflow-y-auto">
        {cartProducts.length === 0? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
        ):(
            cartProducts.map((item,index) => (
                <CartItem item={item} key={index}/>
            ))
        )}
      </div>
      <div className="absolute bottom-0 left-0 px-5 py-6 flex gap-52 bg-orange-200 w-full">
        <h6 className="text-md font-semibold">
          Subtotal : <span className=" text-red-700">${totalAmount}</span>
        </h6>
        <Link to="/cart" className="border-gray-700 border px-1 py-1 rounded-md hover:text-red-500" >Checkout</Link>
      </div>
    </div>
  );
};

export default Carts;
