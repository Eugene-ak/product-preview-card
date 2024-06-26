"use client";
import Image from "next/image";
import mobileImage from "@/public/images/image-product-mobile.jpg";
import desktopImage from "@/public/images/image-product-desktop.jpg";
import cartIcon from "@/public/images/icon-cart.svg";
import { fraunces } from "./fonts";
import style from "./home.module.scss";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <>
      <main className={style.main}>
        <section className={`${style.parent_container}`}>
          <section className={`${style.section} ${style.image_container}`}>
            <picture className={style.image_container}>
              <source
                className={style.image}
                media="(min-width: 700px)"
                srcSet="/images/image-product-desktop.jpg"
              />
              <source
                className={style.image}
                media="(max-width: 699px)"
                srcSet="/images/image-product-mobile.jpg"
              />
              <img
                className={style.image}
                src="/images/image-product-mobile.jpg"
                alt="product"
              />
            </picture>
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
        . Coded by{" "}
        <a href="https://portfolio-website-27ll.onrender.com/">
          Eugene Amedior
        </a>
        .
      </footer>
    </>
  );
}
