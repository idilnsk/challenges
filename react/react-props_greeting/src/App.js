import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Greeting name="Idil" />
    </div>
  );
}
function Greeting({ name }) {
  const coaches = ["Klaus", "Jan", "Sven"];
  if (coaches.includes(name)) {
    return <h1>Hello,coach!</h1>;
  } else {
    return <h1>Hello,{name}!</h1>;
  }
}
