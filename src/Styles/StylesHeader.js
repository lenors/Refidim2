import styled from "styled-components";
import { Link } from "react-router-dom";
import Fundo from "../Assets/fundo.png"

export const Menu = styled.div`
border:solid;
width:100%;
height:52vh;
background-image:url(${Fundo});
display:flex;
`
export const Menu2 = styled.div`
border:solid white;
display:flex;
height:12vh;
width:100%;
justify-content:space-around;
margin-top:2vh;

`