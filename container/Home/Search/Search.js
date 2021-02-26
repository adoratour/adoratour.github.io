import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/UI/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import GlideCarousel, {
  GlideSlide,
} from 'components/UI/GlideCarousel/GlideCarousel';
import SearchForm from './SearchForm';
import FlightSearchForm from '../FlightSearch/FlightSearchForm';
import TripSearchForm from '../TripSearch/TripSearchForm';
import CruiseSearchForm from '../CruiseSearch/CruiseSearchForm';
import TrainSearchForm from '../TrainSearch/TrainSearchForm';
import CarSearchForm from '../CarRental/CarSearchForm';
// import SimSearchForm from '../SimSearchForm/SimSearchForm';
import TienIchDuLich from '../TienIchDuLich/TienIchDuLich';
import BannerWrapper, { SearchWrapper } from './Search.style';
// slider images
import bannerBg1 from 'assets/images/banner/1.jpg';
import bannerBg2 from 'assets/images/banner/2.jpg';
import bannerBg3 from 'assets/images/banner/3.jpg';

import { FaCar, FaSimCard, FaTrain } from "react-icons/fa";
import { RiFlag2Line, RiStarSmileLine, RiSendPlaneLine } from "react-icons/ri";
import { BsBuilding } from "react-icons/bs";
import { IoIosBoat } from "react-icons/io";

import { Tabs } from 'antd';
const { TabPane } = Tabs;

const HomeSearch = ({ searchTitleStyle, searchDescriptionStyle }) => {
  return (
    <BannerWrapper>
      <GlideCarousel
        controls={false}
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        bullets={true}
        numberOfBullets={3}
      >
        <>
          <GlideSlide>
            <img src={bannerBg1} alt="Banner" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg2} alt="Banner" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg3} alt="Banner" />
          </GlideSlide>
        </>
      </GlideCarousel>

      <Container>
        <SearchWrapper>
          <Tabs defaultActiveKey="1" style={{overflow:'unset'}}>
            <TabPane
              tab={
                <span className="tabtxt">
                  <RiSendPlaneLine size="20" color="#00CC99" style={{ marginRight:5}}/>
                  Vé máy bay
                </span>
              }
              key="1"
            >
               <FlightSearchForm />
            </TabPane>

            <TabPane
              tab={
                <span className="tabtxt">
                  <BsBuilding size="20" color="#FF9900" style={{ marginRight:5}}/>
                  Khách sạn
                </span>
              }
              key="2"
            >
              <SearchForm />
            </TabPane>

          <TabPane
              tab={
                <span className="tabtxt">
                  <RiFlag2Line size="20" color="#FF0033" style={{ marginRight:5}}/>
                  Tham quan & Giải trí
                </span>
              }
              key="3"
            >
              <TripSearchForm />
            </TabPane>

            <TabPane
              tab={
                <span className="tabtxt">
                  <IoIosBoat size="20" color="#006666" style={{ marginRight:5}}/>
                  Du thuyền
                </span>
              }
              key="4"
            >
              <CruiseSearchForm />
            </TabPane>

            <TabPane
              tab={
                <span className="tabtxt">
                  <FaTrain size="18" color="#990099" style={{ marginRight:5}}/>
                  Tàu hỏa
                </span>
              }
              key="5"
            >
              <TrainSearchForm />
            </TabPane>

            <TabPane
              tab={
                <span className="tabtxt">
                  <FaCar size="20" color="#880000" style={{ marginRight:5}}/>
                  Xe hơi
                </span>
              }
              key="6"
            >
              <CarSearchForm />
            </TabPane>

            {/* <TabPane
              tab={
                <span className="tabtxt">
                  <FaSimCard size="18" color="#666666" style={{ marginRight:5}}/>
                  Wifi & SIM
                </span>
              }
              key="7"
            >
              <SimSearchForm />
            </TabPane> */}

            <TabPane
              tab={
                <span className="tabtxt">
                  <RiStarSmileLine size="20" color="#FFCC00" style={{ marginRight:5}}/>
                  Tiện ích
                </span>
              }
              key="8"
            >
              <TienIchDuLich />
            </TabPane>
          </Tabs>
          {/* <Heading
            {...searchTitleStyle}
            content="Latest reviews. Lowest prices."
          />
          <Text
            {...searchDescriptionStyle}
            content="compares prices from 200+ booking sites to help you find the lowest
      price on the right hotel for you."
          /> */}
         
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

HomeSearch.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

HomeSearch.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px',
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '18px',
    mb: '30px',
  },
};

export default HomeSearch;
