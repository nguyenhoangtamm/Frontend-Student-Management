import React from "react";
import Image from "next/image";
import mapsearch from '@images/dashboard/housing.jpg';

// interface ListingGalleryProps {
//   images: string;
// }

export default function ListingGallery({ images }: { images: string }) {
  console.log(images);
  return (
    <div className="gallery">

      {/* <Image src={images[0]} alt="Main Image" width={600} height={400} /> */}
      <Image
        src={images ? `/dormitory/${images}` : mapsearch}
        alt="Main Image" width={600} height={400} />

      {/* <div className="d-flex mt-2">
        {images.slice(1, 4).map((img, index) => (
          <Image key={index} src={img} alt={`Image ${index}`} width={180} height={120} />
        ))}
      </div> */}
      {/* <p className="text-dark mt-2">📷 20 photos</p> */}
    </div>
  );
};


