'use client';

import { useSearchParams } from 'next/navigation';
import { useGetAccommodations } from './../../queries/main/index';
import React, { useEffect, useMemo } from 'react';

function useMain() {
  const searchParam = useSearchParams();
  const selectedCategoryNumber = searchParam.get('category') || '1';

  const { data, fetchNextPage, hasNextPage, isLoading, refetch, remove } =
    useGetAccommodations(selectedCategoryNumber);

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
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
}

export default useMain;
