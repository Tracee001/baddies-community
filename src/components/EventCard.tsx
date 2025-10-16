import React from "react";

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  image?: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, date, description, image }) => (
  <div className="event-card">
    {image && <img src={image} alt={title} className="event-card-image" />}
    <h3 className="event-card-title">{title}</h3>
    <p className="event-card-date">{date}</p>
    <p className="event-card-description">{description}</p>
  </div>
);

export default EventCard;