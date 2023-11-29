'use client';

import React from 'react';
import CategoryList from './_components/category-list';
import ItemList from './_components/item-list';
import useMain from '@/hooks/main/useMain';

function MainPage() {
  const { isSelected, handleSelect, accommodationData } = useMain();

  return (
    <>
      <CategoryList isSelected={isSelected} handleSelect={handleSelect} />
      <ItemList data={accommodationData?.data} />
    </>
  );
}

export default MainPage;
