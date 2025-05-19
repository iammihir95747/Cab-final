// ./components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = () => {
  const location = useLocation();

  const seoMap = {
    "/homepage": {
      title: "Home - Chamunda Cab",
      description: "Welcome to Chamunda Cab, your trusted taxi service.",
      keywords: "ChamundaCab taxi service, reliable cabs, affordable taxi, professional drivers, online taxi booking",
      canonical: "https://www.chamundacab.com/homepage",
    },
    "/about": {
      title: "About Us - Chamunda Cab",
      description:
        "Reliable taxi services with Hatchbacks, Sedans, and SUVs for trips, airport transfers, and local visits.",
      keywords:
        "ChamundaCab about, taxi services, professional drivers, affordable rides, Gujarat taxi",
      canonical: "https://www.chamundacab.com/about",
    },
    "/services": {
      title:
        "Services - ChamundaCab Reliable Taxi Options in Gujarat",
      description:
        "ChamundaCab offers a range of taxi services across Gujarat including one-way trips, round trips, airport transfers, and local travel. Choose reliable, affordable rides with experienced drivers. Book now for hassle-free travel.",
      keywords:
        "ChamundaCab taxi services, one-way taxi, round trip taxi, airport transfer, local taxi, affordable taxi rides, professional taxi drivers, Gujarat taxi service",
      canonical: "https://www.chamundacab.com/services",
    },
    "/booking": {
      title: "Booking - Chamunda Cab",
      description: "Book your taxi easily and quickly.",
      keywords: "ChamundaCab booking, taxi reservation, online taxi booking, fast booking",
      canonical: "https://www.chamundacab.com/booking",
    },
    "/places": {
      title: "Places - Chamunda Cab",
      description: "Discover popular destinations.",
      keywords: "ChamundaCab places, popular destinations, taxi travel spots, Gujarat travel",
      canonical: "https://www.chamundacab.com/places",
    },
    "/vehicles": {
      title: "Vehicles - Chamunda Cab",
      description: "Check out our range of vehicles.",
      keywords: "ChamundaCab vehicles, taxi vehicle types, Hatchbacks, Sedans, SUVs",
      canonical: "https://www.chamundacab.com/vehicles",
    },
  };

  const { title, description, keywords, canonical } = seoMap[location.pathname] || {
    title: "Chamunda Cab",
    description: "Reliable and affordable taxi services.",
    keywords: "ChamundaCab taxi, taxi booking, reliable taxi service",
    canonical: "https://www.chamundacab.com",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEO;
