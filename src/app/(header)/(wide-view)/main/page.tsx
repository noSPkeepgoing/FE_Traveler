'use client';

import React, { useState } from 'react';
import CategoryList from './_components/category-list';
import ItemList from './_components/item-list';

function MainPage() {
  const [isSelected, setIsSelected] = useState<number>(1);

  const handleSelect = (category: number) => {
    setIsSelected(category);
  };

  return (
    <>
      <CategoryList isSelected={isSelected} handleSelect={handleSelect} />
      <ItemList />
    </>
  );
}

export default MainPage;
