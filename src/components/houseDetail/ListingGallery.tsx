import React from "react";
import Image from "next/image";

interface ListingGalleryProps {
  images: string[];
}

const ListingGallery: React.FC<ListingGalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      {/* <Image src={images[0]} alt="Main Image" width={600} height={400} /> */}
      <Image src={"/housing.jpg"} alt="Main Image" width={600} height={400} />

      <div className="d-flex mt-2">
        {images.slice(1, 4).map((img, index) => (
          <Image key={index} src={img} alt={`Image ${index}`} width={180} height={120} />
        ))}
      </div>
      <p className="text-dark mt-2">📷 20 photos</p>
    </div>
  );
};

export default ListingGallery;
