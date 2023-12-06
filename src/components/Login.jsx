/* eslint-disable react/prop-types */

export default function Login({ name, setName, psw, setPsw, login }) {
  return (
    <div>
      <form action="" onSubmit={login}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={psw}
          onChange={(e) => setPsw(e.target.value)}
        />
        <button>login</button>
      </form>
    </div>
  );
}
