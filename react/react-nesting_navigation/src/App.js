import "./styles.css";

import Avatar from "./components/avatar.js";
import Header from "./components/Header.js";
import Link from "./components/link.js";
import Logo from "./components/logo.js";
import Navigation from "./components/nav.js";

export default function App() {
  return (
    <>
      <Header>
        <Logo src="./img/logo.jpg" alt="Logo" />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>Content goes here</main>
    </>
  );
}
