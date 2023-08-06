import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initialLights = [
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ];
  const [lights, setLights] = useState(initialLights);

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function lightCount(){
    let x=0;
    lights.forEach((light)=>(light.isOn? (x+=1):x));
    return x;
  }

  function onAllLightsOff(){
    setLights(
      lights.map((light)=>
      light.isOn ?{...light, isOn:false}:light))
  }

  function onAllLightsOn(){
    setLights(
      lights.map((light)=>light.isOn === false ?{...light,isOn:true}:light))
  }
  return (
    <Layout isDimmed={lightCount() === 0}>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} onToggle={handleToggle} lightCount={lightCount}
      onAllLightsOff={onAllLightsOff}
      onAllLightsOn={onAllLightsOn}/>
      
    </Layout>
  );
}
