import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName isBlack />
      <BoxWithClassName />
      <BoxWithStyledComponents isBlack />
      <BoxWithStyledComponents />
    </div>
  );
}
