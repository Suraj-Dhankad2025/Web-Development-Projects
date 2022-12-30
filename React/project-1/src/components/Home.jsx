import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Genius</h1>
          <p>Best Problem Solver</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            A startup is a company that is in the initial stages of business.
            Typically, startups are small and focused on developing a unique
            product or service in order to grow and establish themselves as a
            successful business. Startup work can involve a wide range of tasks,
            depending on the specific needs of the company.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            A startup is a company that is in the early stages of business and
            is often focused on developing a unique product or service in order
            to grow and establish itself as a successful business. Startups are
            usually small and have a limited number of employees, but they have
            the potential to grow rapidly if they are successful in the market.
            Startups are often associated with innovation and the development of
            new technologies, products, or services, and they are often founded
            by entrepreneurs who are looking to bring their ideas to life.
            Starting a startup can be a challenging and risky venture, but it
            can also be a rewarding and exciting experience for those who are
            willing to take on the challenge.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
                animationDelay:"0.3s"
                }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s"
                }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s"
                }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"1s"
                }}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
