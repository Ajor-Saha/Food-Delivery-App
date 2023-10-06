import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  }
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  }

  return (
    <div key={id} className="flex justify-evenly mt-5">
      <div>
        <img src={image01} alt="" width={50}/>
      </div>
      <div>
        <h5>{title}</h5>
        <div className="flex justify-between">
          <span className="text-sm text-red-500">${quantity}x</span>
          <span className="text-sm text-red-500">${totalPrice}</span>
        </div>
        <div className="flex bg-orange-100 px-5 gap-2 justify-evenly">
          <button onClick={incrementItem}>
            <FaPlus  size={18} className=""/>
          </button>
          <span>{quantity}</span>
          <button  onClick={decreaseItem}>
            <FaMinus  size={20}/>
          </button>
        </div>
      </div>
      <button className="mt-3" onClick={deleteItem}>
        <AiOutlineClose size={20}/>
      </button>
    </div>
  );
};

export default CartItem