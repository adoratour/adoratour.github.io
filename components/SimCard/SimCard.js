import React from 'react';
import Link from 'next/link';
import Favourite from 'components/UI/Favorite/Favorite';
import { RiTimeLine, RiSimCardLine, RiScanLine } from "react-icons/ri";
import { Button } from 'antd';

import SimItem from '../SimItem/SimItem';

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
        name: 'Hạn sử dụng',
        icon: <RiTimeLine color="black" />,
        detail: '5 Ngày'
    },
    {
        name: 'Tốc độ',
        icon: <RiScanLine color="black" />,
        detail: '5G / 4G'
    },
    {
        name: 'Loại sim',
        icon: <RiSimCardLine color="black" />,
        detail: 'Có nghe gọi & SMS'
    }
];

export default function SimCard({
    location,
    title,
    price,
    gallery,
    deviceType
}) {
    return (
        <SimItem
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
                Chi Tiết
              </Button>}
        >
             <img
            // width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </SimItem>
    );
}