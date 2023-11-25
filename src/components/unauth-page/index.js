"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
  {
    ques: "What is Netflix?",
    ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. 
    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
  },
  {
    ques: "How much does Netflix cost",
    ans: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $5.99 to $20.99 a month. No extra costs, no contracts`,
  },
  {
    ques: "What can I watch on Netflix?",
    ans: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, 
    including smart TVs, smartphones, tablets, streaming media players and game consoles.

    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    ques: "How do I cancel?",
    ans: `NNetflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    ques: "What can I watch on Netflix?",
    ans: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  },
  {
    ques: "Is Netflix good for kids?",
    ans: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];

function UnauthBanner({ router }) {
  return (
    <div className="h-[65vh] sm:h-[90vh] xl:h-[95vh] bg-cover bg-no-repeat bg-[url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg')] border-b-8 border-gray-800  ">
      <div
        className="bg-black bg-opacity-70 h-[100vh]
    "
      >
        <div className="flex items-center justify-between">
          <img
            src="https://rb.gy/ulxxee"
            alt="netflix"
            width={120}
            height={120}
            className="w-28 sm:w-36 lg:w-52 ml-4 sm:ml-8 pt-4"
            onClick={() => router.push("/")}
          />
          <div className="flex mr-4 sm:mr-10">
            <button
              onClick={() => signIn("github")}
              className="h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded"
            >
              Sign In
            </button>
          </div>
        </div>
        
        <div className="h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl sm:px-[15%] md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[15%] font-medium">
            Unlimited movies, TV shows, and more..
          </h1>
          <h2 className="text-lg sm:text-1xl lg:text-2xl font-medium m-2 sm:m-4">
            Watch anywhere. Cancel anytime.
          </h2>
          <div className="flex  justify-center">
            <button
              onClick={() => signIn("github")}
              className="bg-red-600 hover:bg-[#e50914] p-4 rounded"
            >
              Sign In to Get Started
            </button>
          </div>
          
        </div>
      </div>
    </div>
    
  );
}

export default function UnauthPage() {
  const router = useRouter();
  const [showCurrentAns, setShowCurrentAns] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <main>
        
        <div className="bg-[#000000]">
          <UnauthBanner router={router} />

         {/* Section 1 */}
            <div className="bg-black-900 text-white py-8 border-b-8 border-gray-800">
              <div className="container mx-auto flex items-center justify-between"> {/* Use flex layout */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-4">
                    Enjoy Netflix on Your TV
                  </h2>
                  <p className="text-lg">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                  </p>
                </div>
                <div className="ml-6"> {/* Add margin to separate text and image */}
                  <img src="https://wwwprod.dish.com/content/dish/us/en/home/features/tv-applications/netflix/_jcr_content/root/container/flexcontainer/row1/column0/image.coreimg.png/1685565201712/netflix-ui-1.png" alt="Image" className="w-90 h-80" />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-black-900 text-white py-8 border-b-8 border-gray-800">
              <div className="container mx-auto flex items-center justify-between"> {/* Use flex layout */}
                <div className="ml-6"> {/* Place the image on the left */}
                  <img src="https://www.cssmakeovers.com/sites/netflix/img/netflix-ipad.png" alt="Image" className="w-90 h-80" />
                </div>
                <div className="mb-6"> {/* Add margin to separate text and image */}
                  <h2 className="text-3xl font-bold mb-4">
                    Stream Anywhere
                  </h2>
                  <p className="text-lg">
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 3 */}
            <div className="bg-black-900 text-white py-8 border-b-8 border-gray-800">
              <div className="container mx-auto flex items-center justify-between"> {/* Use flex layout */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-4">
                    Family-Friendly Features
                  </h2>
                  <p className="text-lg">
                    Create profiles for kids and send them on adventures with their favorite characters. Download your shows to watch offline, even on a plane, train, or submarine.
                  </p>
                </div>
                <div className="ml-6"> {/* Add margin to separate text and image */}
                  <img src="https://images.ctfassets.net/ewt73dv4yhi1/3BARZsJU4IbpAP8jwAKuzD/7003bdf37d31ca875636f12bac77bcb5/Cocomelon_Lane_marquee_image.png" alt="Image" className="w-90 h-80" />
                </div>
              </div>
            </div>


          <div className="border-b-8 border-gray-800 pb-8">
            <div className="flex flex-col h-[85vh] lg:h-[95vh] text-white px-8 sm:px-14 md:px-28 lg:px-48 xl:px-80 mt-3 sm:mt-14">
              <h1 className="mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-center px-14 md:px-0">
                Frequently asked questions
              </h1>
              {questions.map((item, index) => (
              <div className="flex flex-col gap-3" key={index}>
                <div
                  onClick={() => setShowCurrentAns(showCurrentAns === index ? null : index)}
                  className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer"
                >
                  <h2>{item.ques}</h2>
                  <PlusIcon className="h-7 w-7" color="white" />
                </div>
                {showCurrentAns === index && (
                  <div className="p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
                    {item.ans}
                  </div>
                )}
              </div>
            ))}

              {/* Copyright */}
              <footer className="bg-black-900 text-white py-4 border-t-8 border-gray-800">
                <div className="container mx-auto text-center">
                  <p className="text-lg">
                    Copyright © 2023 Netflix
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
        
      </main>
    </motion.div>
  );
}
