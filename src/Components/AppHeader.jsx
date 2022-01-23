import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import {
  AiFillBank,
  AiFillHtml5,
  AiFillMessage,
  AiOutlineAlipayCircle,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const AppHeader = () => {
    
  return (
    <div>
      <div>
        <BsFillGridFill />
        <AiFillBank />
        <h3>Gmail</h3>
      </div>
      <div>
        <input />
      </div>
      <div>
        <AiFillHtml5 />
        <AiFillMessage />
        <AiOutlineAlipayCircle />
        <AiFillTwitterSquare />
      </div>
    </div>
  );
};
