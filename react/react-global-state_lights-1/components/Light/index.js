import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ light,isOn,name,onToggle }) {
  //const [isOn, setIsOn] = useState(false);

  

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(light.id);
      }}
      onToggle={()=>onToggle(light.id)}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
