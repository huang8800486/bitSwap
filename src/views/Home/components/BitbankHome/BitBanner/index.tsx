import React from 'react'
import styled, { useTheme } from 'styled-components'
import Link from 'next/link'
import { Button, Text } from '@pancakeswap/uikit'
import { Wrapper } from '../styleds'
import { BannerWrapper } from './styleds'

export default function BitBanner() {
  return (
    <Wrapper>
      <BannerWrapper>
        <div className="banner_text">
          <div className="b_text">
            <h1>Trade, Earn, Refer on the most progressive DEX on BNB Chain</h1>
            <div className="p_list">
              <p>enjoy the lowest exchange fee, profitable features & Multi-type Referral program</p>
            </div>
            <div className="start_trade">
              <Link href="/swap">
                <Button as="a">Trade Now</Button>
              </Link>
            </div>
          </div>
          <div className="b_img">
            <img src="/images/bitbank/fly.png" alt="" />
          </div>
        </div>
        <div className="banner_exchange_title">
          <div className="exchange_box">
            <div className="exch_item">
              <div className="exch_icon">
                <img src="/images/bitbank/cornerleftdown.png" alt="" />
              </div>
              <div className="exch_text">
                <h2>The Lowest Trade Fee in the DeFi Space</h2>
                <span>0.2%</span>
              </div>
            </div>
            <div className="exch_item">
              <div className="exch_icon">
                <img src="/images/bitbank/money-exchange-rate.png" alt="" />
              </div>
              <div className="exch_text">
                <h2>Exchange Fee Reimbursement</h2>
                <span>up to 50%</span>
              </div>
            </div>
          </div>
          <div className="exchange_list">
            <div className="bnb_logo">
              <img src="/images/bitbank/bsc.svg" alt="" />
            </div>
            <div className="bnb_text">
              <div className="txt txt1">
                <p>Total Value Locked</p>
                <span>$257 808 771</span>
              </div>
              <div className="txt txt2">
                <p>Total Trading Volume</p>
                <span>$52 888 349 912</span>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_market_list">
          <div className="market_list">
            <div className="market_item">
              <div className="market_icon">
                <img src="/images/bitbank/usdt.png" alt="" />
              </div>
              <div className="market_text">
                <span>USDT</span>
                <p>泰达币</p>
              </div>
            </div>
            <div className="market_item">
              <div className="market_icon">
                <img src="/images/bitbank/usdt.png" alt="" />
              </div>
              <div className="market_text">
                <span>USDT</span>
                <p>泰达币</p>
              </div>
            </div>
            <div className="market_item">
              <div className="market_icon">
                <img src="/images/bitbank/usdt.png" alt="" />
              </div>
              <div className="market_text">
                <span>USDT</span>
                <p>泰达币</p>
              </div>
            </div>
            <div className="market_item">
              <div className="market_icon">
                <img src="/images/bitbank/usdt.png" alt="" />
              </div>
              <div className="market_text">
                <span>USDT</span>
                <p>泰达币</p>
              </div>
            </div>
            <div className="market_item">
              <div className="market_icon">
                <img src="/images/bitbank/usdt.png" alt="" />
              </div>
              <div className="market_text">
                <span>USDT</span>
                <p>泰达币</p>
              </div>
            </div>
          </div>
          <div className="market_all">
            <Link href="/swap">
              <Text as="a">
                All Markets <img src="/images/bitbank/right.png" alt="" />
              </Text>
            </Link>
          </div>
        </div>
      </BannerWrapper>
    </Wrapper>
  )
}
