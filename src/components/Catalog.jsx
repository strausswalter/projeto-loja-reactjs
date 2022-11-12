// import React, { useEffect, useState } from "react";

import Catalog from "../pages/catalog/Catalog";

const Catalog = () => {
  const products = [
    {
      name: 'Produto 1', 
      description: 'Loremsdf lçkasjdf lasjfd dsfl kjasdf lasdjf ',
      
    }  
  ];

  return products.map((product) => {
    return <h1>Catalogo modificado dentro da branch catalogo</h1>;
  });
};

export default Catalog;
