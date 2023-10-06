import Quick from "../../assets/images/Quick.png";
import Pick from "../../assets/images/pick.png";
import Dine from "../../assets/images/Dine.png";

export const Delievery = () => {

    return(
        <div className="flex flex-wrap flex-col py-32 px-10">
            <div className="flex flex-col  justify-center items-center gap-5">
                <div className="">
                    <h3 className="text-3xl font-semibold mb-2">Your <b className="text-red-500">Favorite</b> Dishes,</h3>
                    <h3 className="text-2xl text-center">Just a <b className="text-red-500">Click</b> Away</h3>
                </div>
                <div className="text-center">
                    <p>Delicious Meals, Delivered to Your Doorste.</p> 
                    <p>No more waiting in long lines. Get your favorite meals delivered in no time, hassle-free.</p>
                </div>
            </div>
            <div className="py-32 flex flex-wrap justify-evenly">
                <div className="flex flex-col p-5">
                    <div>
                        <img src={Quick} alt="" width={100} height={100}/>
                    </div>
                    <div className="">
                        <h4 className="text-xl font-semibold">Quick Delivery</h4>
                        <span>Your Cravings, Right on Time!</span>
                    </div>
                </div>
                <div className="flex flex-col p-5">
                    <div>
                        <img src={Dine} alt="" width={100} height={100}/>
                    </div>
                    <div className="">
                        <h4 className="text-xl font-semibold">Super Dine In</h4>
                        <span>Elevate Your Culinary Experience!</span>
                    </div>
                </div>
                <div className="flex flex-col p-5">
                    <div>
                        <img src={Pick} alt="" width={100} height={100}/>
                    </div>
                    <div className="">
                        <h4 className="text-xl font-semibold">Easy Pick Up</h4>
                        <span>Effortless Pickup: Grab and Go!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}