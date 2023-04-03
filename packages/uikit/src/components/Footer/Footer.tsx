import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledText,
  StyledFootContent,
} from "./styles";

import { Button } from "../Button";
import CakePrice from "../CakePrice/CakePrice";
import LangSelector from "../LangSelector/LangSelector";
import { ArrowForwardIcon, LogoWithTextIcon } from "../Svg";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { FooterProps } from "./types";

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  console.log("items", items);
  return (
    <StyledFooter data-theme="dark" p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1120px;"]}>
        <StyledFootContent>
          <div className="coin_detail">
            <div className="coin_wrapper">
              <div className="coin_price">
                <div className="coin_img">
                  <img src="/images/bitbank/logo.png" alt="" />
                </div>
                <div className="price_box">
                  <span>BT</span>
                  <p>0.203</p>
                </div>
              </div>
              <div className="coin_total_list">
                <div className="coin_list">
                  <p>Max Supply</p>
                  <span>600 000 000</span>
                </div>
                <div className="coin_list">
                  <p>Total supply</p>
                  <span>354 911 230</span>
                </div>
                <div className="coin_list">
                  <p>Circulating supply</p>
                  <span>289 701 642</span>
                </div>
                <div className="coin_list">
                  <p>Total Burned</p>
                  <span>42 114 754</span>
                </div>
                <div className="coin_list">
                  <p>Market Cap</p>
                  <span>$0</span>
                </div>
              </div>
              <div className="coin_buy">
                <div className="add_coin">
                  <img src="/images/bitbank/metamask-transparent.svg" alt="" />
                </div>

                <Link href="/swap">
                  <Button as="a">Buy BT</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relate_detail">
            <div className="about_box">
              {items?.map((item) => (
                <StyledList key={item.label}>
                  <StyledListItem>{item.label}</StyledListItem>
                  {item.items?.map(({ label, href, isHighlighted = false }) => (
                    <StyledListItem key={label}>
                      {href ? (
                        <Link
                          data-theme="dark"
                          href={href}
                          target="_blank"
                          rel="noreferrer noopener"
                          color="text"
                          bold={false}
                        >
                          {label}
                        </Link>
                      ) : (
                        <StyledText>{label}</StyledText>
                      )}
                    </StyledListItem>
                  ))}
                </StyledList>
              ))}
            </div>
            <div className="communlty_box">
              <h2>Community</h2>
              <div className="communlty_icon">
                <StyledSocialLinks />
              </div>
              <div className="communlty_txt">
                <div className="marketplace txt_box">
                  <div className="market_box">
                    <img src="/images/bitbank/Market-svg.png" alt="" />
                  </div>
                  <span>NFT Marketplace</span>
                </div>
                <div className="certik txt_box">
                  <img src="/images/bitbank/CertikAudited.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </StyledFootContent>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
