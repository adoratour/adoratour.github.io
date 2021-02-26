import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const ShopItemWrapper = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 30px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }

  &.has_btn {
    .button_group {
      @media only screen and (min-width: 481px) {
        position: absolute;
        top: 5px;
        padding-top: 3px;
      }
    }
  }

  &:hover {
    box-shadow: 0 6px 12px ${themeGet('boxShadow.2', 'rgba(0, 0, 0, 0.16)')};

    .content_wrapper {
      border-color: transparent;
    }

    &.has_btn {
      .meta_wrapper {
        .rating {
          @media only screen and (min-width: 481px) {
            opacity: 0;
            visibility: hidden;
          }
        }
      }

      @media only screen and (min-width: 481px) {
        .button_group {
          top: 19px;
          opacity: 1;
          visibility: visible;
        }
      }
    }

    .react-multiple-carousel__arrow {
      opacity: 1;
      visibility: visible;
    }

    .react-multi-carousel-dot-list {
      bottom: 0;
    }
  }
`;

export const FavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 8px;
  z-index: 9;
`;

export const ImageWrapper = styled.div`
  > img {
    max-width: 100%;
    height: auto;
  }

  .react-multi-carousel-list {
    min-height: 150px;
    background-color: #e9e8ec;
  }

  .react-multi-carousel-item {
    height: 170px;
  }

  .react-multiple-carousel__arrow {
    top: 0;
    width: 22%;
    height: 100%;
    border-radius: 0;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 1;

    &::before {
      font-weight: 700;
    }
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
    background: linear-gradient(
      to left,
      transparent 0%,
      rgba(0, 0, 0, 0.25) 100%
    );
    &:hover {
      background: linear-gradient(
        to left,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      );
    }
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.25) 100%
    );
    &:hover {
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      );
    }
  }

  .react-multi-carousel-dot-list {
    position: absolute;
    bottom: -30%;
    left: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.25) 100%
    );
    transition: bottom 0.3s ease;
  }

  .react-multi-carousel-dot {
    align-items: center;

    button {
      width: 6px;
      height: 6px;
      border: 0;
      background-color: ${themeGet('color.3', '#E9E8E8')};
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }
  }

  .react-multi-carousel-dot--active {
    button {
      width: 8px;
      height: 8px;
      background-color: ${themeGet('color.1', '#ffffff')};
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 15px;
  border-width: 1px;
  border-style: solid;
  border-top-width: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-color: ${themeGet('border.3', '#E6E6E6')};
  transition: border-color 0.2s ease;
`;

export const LocationArea = styled.div`
  color: ${themeGet('color.1', '#ffffff')};
  font-size: 13px;
  font-weight: 400;
  white-space: nowrap;
  ${'' /* width: 100%; */}
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: 15px;
  left: 8px;
  z-index: 9;

`;

export const MetaInfo = styled.div`
  .gmeaIe {
    padding : 0;
  }
  ul > li > svg {
    vertical-align: middle;
    margin-right: 3px;
  }
`;

export const BookingArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    height: 30px;
    font-size: 14px;
    font-weight: 500;
    border-color: ${themeGet('primary.0', '#008489')};
    background-color: ${themeGet('primary.0', '#008489')};
    svg {
      width: 18px;
      height: 18px;
      margin-right: 2px;
    }
    &::after {
      content: none;
    }
    &:hover,
    &:focus {
      border-color: #008489d1;
      background-color: #008489d1;
    }
  }
`;

export const TitleArea = styled.div`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 2px;
  ${'' /* white-space: nowrap; */}
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
    margin: 4px 0 5px;
  }

  a {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 2px;
    @media only screen and (max-width: 480px) {
      font-size: 15px;
      margin: 4px 0 5px;
    }
    &:hover {
      color: ${themeGet('primary.0', '#008489')};
    }
  }
`;

export const PriceArea = styled.div`
  color: ${themeGet('primary.0', '#008489')};
  font-size: 17px;
  font-weight: 600;
  margin-top: 1px;
  white-space: nowrap;
  ${'' /* width: 100%; */}
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default ShopItemWrapper;