import Food from "../../assets/images/food2.png"

export const FoodCard = () => {
  return (
    <div className="mt-20 px-10 mb-10 flex flex-wrap justify-evenly">
        <div className="flex gap-5 justify-center items-center bg-orange-100 max-w-xs px-10 py-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-gray-600 mb-5">
            <div className="border-red-400 border-2 rounded-2xl">
                <img src={Food} alt=""  width={50} height={50}/>
            </div>
            <div className="text-xl">
                FastFood
            </div>
        </div>
        <div className="flex gap-5 justify-center items-center bg-orange-100 max-w-xs px-10 py-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-gray-600 mb-5">
            <div className="border-red-400 border-2 rounded-2xl">
                <img src={Food} alt=""  width={50} height={50}/>
            </div>
            <div className="text-xl">
                FastFood
            </div>
        </div>
        <div className="flex gap-5 justify-center items-center bg-orange-100 max-w-xs px-10 py-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-gray-600 mb-5">
            <div className="border-red-400 border-2 rounded-2xl">
                <img src={Food} alt=""  width={50} height={50}/>
            </div>
            <div className="text-xl">
                FastFood
            </div>
        </div>
        <div className="flex gap-5 justify-center items-center bg-orange-100 max-w-xs px-10 py-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-gray-600 mb-5">
            <div className="border-red-400 border-2 rounded-2xl">
                <img src={Food} alt=""  width={50} height={50}/>
            </div>
            <div className="text-xl">
                FastFood
            </div>
        </div>
    </div>
  );
};
