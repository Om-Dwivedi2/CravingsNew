import React from "react";
import landingPage from "../assets/landingPage.png";
import { GiKnifeFork } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { BsSliders } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      {/* Landing Page   */}

      <section className="bg-[url(./assets/landingPage.png)] bg-cover bg-center h-[80vh] w-full pt-20 px-20">
        <div className="bg-white rounded p-1 text-(--color-primary) flex items-center gap-1 font-semibold text-sm w-fit ">
          <GiKnifeFork className="w-5 h-5" />
          Delicious Food, Delivered Fast!
        </div>
        <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold text-black pt-4">
          Your Favorite Food,
        </h1>
        <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold text-(--color-primary) pt-2">
          Delivered Fast
        </h1>
        <p className="lg:text-md md:text-base text-sm text-(--color-secondary) pt-4 w-85">
          Order from thousands of restaurants and get it delivered to your
          doorstep
        </p>

        <div className="flex gap-5 mt-10 items-center">
          <button className="text-white bg-(--color-primary) px-5 font-semibold py-2 text-center rounded">
            Order Now
          </button>
          <button className="text-black bg-white border border-gray-400 rounded px-5 font-semibold py-2 text-center">
            Sign Up
          </button>
        </div>

        <div className="flex items-center gap-2 p-2 border border-gray-400 rounded-xl bg-white mt-5 w-[50%] pr-4">
          <GoSearch />
          <input
            className="w-full outline-none text-sm"
            type="text"
            name="search"
            id="search"
            placeholder="Search for restaurants or dishes..."
          />
          <BsSliders className="w-5 h-5 float-end" />
        </div>
      </section>

      {/* Featured Restaurants */}

      <section className="px-10 md:px-20 lg:px-60 py-5 bg-(--color-base-200)">
        <div className="my-4 space-y-2">
          <div className="flex gap-2 items-center">
            <div className="bg-(--color-primary-subtle) rounded-[50%] flex items-center justify-center p-1 ">
              <GoStarFill className="text-(--color-primary) text-sm" />
            </div>
            <div className="text-4 font-semibold text-(--color-primary) ">
              FEATURED RESTAURANTS{" "}
            </div>
          </div>

          <div className="text-4xl font-bold">Top restaurant near you</div>
          <p className="text-(--color-secondary) text-sm py-2">
            Handpicked places loved by foodies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
          <div className="rounded-xl shadow-xl bg-white overflow-hidden">
            <div className="h-50 relative bg-[url('https://res.cloudinary.com/dpl3xwf1z/image/upload/v1775671325/restaurants/69c58f340d577beee548c195/njneiftngfspzpn2wdig.avif')] bg-cover bg-center">
              <div className="flex absolute top-2 right-2  gap-1 items-center text-(--color-primary) bg-white rounded-lg px-2 py-1">
                <div className=" rounded-[50%]  p-1 ">
                  <GoStarFill className=" text-3" />
                </div>
                <span className="text-4 font-bold">4.3</span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-semibold">Under the Mango Tree</h2>
              <div className="flex gap-1 items-center text-sm text-(--color-neutral)">
                <IoLocationSharp className="text-(--color-primary)" />
                Jehar Numa Palace, Bhopal
              </div>
              <div className="text-sm text-(--color-neutral) py-2">
                Enjoy the thrill of grill and barbecue at Under The Mango Tree
                restaurant.
              </div>

              <div className="text-sm flex gap-2 ">
                <div className="rounded bg-(--color-base-300) px-2 py-1">
                  Indian
                </div>
                <div className="rounded bg-(--color-base-300) px-2 py-1">
                  Chinese
                </div>
                <div className="rounded bg-(--color-base-300) px-2 py-1">
                  Italian
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <button className="rounded-xl text-white text-center w-[80%] py-2 bg-(--color-primary) font-semibold text-lg ">
                  Explore Now
                </button>
                <button className="rounded-[50%] p-3 border border-(--color-primary) text-(--color-primary)  hover:bg-(--color-primary)  hover:text-white ">
                  <FaRegBookmark className="text-md" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-xl bg-white overflow-hidden">
            <div className="h-50 relative bg-[url('https://res.cloudinary.com/dpl3xwf1z/image/upload/v1774557305/restaurants/69c58f4b0d577beee548c198/fpdlv1viy4gucm1vrh7u.webp')] bg-cover bg-center">
              <div className="flex absolute top-2 right-2  gap-1 items-center text-(--color-primary) bg-white rounded-lg px-2 py-1">
                <div className=" rounded-[50%]  p-1 ">
                  <GoStarFill className=" text-3" />
                </div>
                <span className="text-4 font-bold">4.8</span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-semibold">Raj darbar</h2>
              <div className="flex gap-1 items-center text-sm text-(--color-neutral)">
                <IoLocationSharp className="text-(--color-primary)" />
                Ayodhya Bypass, Bhopal
              </div>
              <div className="text-sm text-(--color-neutral) py-2">
                Raj Darbar is an Indian restaurant that offers a unique dining
                experience for families and friends.
              </div>

              <div className="text-sm flex gap-2 ">
                <div className="rounded bg-(--color-base-300) px-2 py-1">
                  Indian
                </div>
                <div className="rounded bg-(--color-base-300) px-2 py-1">
                  Chinese
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <button className="rounded-xl text-white text-center w-[80%] py-2 bg-(--color-primary) font-semibold text-lg ">
                  Explore Now
                </button>
                <button className="rounded-[50%] p-3 border border-(--color-primary) text-(--color-primary)  hover:bg-(--color-primary)  hover:text-white ">
                  <FaRegBookmark className="text-md" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-xl bg-white overflow-hidden">
            <div className="h-50 relative bg-[url('https://images.surferseo.art/7d5164fa-7a4d-49bd-a811-307c98f79698.png')] bg-cover bg-center">
              <div className="flex absolute top-2 right-2  gap-1 items-center text-(--color-primary) bg-white rounded-lg px-2 py-1">
                <div className=" rounded-[50%]  p-1 ">
                  <GoStarFill className=" text-3" />
                </div>
                <span className="text-4 font-bold">4.1</span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-semibold">Countryside Culture</h2>
              <div className="flex gap-1 items-center text-sm text-(--color-neutral)">
                <IoLocationSharp className="text-(--color-primary)" />
                MP Nagar, Bhopal
              </div>
              <div className="text-sm text-(--color-neutral) py-2">
                A hidden gem away from the city, offering lush green meadows and
                peaceful walking paths for relaxation.
              </div>

              <div className="text-sm flex gap-2 ">
                <div className="rounded bg-(--color-base-300) px-2 py-1">
                  Indian
                </div>
                <div className="rounded bg-(--color-base-300) px-2 py-1">
                  Chinese
                </div>
                <div className="rounded bg-(--color-base-300) px-2 py-1">
                  Italian
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <button className="rounded-xl text-white text-center w-[80%] py-2 bg-(--color-primary) font-semibold text-lg ">
                  Explore Now
                </button>
                <button className="rounded-[50%] p-3 border border-(--color-primary) text-(--color-primary)  hover:bg-(--color-primary)  hover:text-white ">
                  <FaRegBookmark className="text-md" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
