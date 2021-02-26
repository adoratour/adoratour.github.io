import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FlightCardWrapper, {
    BrandWrapper,
    InfoWrapper,
    TimeWrapper,
    AdditionWrapper,
    PriceArea
} from './FlightCard.style';
import { GrClock } from "react-icons/gr";
import { MdAirlineSeatReclineExtra, MdToll } from "react-icons/md";
import { Button, Card, Modal, Tabs } from 'antd';
import FlightInfo from './Info';
import BambooLogo from 'assets/images/bb_logo.png';
import { FiCheckCircle } from 'react-icons/fi';

const { TabPane } = Tabs;
const conditions = ['Hành lý xách tay 7kg. Liên hệ với CSKH để biết thêm thông tin về hành lý ký gửi.', 'Không hoàn vé']

const FlightCard = ({
    className,
    brandLogo,
    brandName,
    departTime,
    arriveTime,
    airportDepartCode,
    airportArriveCode,
    lastLong,
    classSeat,
    seat,
    point,
    price,
}) => {
    const [visible, setVisible] = useState(false);
    const onShowModal = () => {
        setVisible(true);
    }

    const handleOK = e => {
        console.log(e);
        setVisible(false)
    }

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    }
    return (
        <>
            <Card>
                <FlightCardWrapper className={className}>
                    <BrandWrapper>
                        <div className="mCard">
                            <div>
                                {brandLogo && brandLogo}
                            </div>
                            <div>
                                {brandName && brandName}
                            </div>
                        </div>
                    </BrandWrapper>
                    <InfoWrapper>
                        <TimeWrapper>
                            <div>
                                <div>
                                    {departTime && departTime}
                                </div>
                                <span>{airportDepartCode && airportDepartCode}</span>
                            </div>
                            <div className="from-to" />
                            <div>
                                <div>
                                    {arriveTime && arriveTime}
                                </div>
                                <span>{airportArriveCode && airportArriveCode}</span>
                            </div>
                        </TimeWrapper>
                    </InfoWrapper>
                    <InfoWrapper>
                        <AdditionWrapper>
                            <div>
                                <div className="clock">
                                    <GrClock color="#ff0088" size="18" style={{ marginRight: 5 }} /> {lastLong && lastLong}
                                </div>
                                <div className="seat">
                                    <MdAirlineSeatReclineExtra size="20" style={{ marginRight: 5 }} />
                                    {classSeat && classSeat}
                                    <div className="classSeat">{seat && seat }</div>
                                </div>
                                <div className="point">
                                    <MdToll size="20" style={{ marginRight: 5 }} /> {point && point}
                                </div>
                            </div>
                        </AdditionWrapper>
                    </InfoWrapper>
                    <InfoWrapper>
                        <PriceArea>
                            <h5>{price && price}</h5>
                            <span>giá một chiều</span>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                onClick={onShowModal}
                            >
                                Đặt vé
                             </Button>
                            <Modal
                                width={900}
                                centered    
                                visible={visible}
                                onCancel={handleCancel}
                                footer={[
                                    <Button key="submit" type="primary" htmlType="submit" onClick={handleOK}>
                                        Tiếp tục
                                    </Button>,
                                ]}
                            >
                                <Tabs defaultActiveKey="2" size="middle" >
                                    <TabPane tab="Chi tiết chuyến bay" key="1">
                                        <FlightInfo 
                                             brandLogo={<img src={BambooLogo} alt="Bamboo Airways Logo" />}
                                             flightNo={`QH202`}
                                             flightName={`Boeing 787`}
                                             departTime={`06:00`}
                                             departDate={`17/10/2020`}
                                             arriveTime={`08:00`}
                                             arriveDate={`18/10/2020`}
                                             departCity={`Thành phố Hồ Chí Minh (SGN)`}
                                             departAirport={`Tân Sơn Nhất`}
                                             arriveCity={`Thành phố Hà Nội (HAN)`}
                                             arriveAirport={`Nội Bài`}
                                             lastLong={`2h 10m`}
                                             condition= { conditions.map(item => <li><FiCheckCircle size="16" />{item}</li>)}
                                        />
                                 </TabPane>
                                    <TabPane tab="Chi tiết giá" key="2">
                                        <p>Content of Tab Pane 2</p>
                                        <p>Content of Tab Pane 2</p>
                                        <p>Content of Tab Pane 2</p>
                                        <p>Content of Tab Pane 2</p>
                                        <p>Content of Tab Pane 2</p>
                                </TabPane>
                                </Tabs>
                            </Modal>
                        </PriceArea>
                    </InfoWrapper>
                </FlightCardWrapper>
            </Card>
        </>
    );
}

FlightCard.propTypes = {
    className: PropTypes.string,
    brandLogo: PropTypes.element,
    seat: PropTypes.element,
    brandName: PropTypes.string,
    departTime: PropTypes.string,
    arriveTime: PropTypes.string,
    airportDepartCode: PropTypes.string,
    airportArriveCode: PropTypes.string,
    lastLong: PropTypes.string,
    classSeat: PropTypes.string,
    point: PropTypes.string,
    price: PropTypes.string,
}

export default FlightCard;