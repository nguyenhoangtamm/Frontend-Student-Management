import React from 'react';

interface Housing {
  name: string;
  address: string;
  price: string;
  image: string;
  description: string;
  lat: number;
  lon: number;
}

interface HousingListItemProps {
  housing: Housing[];
  currentPage: number;
  propertiesPerPage: number;
}

const HousingListItem: React.FC<HousingListItemProps> = ({ housing, currentPage, propertiesPerPage }) => {
  // Tính toán các chỉ số để phân trang
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = housing.slice(indexOfFirstProperty, indexOfLastProperty);

  return (
    <div className="col-md-8">
      <ul className="list-group mb-4">
        {currentProperties.map((property, index) => (
          <li key={index} className="list-group-item">
            <h5>{property.name}</h5>
            <p>{property.address}</p>
            <p>{property.price}</p>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HousingListItem;