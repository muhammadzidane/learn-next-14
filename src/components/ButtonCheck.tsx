"use client";

import React from 'react'

const ButtonCheck = () => {
  const onClickCheck = () => {
    console.log("ok");
  };

  return (
    <button onClick={onClickCheck}>ButtonCheck</button>
  )
}

export default ButtonCheck