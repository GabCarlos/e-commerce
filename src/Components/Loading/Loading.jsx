import React from "react";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import './Loading.css';

//Tela de Loading para caso o site demore para carregar algo:
function Loading () {
  return (<AiOutlineLoading3Quarters className="loading"/>)
};

export default Loading;