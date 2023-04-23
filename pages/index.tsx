import Teaser from '@/components/main/Teaser';
import type { NextPage } from 'next';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <SeoHeader
        title={Routes.HOME.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <Teaser />
    </>
  );
};

export default Home;
