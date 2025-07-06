import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image, description }) => (
  <div className="border rounded-lg shadow-md p-4">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Card;
