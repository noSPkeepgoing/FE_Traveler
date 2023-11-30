'use client';

import { useGetAccommodations } from './../../queries/main/index';
import React, { useEffect, useMemo, useState } from 'react';

function useMain() {
  const [isSelected, setIsSelected] = useState(1);

  const { data, fetchNextPage, hasNextPage, isLoading, refetch, remove } =
    useGetAccommodations(isSelected);

  const handleSelect = (category: number) => {
    setIsSelected(category);
  };

  useEffect(() => {
    refetch();

    return () => {
      remove();
    };
  }, [isSelected]);

  const accommodationData = useMemo(() => {
    return data?.pages.flatMap((page) => page.data.accommodations);
  }, [data]);

  return {
    accommodationData,
    isSelected,
    handleSelect,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
}

export default useMain;
