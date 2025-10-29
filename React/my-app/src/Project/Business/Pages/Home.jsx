import { CiPlay1 } from "react-icons/ci";
import HomeImg from "../../../asset/home.jpg"
const Home = () => {
  return (
    <>
        <section id="home" className='grid place-items-center p-5!'>
            <figure className='border w-5/6'>
                <figcaption>
                  <h1 className="">Corporate & Business Site <br /> Template By Ayro UI</h1>
                  <p className="">We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things.</p>
                  <div className="">
                    <button>Get Started</button>
                    <button><CiPlay1 /></button>
                    <label htmlFor="">Watch Intro</label>
                  </div>
                </figcaption>
                <div className="">
                  <img src={HomeImg} alt="" />
                </div>
            </figure>
        </section>
    </>
  )
}

export default Home