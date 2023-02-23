import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)`
  text-align: center;
  background-color: #808080;
  height: 50px;

`;
export default function Footer() {
  return (
    < Container>
      <h1>Developed By Mayur Chavan</h1>
    </ Container>
  );
}
