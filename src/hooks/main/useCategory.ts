'use client';

import { useRouter, useSearchParams } from 'next/navigation';

function useCategory() {
  const searchParam = useSearchParams();
  const router = useRouter();
  const selectedCategoryNumber = searchParam.get('category');

  const handleSelectCategory = (category: string) => {
    router.push(`/main?category=${category}`);
  };

  return {
    selectedCategoryNumber,
    handleSelectCategory,
  };
}

export default useCategory;
