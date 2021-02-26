import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterWrapper = styled.footer`
  background-color: ${themeGet('color.17', '#333')};
  padding-top: 20px;
  display: block;
  color: #888;

  @media only screen and (max-width: 480px) {
    padding: 60px 0 50px;
  }

   /* submit button style */
   button[type='submit'].ant-btn {
    ${'' /* min-width: 157px; */}
    ${'' /* height: 60px; */}
    color: ${themeGet('color.1', '#ffffff')};
    background-color: ${themeGet('primary.0', '#008489')};
    border-radius: 0 3px 3px 0;
    border: 0;
    box-shadow: none;
    font-size: 15px;
    font-weight: 700;
    text-shadow: none;

    @media only screen and (max-width: 991px) {
      min-width: 100%;
      border-radius: 0 0 3px 3px;
    }

    @media only screen and (max-width: 480px) {
      height: 47px;
    }

    &::after {
      display: none;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const SubcribeArea = styled.div`
  padding-bottom: 15px;
  border-bottom: 0.5px dashed rgba(255,255,255,0.2);
  border-width: 100%;
  h2 {
    margin-bottom: 0;
    color: #888;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    @media only screen and (max-width: 768px) {
    text-align:center;
    }
  }
`;
export const MainFooterArea = styled.div`
`;
export const SocialArea = styled.div`
  img {
    height: 35px;
    width: 35px;
  }
  ul {
  justify-content: center;
  display: flex;
  }
  li {
    display:inline;
    margin: 5px;
  }
`;

export const LogoWrapper = styled.div`
  display: block;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

export const RowArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const GrayFooter = styled.div`
  background-color: rgba(0,0,0,0.2);
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 25%;
  position: relative;
  li {
    margin-top : 5px;
    font-size: 14px;
  };
  @media only screen and (max-width: 992px) {
    max-width: 100%;
    flex: 0 0 100%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    flex: 0 0 100%;
  }
  @media only screen and (max-width: 480px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const NotGayFooter = styled.div`
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  width:75%;
  @media only screen and (max-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media only screen and (max-width: 480px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  h3 {
    margin-bottom: 15px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;
export const FooterPayment = styled.div`
  padding-top: 15px;
  img {
    margin-right:5px;
  }
  li {
    display :inline
  }
`;

export const MenuWrapper = styled.div`
  margin-top: 51px;
  padding-left: 10px;

  @media only screen and (max-width: 480px) {
    margin-top: 29px;
    padding-left: 0;
  }

  ul,
  .ant-menu,
  ul.ant-menu {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;

    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }

    li {
      margin: 0 30px;
      padding: 0;
      height: auto;
      margin-bottom: 0 !important;

      @media only screen and (max-width: 480px) {
        margin: 0 7px;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &.ant-menu-item-selected {
        background-color: transparent;
      }

      color: ${themeGet('text.0', '#2C2C2C')};
      font-size: 15px;
      line-height: 18px;
      font-weight: 700;
      transition: color 0.2s ease-in-out;

      a {
        color: ${themeGet('text.0', '#2C2C2C')};
        transition: color 0.2s ease-in-out;
        &:hover {
          color: ${themeGet('primary.0', '#008489')};
        }
      }
    }
  }
`;

export const CopyrightArea = styled.div`
  color: ${themeGet('text.1', '#909090')};
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  text-align: center!important;
  margin-top: 59px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 10px 0;

  @media only screen and (max-width: 480px) {
    margin-top: 14px;
  }
`;

export const SecondaryFooter = styled.div`
  @media only screen and (max-width: 1200px) {
    height: 74px;
  }
`;

export default FooterWrapper;
