import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import { StyledFooter, StyledFootContent } from "./styles";

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
  return (
    <StyledFooter data-theme="dark" p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1120px;"]}>
        <StyledFootContent>
          <div className="coin_detail">1</div>
          <div className="relate_detail">
            <div className="about_box">222222222222222222222222222222222222222222222222222222222222222</div>
            <div className="communlty_box">
              <div className="communlty_icon">3333333333333333333</div>
              <div className="communlty_txt">44444444444444444444</div>
            </div>
          </div>
        </StyledFootContent>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
