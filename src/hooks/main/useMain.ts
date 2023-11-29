'use client';
import { useGetAccommodations } from './../../queries/main/index';
import React, { useEffect, useState } from 'react';

function useMain() {
  const [isSelected, setIsSelected] = useState(1);

  const {
    data: accommodationData,
    refetch,
    isLoading,
  } = useGetAccommodations(isSelected);

  const handleSelect = (category: number) => {
    setIsSelected(category);
  };
  useEffect(() => {
    refetch();
  }, [isSelected]);

  return {
    accommodationData,
    isSelected,
    handleSelect,
    isLoading,
  };
}

export default useMain;
