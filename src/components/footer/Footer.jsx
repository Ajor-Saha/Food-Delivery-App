import restu from "../../assets/images/resturant.jpeg";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <div className="bg-orange-100 w-full px-10 py-7 mt-10">
      <div className="flex flex-wrap px-5 py-5 justify-evenly">
        <div className="flex flex-col max-w-sm gap-5">
          <img src={restu} alt="" width={80} />
          <h3 className="text-red-500 text-xl">Ambrosyia</h3>
          <p className="text-sm max-w-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            libero dolorum et autem esse consequatur id harum corporis aut
            neque.
          </p>
        </div>
        <div className="flex flex-col px-3 py-3">
          <h3 className="font-semibold text-xl">Delivery Time</h3>
          <p>10:00am - 11.00pm</p>
          <br />
          <br />
          <p>Friday-Saturday</p>
          <p>Off day</p>
        </div>
        <div className="flex flex-col px-3 py-3">
          <h3 className="font-semibold text-xl">Contact</h3>
          <p>Location: Ambarkhana</p>
          <p>Sylhet-3100, Bangladesh</p>
          <br />
          <p>Phone: 01XXXXXXXX</p>
          <p>example@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 mt-5 lg:mt-2">
          <h2 className="text-xl text-red-500 font-semibold">Newsletter</h2>
          <p>Subscribe our newsletter</p>
          <div className="bg-white flex justify-evenly py-1 border-gray-500">
            <input type="email" name="" id="btn" required className="px-3 border-gray-500"/>
            <button className="bg-red-500 text-white p-1 rounded-full border-none outline-none m-2" id="btn">
              <FaRegPaperPlane className="w-6 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center py-5">
        <div className="text-sm">
        Copyright - 2023, website made by Ajor. All Rights
              Reserved.
        </div>
        <div className="flex">
            <label className="text-md font-bold">Follow:</label>
            <button>
            <FaFacebook className="text-red-500 text-2xl mx-2" />
            </button>
            <button>
            <FaYoutube className="text-red-600 text-2xl mx-2" />
            </button>
            <button>
            <FaLinkedin className="text-red-600 text-2xl mx-2" />
            </button>
            <button>
            <FaGithub className="text-red-600 text-2xl mx-2" />
            </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
