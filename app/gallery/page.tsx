import React from "react";
import Image from "next/image";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
  "/gallery/img7.jpg",
  "/gallery/img8.jpg",
  "/gallery/img9.jpg",
  "/gallery/img10.jpg",
  "/gallery/img11.jpg",
  "/gallery/img12.jpg",
  "/gallery/img13.jpg",
  "/gallery/img14.jpg",
  "/gallery/img15.jpg",
  "/gallery/img16.jpg",
  "/gallery/img17.jpg",
  "/gallery/img18.jpg",
  "/gallery/img19.jpg",
  "/gallery/img20.jpg",
  "/gallery/img21.jpg",
  "/gallery/img22.jpg",
];

const Gallery = () => {
  return (
    <div className="bg-[#f3fbff] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold">
          <span className="text-green-600">Gallery</span>
        </h1>
        <p className="text-sm text-[#f8333c] mt-1">Home / Gallery</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-12">
          {images.map((src, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
