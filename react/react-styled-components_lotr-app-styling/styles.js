import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google";
import styled from "styled-components";
import Image from "next/image"
import {useState} from "react";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});
 const styledImage = styled(Image)`
  background-color: var(--book-background-color);
  box-shadow: var(--book-box-shadow);
`;

const lightColor={
  primaryColor:"#FF0000",
  secondaryColor: "#00FF00",
};

const darkColor={
 primaryColor: "#0000FF",
secondaryColor: "#FFFF00",
} 

export const GlobalStyle = createGlobalStyle`
 :root {
    --book-background-color:rgba(248, 248, 248, 1);
    --book-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${lora.style.fontFamily}, serif;
  }
`;
