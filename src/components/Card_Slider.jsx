//Install React Slick
//https://react-slick.neostack.com/docs/get-started

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const data = [
    {
      name: `John Morgan`,
      img: `students/John_Morgan.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Ellie Anderson`,
      img: `students/Ellie_Anderson.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Nia Adebayo`,
      img: `students/Nia_Adebayo.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Rigo Louie`,
      img: `students/Rigo_Louie.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Mia Williams`,
      img: `students/Mia_Williams.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    
  ];

const Card_Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <section className=" container mx-auto min-h-screen">
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className="bg-white h-[450px] text-black rouded-xl">
                            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                <img className="h-44 w-44 rounded-full" src={d.img} alt="" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p>{d.review}</p>
                                <button className="bg-indigo-500 text-white text-lg px-6 py-1">Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Card_Slider