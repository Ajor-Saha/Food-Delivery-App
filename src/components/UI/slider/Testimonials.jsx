import ava01 from "../../../assets/imagesAll/ava-1.jpg";
import ava02 from "../../../assets/imagesAll/ava-2.jpg";
import ava03 from "../../../assets/imagesAll/ava-3.jpg";
import ImageSlider from "./ImageSlider";

function Testimonials() {
  const slides = [
    {
      image: ava01,
      name: "David Joe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vel. In sit mollitia ipsa quidem exercitationem nemo repudiandae sapiente vitae.",
    },
    {
      image: ava02,
      name: "Jara Sara",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vel. In sit mollitia ipsa quidem exercitationem nemo repudiandae sapiente vitae.",
    },
    {
      image: ava03,
      name: "David Willy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vel. In sit mollitia ipsa quidem exercitationem nemo repudiandae sapiente vitae.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-2 py-2">
        <h3 className="text-red-500 text-3xl font-semibold mb-3">Testimonial</h3>
        <p className="text-3xl">What our <span className="font-bold text-red-500">customers</span> are saying</p>
      </div>
      <div className="max-w-lg md:max-w-xl mx-auto mt-10 lg:max-w-2xl">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default Testimonials;
