import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { AiOutlineClose } from "react-icons/ai";

const CartPage = ({item}) => {
    const { id, title, price, image01, quantity, totalPrice } = item;
    const dispatch = useDispatch();
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    }
    return(
        <tr>
            <td className="border px-10 py-5">
                <img src={image01} alt="" width={50}/>
            </td>
            <td className="border px-10 py-5">{title}</td>
            <td className="border text-center">{price}</td>
            <td className="border text-center">{quantity}</td>
            <td className="text-center border">
                <button onClick={deleteItem}>
                    <AiOutlineClose size={20}/>
                </button>
            </td>
        </tr>
    )
}

export default CartPage