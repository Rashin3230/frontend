import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";
import "../styles/user-dashboard.css";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const res = await fetch(`${BASE_URL}/tours`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setTours(data);
        setIsLoading(false);
      } else {
        throw new Error("Failed to fetch tours");
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect Triggerd");
    if (user) {
      fetchTours();
    }
  }, [user]);

  const handleCancelTour = async (tourId) => {
    try {
      const res = await fetch(`${BASE_URL}/tours/${tourId}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        // Remove the canceled tour from the state
        setTours((prevTours) =>
          prevTours.filter((tour) => tour._id !== tourId)
        );
        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(tours);
  return (
    <div className="user-dashboard">
      <h2>Welcome, {user.username}!</h2>
      <h3>Your Booked Tours:</h3>
      {Array.isArray(tours) && tours.length > 0 ? (
        <ul className="tour-list">
          {tours.map((tour) => (
            <li key={tour._id} className="tour-item">
              <div className="tour-details">
                <h4>{tour.name}</h4>
                <p>{tour.description}</p>
              </div>
              <div className="tour-actions">
                <Link to={`/tour/${tour._id}`} className="btn btn-primary">
                  View Details
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCancelTour(tour._id)}
                >
                  Cancel Tour
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tours found.</p>
      )}
    </div>
  );
};

export default UserDashboard;
