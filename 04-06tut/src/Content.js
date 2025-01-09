import { useState } from "react";

const Content = () => {
  //name is like the getter and setName is the setter
  const [name, setName] = useState("Varvara");
  const[count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Varvara"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  const handleClick2 = () => {
    console.log(count)
  }

  return (
    <main>
      {/*() after fxn calls it immediately, but no () or () with an annonymous fxn are called after process*/}
      {/*The annon fxn gets called after process and it then calls the inside fxn */}
      {/*ex. <button onClick={(e) => handleClick3(e)}>Click It</button>*/}
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click It</button>
    </main>
  )
}

export default Content