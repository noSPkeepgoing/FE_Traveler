import DetailPage from './_component/detail-page/detailPage';
import React from 'react';

function page({ params }: { params: number }) {
  return <DetailPage params={params.id} />;
}

export default page;
