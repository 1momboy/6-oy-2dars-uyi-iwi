/* eslint-disable react/prop-types */

export default function Add({ addProduct, title, setTitle, price, setPrice }) {
  return (
    <div>
      <form action="" onSubmit={addProduct}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}
