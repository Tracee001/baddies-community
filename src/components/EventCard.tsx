import React from "react";
import Image from "next/image";

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  image?: string;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  description,
  image,
}) => (
  <div className="event-card bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
    {image && (
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    )}
    <div className="p-5">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-pink-600 font-semibold mb-3">{date}</p>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default EventCard;
