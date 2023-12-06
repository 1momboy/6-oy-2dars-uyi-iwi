/* eslint-disable react/prop-types */

import Card from "./Card";


export default function Cards({products}) {
  return (
      <div>
          {products.map((item) => <Card key={item.id} {...item} />)}
    </div>
  )
}
