import { useMatchBreakpoints } from "@pancakeswap/uikit";
import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const getMedia = (value: string[]) => () => {
  const { isMobile, isTablet } = useMatchBreakpoints();
  return isMobile ? value[0] : isTablet ? value[1] : value[2];
};
export const getMedia2 = (value: string[]) => () => {
  const { isXl, isLg, isMd, isXs, isSm, isXxl } = useMatchBreakpoints();
  let result = "";
  if (isXxl) {
    result = value[5];
  } else if (isXl) {
    result = value[4];
  } else if (isLg) {
    result = value[3];
  } else if (isMd) {
    result = value[2];
  } else if (isXs) {
    result = value[1];
  } else if (isSm) {
    result = value[0];
  }
  return result;
};
export const StyledFooter = styled(Flex)`
  background: #000000;
  color: #fff;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${darkColors.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${darkColors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  border-bottom: 1px solid ${darkColors.cardBorder};
`;

export const StyledText = styled.span`
  color: ${darkColors.text};
`;
export const StyledFootContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .coin_detail {
    width: ${getMedia2(["100%", "100%", "100%", "50%", "424px", "424px"])};
    background: rgba(255, 255, 255, 0.1);
  }
  .relate_detail {
    width: ${getMedia2(["100%", "100%", "100%", "45%", "49%", "55%"])};
    display: flex;
    flex-wrap: wrap;
    .about_box {
      display: flex;
      justify-content: space-between;
      width: ${getMedia2(["100%", "100%", "100%", "100%", "100%", `calc(100% - 172px)`])};
    }
    .communlty_box {
      width: ${getMedia2(["100%", "100%", "100%", "100%", "100%", `172px`])};
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .communlty_icon {
        width: ${getMedia2(["50%", "50%", "50%", "100%", "100%", `100%`])};
      }
      .communlty_txt {
        width: ${getMedia2(["50%", "50%", "50%", "100%", "100%", `100%`])};
      }
    }
  }
`;
