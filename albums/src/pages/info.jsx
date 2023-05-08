import React from "react";

export default function Info() {
  let userData = localStorage.getItem("currentUser");
  userData = JSON.parse(userData);

  return (
    <div className="container">
      <h1>User Data</h1>
      <div className="data">
        <p>
          <span>ID:</span> {userData.id}
        </p>
        <p>
          <span>Name:</span> {userData.name}
        </p>
        <p>
          <span>Username:</span> {userData.username}
        </p>
        <p>
          <span>Email:</span> {userData.email}
        </p>
        <div className="address">
          <p>
            <span>Address:</span>
          </p>
          <ul>
            <li>
              <span>Street:</span> {userData.address.street}
            </li>
            <li>
              <span>Suite:</span> {userData.address.suite}
            </li>
            <li>
              <span>City:</span> {userData.address.city}
            </li>
            <li>
              <span>Zipcode:</span> {userData.address.zipcode}
            </li>
            <li>
              <span>Geo:</span>
            </li>
            <ul>
              <li>
                <span>Lat:</span> {userData.address.geo.lat}
              </li>
              <li>
                <span>Lng:</span> {userData.address.geo.lng}
              </li>
            </ul>
          </ul>
        </div>
        <p>
          <span>Phone:</span> {userData.phone}
        </p>
        <p>
          <span>Website:</span> {userData.website}
        </p>
        <div className="company">
          <p>
            <span>Company:</span>
          </p>
          <ul>
            <li>
              <span>Name:</span> {userData.company.name}
            </li>
            <li>
              <span>Catch Phrase:</span> {userData.company.catchPhrase}
            </li>
            <li>
              <span>BS:</span> {userData.company.bs}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
