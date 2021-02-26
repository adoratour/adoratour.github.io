import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const BlogItemWrapper = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 30px;
  border-width: 1px;
  border-style: solid;
  border-color: ${themeGet('border.3', '#E6E6E6')};

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }

  &:hover {
    box-shadow: 0 6px 12px ${themeGet('boxShadow.2', 'rgba(0, 0, 0, 0.16)')};

    .content_wrapper {
      border-color: transparent;
    }
  }
`;

export const ImageWrapper = styled.image`
> img {
    max-width: 100%;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  padding: 15px;
  ${'' /* border-width: 1px;
  border-style: solid; */}
  ${'' /* border-top-width: 0; */}
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-color: ${themeGet('border.3', '#E6E6E6')};
  transition: border-color 0.2s ease;
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

export const Description = styled.text`
  color: ${themeGet('text.1', '#909090')};
  font-size: 14px;
  font-weight:500;
`;

export const ActionWrapper = styled.div`
  ${'' /* margin-top: 10px; */}
`;
export const ActionIcon = styled.div`
  display: flex;
  justify-content: space-around;
  .ant-btn-icon-only {
    padding-top: 5px;
    border:none;
  }
`;

export const UserWrapper = styled.div`
  margin: 8px;
  display: flex;
`;

export const Avatar = styled.div`
  margin-right: 8px;
`;

export const UserInfo = styled.div``;
export const UserName = styled.div`
  font-weight:600;
`;
export const TimeStamp = styled.div`
  font-size:12px;
  margin-right: 5px;
`;
export const Meta = styled.div`
  display: flex;
`;

export default BlogItemWrapper;