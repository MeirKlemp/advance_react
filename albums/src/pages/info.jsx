import React, { useContext } from "react";
import { UserContext } from "../App";

export default function Info() {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      <h1>User Data</h1>
      <div className="data">
        <p>
          <span>ID:</span> {user.id}
        </p>
        <p>
          <span>Name:</span> {user.name}
        </p>
        <p>
          <span>Username:</span> {user.username}
        </p>
        <p>
          <span>Email:</span> {user.email}
        </p>
        <div className="address">
          <p>
            <span>Address:</span>
          </p>
          <ul>
            <li>
              <span>Street:</span> {user.address.street}
            </li>
            <li>
              <span>Suite:</span> {user.address.suite}
            </li>
            <li>
              <span>City:</span> {user.address.city}
            </li>
            <li>
              <span>Zipcode:</span> {user.address.zipcode}
            </li>
            <li>
              <span>Geo:</span>
            </li>
            <ul>
              <li>
                <span>Lat:</span> {user.address.geo.lat}
              </li>
              <li>
                <span>Lng:</span> {user.address.geo.lng}
              </li>
            </ul>
          </ul>
        </div>
        <p>
          <span>Phone:</span> {user.phone}
        </p>
        <p>
          <span>Website:</span> {user.website}
        </p>
        <div className="company">
          <p>
            <span>Company:</span>
          </p>
          <ul>
            <li>
              <span>Name:</span> {user.company.name}
            </li>
            <li>
              <span>Catch Phrase:</span> {user.company.catchPhrase}
            </li>
            <li>
              <span>BS:</span> {user.company.bs}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
