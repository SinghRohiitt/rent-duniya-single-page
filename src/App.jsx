import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "./assets/Folder/20241004_153838.JPG";
import img2 from "./assets/Folder/20241004_153850.JPG";
import img3 from "./assets/Folder/20241004_153904.JPG";
import img4 from "./assets/Folder/20241004_153922.JPG";
import img5 from "./assets/Folder/20241004_153926.JPG";
import img6 from "./assets/Folder/20241004_153942.JPG";
import img7 from "./assets/Folder/20241004_153951.JPG";
import img8 from "./assets/Folder/20241004_154002.JPG";
import img9 from "./assets/Folder/20241004_154034.JPG";
import img10 from "./assets/Folder/20241004_154047.JPG";
import img11 from "./assets/Folder/20241004_154101.JPG";
import img12 from "./assets/Folder/20241004_154108.JPG";

const App = () => {
  const images = [
    {
      img: img1,
      name: "FULL FURNISHED",
    },
    {
      img: img2,
      name: "2",
    },
    {
      img: img3,
      name: "3",
    },
    {
      img: img4,
      name: "4",
    },
    {
      img: img5,
      name: "5",
    },
    {
      img: img6,
      name: "6",
    },
    {
      img: img7,
      name: "7",
    },
    {
      img: img8,
      name: "8",
    },
    {
      img: img9,
      name: "9",
    },
    {
      img: img10,
      name: "10",
    },
    {
      img: img11,
      name: "11",
    },
    {
      img: img12,
      name: "12",
    },
  ];

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aec42289-06ca-498c-a5b6-23144dc7dbb9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for Submitting");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold mx-auto">
            <img
              src="https://rentdunia.com/assets/logo-DZjJr9hy.png"
              className="h-16"
              alt="Rent Duniya Logo"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center flex items-center justify-center bg-[url('https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=800')]">
        <div className="h-full w-full py-20 bg-black/50">
          <div className="text-center text-white px-4 my-32">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Dream Home
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Discover luxurious properties tailored to your lifestyle.
            </p>
            <a
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white text-lg transition duration-300"
              href="#form"
            >
              View Listings
            </a>
          </div>
        </div>
      </section>

      {/*Form */}
      <section
        className="py-16 bg-[url('https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&w=2000')] bg-no-repeat bg-cover"
        id="form"
      >
        <div>
          <h3 className="py-8 text-center font-bold text-3xl text-white">
            Struggling to find your perfect home?
          </h3>
          <div className="lg:w-[50%] w-[90%] mx-auto shadow-lg bg-stone-100 rounded-lg">
            <img
              src="https://images.pexels.com/photos/3646913/pexels-photo-3646913.jpeg?auto=compress&cs=tinysrgb&w=2000"
              className="h-[300px] w-full p-8 px-16"
              alt="Form Image"
            />
            <form
              onSubmit={onSubmit}
              className="flex flex-col w-[80%] mx-auto gap-3 my-2"
            >
              <div className="flex gap-2 justify-between">
                <select name="rent" id="rent" required className="px-4 py-2">
                  <option value="">RENT</option>
                  <option value="1-bhk">1-bhk</option>
                  <option value="2-bhk">2-bhk</option>
                  <option value="3-bhk">3-bhk</option>
                  <option value="4-bhk">4-bhk</option>
                  <option value="5-bhk">5-bhk</option>
                </select>
                <select name="pg" id="pg" required className="px-4 py-2">
                  <option value="">PG</option>
                  <option value="Private-room">Private-room</option>
                  <option value="Double-sharing">Double-sharing</option>
                  <option value="Triple-sharing">Triple-sharing</option>
                </select>
              </div>

              <label htmlFor="name">Name</label>
              <input type="text" name="name" required className="p-2" />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" required className="p-2" />

              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                required
                maxLength={10}
                className="p-2"
              />

              <label>Looking For</label>
              <textarea
                name="message"
                required
                className="resize-none p-4"
              ></textarea>

              <button
                type="submit"
                className="px-4 py-2 border bg-blue-500 hover:bg-white hover:text-black hover:border-blue-500 mb-8 rounded text-white w-1/4 mx-auto text-center lg:text-lg text-[10px]"
              >
                Submit
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-stone-100 py-32">
        <div className="w-[80%] shadow-lg mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full bg-stone-100"
          >
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card key={index}>
                      <CardContent className="flex aspect-square items-center justify-center p-6 h-full w-full">
                        <div className="h-80 w-80">
                          <img
                            src={img.img}
                            alt={`Slide ${index + 1}`}
                            className="h-full w-full"
                          />
                          <h3>{img.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      {/*  */}
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                “The service and properties offered by RealEstatePro exceeded my
                expectations. I found my dream home!”
              </p>
              <p className="font-bold text-blue-600">— Sarah Johnson</p>
            </div>
            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                “I highly recommend RealEstatePro for anyone looking for luxury
                properties. Their team was professional and helpful!”
              </p>
              <p className="font-bold text-blue-600">— Michael Smith</p>
            </div>
            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                “RealEstatePro made the home buying process so easy. I found
                exactly what I was looking for in no time!”
              </p>
              <p className="font-bold text-blue-600">— Emma Davis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <a href="#" className="text-white text-2xl font-bold">
              Rent Duniya
            </a>
          </div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Properties
            </a>
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </nav>
          <p className="mt-6">&copy; 2024 Rent Duniya . All Rights Reserved.</p>
        </div>
      </footer>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="container mx-auto text-center">
          <p className="mt-6">&copy; 2024 Rent Duniya. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
