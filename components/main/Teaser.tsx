import React from 'react';
import { css, styled } from 'stitches.config';
import Button from '../common/Button';

declare const window: typeof globalThis & {
  IMP: any;
};
const requestPay = () => {
  const IMP = window.IMP;
  IMP.init('imp23026546');

  IMP.request_pay(
    {
      // param
      pg: `kcp.T0000`,
      pay_method: 'card',
      // m_redirect_url: 'http://https://2023.pycon.kr/payments/complete',
      merchant_uid: 'ORD20180131-00000',
      name: '노르웨이 회전 의자',
      amount: 100,
      buyer_email: 'gildong@gmail.com',
      buyer_name: '홍길동',
      buyer_tel: '010-4242-4242', // 필수
      buyer_addr: '서울특별시 강남구 신사동',
      buyer_postcode: '01181',
    },
    (rsp: any) => {
      // callback
      if (rsp.success) {
        console.log('결제 성공');
        console.log(rsp);
      } else {
        console.log('결제 실패');
        console.log(rsp);
      }
    }
  );
};

const TextBox = styled('div', {
  fontSize: '80px',
  fontWeight: 'bold',
  paddingTop: 80,
  paddingLeft: 0,
  paddingRight: 0,
  height: 'calc(100vh - 80px)',

  '@bp2': {
    paddingTop: 220,
    paddingLeft: 40,
    paddingRight: 40,
  },
});

const Title = styled('div', {
  whiteSpace: 'pre-wrap',
  fontSize: '12vw',
  '@bp2': {
    fontSize: 'inherit',
    whiteSpace: 'normal',
  },
});

const Date = styled('div', {
  fontSize: '8vw',
  marginTop: 20,
  '@bp2': {
    marginTop: 0,
    fontSize: 'inherit',
  },
});

const Location = styled('div', {
  fontSize: '6vw',

  '@bp2': {
    fontSize: 'inherit',
  },
});
const Teaser = () => {
  return (
    <>
      <TextBox>
        <Button size="big" onClick={requestPay}>
          결제하기
        </Button>
        <Title>{'다시, \n우리, \n파이썬'}</Title>
        <Date>2023.08.11-13</Date>
        <Location>COEX 그랜드볼룸 & 아셈볼룸</Location>
      </TextBox>
    </>
  );
};

export default Teaser;
