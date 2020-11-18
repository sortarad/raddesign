import React, { useState } from 'react';
import Head from 'next/head';
import ImageGallery from '../components/imageGallery';
import NavBar from '../components/navBar';
import GetInTouchButton from '../components/getInTouchButton';
import BottomNav from '../components/bottomNav';

const menuList = [
  {
    name: 'Preserving local tradition',

  }, {
    name: 'Shoe fantasy',
  }, {
    name: 'Food for thought',
  }, {
    name: 'Future fashion',
  }, {
    name: 'The slip dress',
  },
];

export default function Home() {
  const [category, setCategory] = useState("The beauty evolution of: Kohl eyeliner");
  const [categoryMenu, setCategoryMenu] = useState('home-category-menu');
  const [imageGalleryStyle, setImageGalleryStyle] = useState('image-gallery-opened');

  const setCurrentCategory = (categoryText) => {
    setCategory(categoryText);
    setCategoryMenu('home-category-menu-closed');
    setImageGalleryStyle(imageGalleryStyle === 'image-gallery-opened' ? 'image-gallery-closed' : 'image-gallery-opened');
  }

  const categoryMenuOpen = () => {
    setCategoryMenu('home-category-menu');
  }

  const toggleImageGallery = () => {
    setImageGalleryStyle(imageGalleryStyle === 'image-gallery-opened' ? 'image-gallery-closed' : 'image-gallery-opened');
  }

  return (
    <div className="pb-12 bg-orangeBackground">
      <Head>
        <title>RadDesign - HOME</title>
      </Head>
      <div className="flex flex-col lg:flex-row">
        <div className="pl-4 pr-4 lg:pr-0 w-full lg:w-3/5 mt-5 pb-10 lg:pb-0">
          <NavBar currentNav="youngLab" />
          <div className={categoryMenu}>
            <div onClick={() => setCurrentCategory("The beauty evolution of: Kohl eyeliner")} className="flex flex-row justify-between items-center pl-6 pr-6">
              <p className="text-2xl md:text-5xl xl:text-6xl underline font-TeX-Regular cursor-pointer">The beauty evolution <br />of: Kohl eyeliner</p>
              <img src={"../static/arrow.svg"} className="w-24 hidden lg:flex" />
            </div>
            <div>
              <ul>
                {menuList.map((item, i) =>
                  <li
                    onClick={() => setCurrentCategory(item.name)}
                    key={i}
                    className="text-2xl md:text-5xl xl:text-6xl border-t-2 border-black pl-6 font-TeX-Regular cursor-pointer">
                    {item.name}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className={imageGalleryStyle}>
          <ImageGallery toggleImageGallery={toggleImageGallery} categoryMenuOpen={categoryMenuOpen} currentCategory={category} />
        </div>
      </div>
      <div className="px-4 mt-12 lg:mt-32">
        <p className="text-xl md:text-3xl leading-7 font-TeX-Regular">YOUNG LAB is a global creative studio focused on design, development, and digital output.
        The studio partners with culturally motivated clients within the art, fashion, and music
        landscapes — bringing to life new digital ecosystems that showcase the breadth of content within a client's portfolio.
          </p>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-16">
          <GetInTouchButton />
          <BottomNav />
        </div>
      </div>
    </div>
  )
}
