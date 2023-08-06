import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "Apple", color: "red" },
    { id: 1, name: "Plum", color: "purple" },
    { id: 2, name: "Banana", color: "yellow" },
    { id: 3, name: "Grape", color: "green" },
    { id: 4, name: "Cherry", color: "pink" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
