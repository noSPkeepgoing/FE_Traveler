import DetailPage from './_component/detail-page/detailPage';
import React from 'react';
import { TDetailPageParam } from './detailPageType';

function page({ params }: TDetailPageParam) {
  return <DetailPage params={params.id} />;
}

export default page;
