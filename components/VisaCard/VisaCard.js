import React from 'react';
import Link from 'next/link';
import Favourite from 'components/UI/Favorite/Favorite';
import { RiTimeLine, RiThumbUpLine, RiCopperCoinLine } from "react-icons/ri";
import { Button } from 'antd';

import VisaItem from '../VisaItem/VisaItem';

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
        name: 'Thời gian',
        icon: <RiTimeLine color="black" />,
        detail: '8 Ngày'
    },
    {
        name: 'Cam kết tỷ lệ đậu cao nhất',
        icon: <RiThumbUpLine color="black" />,
    },
    {
        name: 'Có hoàn phí',
        icon: <RiCopperCoinLine color="black" />,
    },
];

export default function VisaCard({
    location,
    title,
    price,
}) {
    return (
        <VisaItem
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
                return <li>{item.icon}{item.name} <b style={{ color: '#008489' }}>{item.detail}</b></li>
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
        </VisaItem>
    );
}