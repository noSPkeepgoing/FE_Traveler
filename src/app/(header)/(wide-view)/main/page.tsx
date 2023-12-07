'use client';

import React from 'react';
import CategoryList from './_components/category-list';
import ItemList from './_components/item-list';
import useMain from '@/hooks/main/useMain';

function MainPage() {
  const { accommodationData, isLoading, fetchNextPage, hasNextPage } =
    useMain();

  return (
    <>
      <CategoryList />
      <ItemList
        data={accommodationData}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
}

export default MainPage;
