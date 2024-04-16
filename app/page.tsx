"use client";
import Image from "next/image";
import mobileImage from "@/public/images/image-product-mobile.jpg";
import desktopImage from "@/public/images/image-product-desktop.jpg";
import cartIcon from "@/public/images/icon-cart.svg";
import { fraunces } from "./fonts";
import style from "./home.module.scss";
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [image, setImage] = useState(screenWidth < 700 ? mobileImage : desktopImage);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
      const img = newScreenWidth < 700 ? mobileImage : desktopImage;
      setImage(img);
      console.log(newScreenWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <main className={style.main}>
        <section className={`${style.section} ${style.parent_container}`}>
          <section className={style.section}>
            <Image src={image} className={style.image} alt="product" />
          </section>

          <section className={`${style.section} ${style.second_section}`}>
            <h6 className={style.tag}>Perfume</h6>
            <h1 className={`${fraunces.className} ${style.heading}`}>
              Gabrielle Essence Eau De Parfum
            </h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>

            <div className={style.price_container}>
              <span className={`${fraunces.className} ${style.price}`}>
                $149.99
              </span>{" "}
              <s>$169.99</s>
            </div>

            <button className={style.cart_button}>
              <span>
                <Image src={cartIcon} alt="cart" />
              </span>
              Add to Cart
            </button>
          </section>
        </section>
      </main>

      <footer className={style.footer}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://portfolio-website-27ll.onrender.com/">Eugene Amedior</a>.
      </footer>
    </>
  );
}
