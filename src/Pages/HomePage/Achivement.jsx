import React from 'react'
import './Achive.css';

export const Achivement = () => {
  let data = [
    {
      "title": "Accommodation",
      "description": "We provide top-quality accommodation services by partnering with renowned hotels, resorts, and guest houses. Our goal is to ensure that every traveler enjoys a comfortable, safe, and memorable stay, whether for leisure or business. Special arrangements and personalized services are available to meet unique needs."
    },
    {
      "title": "Bus Hire",
      "description": "Our bus hire services offer reliable and convenient transportation for individuals, groups, and corporate tours. With a fleet of well-maintained vehicles, experienced drivers, and flexible booking options, we ensure punctual, safe, and comfortable journeys across cities and tourist destinations."
    },
    {
      "title": "Delivery Service",
      "description": "We offer an efficient delivery service to handle travel-related documents, packages, and personal belongings. Our logistics ensure timely and secure delivery, helping travelers avoid delays and focus on their journey. This service adds convenience and peace of mind to every travel plan."
    },
    {
      "title": "Food Service",
      "description": "Our food service provides curated dining experiences for travelers, including meal planning, local cuisine recommendations, and restaurant partnerships. We ensure hygienic, tasty, and timely meals for all types of trips, catering to dietary preferences and enhancing the overall travel experience."
    },
    {
      "title": "Road Guidance",
      "description": "Our expert road guidance service helps travelers navigate unfamiliar routes safely and efficiently. Using the latest maps, GPS systems, and local knowledge, we provide route planning, traffic updates, and safety tips, ensuring smooth journeys and reducing the stress of traveling on unknown roads."
    },
    {
      "title": "Emergency Service",
      "description": "Our 24/7 emergency service ensures that travelers receive immediate assistance during unexpected situations such as accidents, vehicle breakdowns, or medical emergencies. We coordinate with local authorities, hospitals, and support services to provide timely help and maintain traveler safety at all times."
    }
  ]


  return (
    
  
    <div className="achivement-container">
      {data.map((item, index) => (
        <div key={index} className="achivement-box">
          <h3 className="title">{item.title}</h3>
          <p className="description">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
