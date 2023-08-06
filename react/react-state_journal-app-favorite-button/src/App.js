import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
  const initialEntries = [];
  const [entries, setEntries] = useState(initialEntries);

  const handleNewEntryCallback = (newEntry) => {

    const date = new Date().toLocaleDateString("en-us", { dateStyle: "medium" });

    const entryWithDate={...newEntry, date: date, id: uuidv4()};

    setEntries([entryWithDate, ...entries]);
  };

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm handleNewEntryCallback={handleNewEntryCallback} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
