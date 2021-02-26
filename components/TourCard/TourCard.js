import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import Favourite from 'components/UI/Favorite/Favorite';
import { RiTimeLine, RiBuilding4Line, RiFocusLine } from "react-icons/ri";
import { Button } from 'antd';

import TourItem from '../TourItem/TourItem';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 1,
        paritialVisibilityGutter: 40,
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0,
        },
        items: 1,
        paritialVisibilityGutter: 30,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464,
        },
        items: 1,
        paritialVisibilityGutter: 30,
    },
};

const tourinfo = [
    {
        name: 'Phương tiện',
        icon: <RiFocusLine color="black" />,
        detail: 'Vietnam airline'
    },
    {
        name: 'Khách sạn',
        icon: <RiBuilding4Line color="black" />,
        detail: 'Adora Hotel 4****'
    },
    {
        name: 'Thời gian',
        icon: <RiTimeLine color="black" />,
        detail: '4 Ngày 3 Đêm'
    }
];

export default function TourCard({
    location,
    title,
    price,
    gallery,
    deviceType
}) {
    return (
        <TourItem
            favorite={
                <Favourite
                    onClick={(event) => {
                        console.log(event);
                    }}
                />
            }
            location={location.formattedAddress}
            title={title}
            price={`$${price}`}
            info={tourinfo.map(item => {
                return <li>{item.icon}{item.name} : <b style={{ color: '#008489' }}>{item.detail}</b></li>
            })}
            button={<Button
                className="button"
                type="primary"
                htmlType="submit"
                size="small"
            >
                Đặt tour
              </Button>}
             >
            <Carousel
                ssr
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                renderDotsOutside={false}
                responsive={responsive}
                deviceType={deviceType}
                showDots={true}
                sliderClass=""
                slidesToSlide={1}
            >
                {gallery.map(({ url, title }, index) => (
                    <img
                        src={url}
                        alt={title}
                        key={index}
                        draggable={false}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'relative',
                        }}
                    />
                ))}
            </Carousel>
        </TourItem>
    );
}