import Caroulsel_Insta from "../components/Carousel_Insta";
import Carousel_Inst_Auto from "../components/Carousel_Inst_Auto";
import Card_Slider from "../components/Card_Slider";

const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
];

const Carousel = () => {
  return (
    <>
        <section className="container mx-auto">   
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1>Caroulsel Like Instagram</h1>
                <Caroulsel_Insta>
                    {slides.map((slide) => (
                        <img src={slide} />
                    ))}
                </Caroulsel_Insta>
                <h1>Caroulsel Like Instagram Automatic</h1>
                <Carousel_Inst_Auto  autoSlide={true} autoSlideInterval={1000}>
                    {slides.map((slide) => (
                        <img src={slide} />
                    ))}
                </Carousel_Inst_Auto>
                <h1>Card Slider</h1>
                <Card_Slider />
            </div>
        </section>
    </>
  )
}

export default Carousel