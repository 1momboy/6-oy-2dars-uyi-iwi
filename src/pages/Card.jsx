/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export default function Card({ id, img, title, price }) {
  const navigate = useNavigate();
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h2>{price}</h2>
      <button onClick={() => navigate(`/single/${id}`)}>more</button>
    </div>
  );
}
