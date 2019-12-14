import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { AxiosWAuth } from "../Auth/AxiosWAuth";
// import Cards from '../components/Cards';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    AxiosWAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log('colors', res)
        setColorList(res.data)
      })
      .catch(err => console.log(err.res))
  }, []);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
