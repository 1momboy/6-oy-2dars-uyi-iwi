/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"


export default function Single({products}) {
    const { id } = useParams();
    const singleProduct = products.find((item) => item.id === id);
    const { img, title, price } = singleProduct;
  return (
      <div>
          <img src={img} alt="" />
          <h2>{ title}</h2>
          <h2>{ price}</h2>
      </div>
  )
}
