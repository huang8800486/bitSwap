import React from 'react'
import styled from 'styled-components'
import { getMedia } from '../../styleds'
import PartnersSwiper from './PartnersSwiper'

const PartnersWrapper = styled.div`
  width: 100%;
  position: relative;
  .partner_content {
    width: 100%;
    position: relative;
    padding-bottom: ${getMedia(['16px', '36px', '56px'])};
    .partner_title {
      width: 100%;
      position: relative;
      font-size: ${getMedia(['24px', '28px', '32px'])};
      text-align: center;
      margin-bottom: ${getMedia(['24px', '28px', '32px'])};
    }
  }
`

export default function ExchangesPartners() {
  const ExchangeList = [
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
    {
      image: '/images/bitbank/partner/LBank-gray.png',
      activeImage: '/images/bitbank/partner/LBank.png',
    },
  ]
  const PartnersList = [
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
    {
      image: '/images/bitbank/partner/Outer-Ring-gray.png',
      activeImage: '/images/bitbank/partner/Outer-Ring.png',
    },
  ]
  return (
    <PartnersWrapper>
      <div className="partner_content">
        <div className="partner_title">Exchanges</div>
        <div className="partner_list">
          <PartnersSwiper swiperList={ExchangeList} />
        </div>
      </div>
      <div className="partner_content">
        <div className="partner_title">Bitwap Partners</div>
        <div className="partner_list">
          <PartnersSwiper swiperList={PartnersList} />
        </div>
      </div>
    </PartnersWrapper>
  )
}
