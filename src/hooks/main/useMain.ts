'use client';

import { useGetAccommodations } from './../../queries/main/index';
import React, { useEffect, useMemo, useState } from 'react';

function useMain() {
  const [selectedCategoryNumber, setSelectedCategoryNumber] = useState(1);

  const { data, fetchNextPage, hasNextPage, isLoading, refetch, remove } =
    useGetAccommodations(selectedCategoryNumber);

  const handleSelect = (category: number) => {
    setSelectedCategoryNumber(category);
  };

  useEffect(() => {
    refetch();

    return () => {
      remove();
    };
  }, [selectedCategoryNumber]);

  const accommodationData = useMemo(() => {
    return data?.pages.flatMap((page) => page.data.accommodations);
  }, [data]);

  return {
    accommodationData,
    selectedCategoryNumber,
    handleSelect,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
}

export default useMain;
