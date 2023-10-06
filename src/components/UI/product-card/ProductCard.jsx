import React from "react";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
    const {id,title,image01,price} = props.item;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price,
            })
        )
    }


    return(
        <div className="border-2 border-gray-100 flex flex-col p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="mx-auto">
                <img src={image01} alt="" width={100} height={80}/>
            </div>
            <div className="mx-auto">
                <h5>
                    <Link to={`/foods/${id}`}>{title}</Link>
                </h5>
                <div className="flex gap-10 mt-2">
                    <span className=" text-red-600">${price}</span>
                    <button className="bg-emerald-400 text-sm px-2 py-1 hover:bg-red-600 hover:text-white rounded" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard