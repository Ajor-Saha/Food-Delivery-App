import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import CartPage from "./CartPage";
import { Link } from "react-router-dom";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="py-32 flex flex-col">
      <div className="bg-orange-200 h-24 text-black text-3xl font-semibold flex items-center justify-center">
        Your Cart
      </div>
      <div className="max-h-[480px] overflow-y-auto mt-10 w-full">
        {cartProducts.length === 0 ? (
          <h6 className="text-center mt-5 text-xl">
            No item added to the cart
          </h6>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <table className="border">
              <tr className=" border-2 border-gray-900">
                <th className="border px-10 py-5">Image</th>
                <th className="border px-5 py-2">Product Title</th>
                <th className="border px-5 py-2">Price</th>
                <th className="border px-5 py-2">Quantity</th>
                <th className="border px-5 py-2">Delete</th>
              </tr>
              {cartProducts.map((item, index) => (
                <CartPage item={item} key={index} />
              ))}
            </table>
          </div>
        )}
      </div>
      <div className="py-10 flex flex-col justify-center items-center">
        {cartProducts.length == 0 ? (
          " "
        ) : (
          <div className="flex flex-col gap-5">
            <span className="text-2xl text-red-500">
              <b className="text-black">{"  "}Subtotal:</b> ${totalAmount}
            </span>
            <p>Texes and shipping will calculate at checkout</p>
            <div className="flex gap-5">
              <Link to="/food" className=" bg-orange-200 text-sm rounded-md px-5 py-2 font-semibold">continue shopping</Link>
              <Link to="/" className=" bg-orange-200 text-sm rounded-md px-5 py-2 font-semibold">Proceed to checkout</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
