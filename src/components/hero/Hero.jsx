import  Boy from "../../assets/images/boyA.jpeg";

export const Hero = () => {

    return(
        <div className="flex flex-col md:flex-row md:justify-between lg:justify-evenly px-10 mt-36">
            <div className="py-32">
                <div className="gap-7">
                    <p className="text-2xl">Easy way to make an Order</p>
                    <div className="text-xl font-bold py-5 mr-3">
                        <p><b className="text-red-500 text-2xl">HUNGRY?</b>{" "}Just wait</p>
                        <p>food at your door</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <button className=" bg-emerald-500 px-8 py-2 hover:bg-red-500 hover:font-bold">Order now</button>
                    <button className="border-2 px-8 py-2 hover:text-red-500 border-red-600">See all foods</button>
                </div>
            </div>
            <div className="  md:w-[400px] w-[400px]">
                <img src={Boy} alt=""  />
            </div>
        </div>
    )
}