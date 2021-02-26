import React from 'react'
import FlightSearchForm from '../Home/FlightSearch/FlightSearchForm';
import { Card } from 'antd';
import FlightCard from 'components/FlightCard/FlightCard';
import FlightFilter from 'components/FlightCard/Filter';
import FlightInfo from 'components/FlightCard/Info';
import FlightResultSort from 'components/FlightCard/Sort';
import VietnamAirlineLogo from 'assets/images/vna_logo.png';
import BambooLogo from 'assets/images/bb_logo.png';
import FlightResultWrapper from './FlightResult.style.';
import { Collapse } from 'antd';
import { FiCheckCircle } from 'react-icons/fi';

const { Panel } = Collapse;

const conditions = ['Hành lý xách tay 7kg. Liên hệ với CSKH để biết thêm thông tin về hành lý ký gửi.', 'Không hoàn vé']

const FlightSearchResult = () => {
    return <>
        <FlightResultWrapper>
            <div className="container">
                <Card>
                    <FlightSearchForm />
                </Card>
            </div>
            <div className="container">
                <div className="content-page">
                    <div className="filter-card">
                        <Card>
                            <FlightFilter />
                        </Card>
                    </div>
                    <div className="ticket-card">
                    <FlightResultSort 
                        departCity={`Tan Son Nhat (SGN)`}
                        arriveCity={`Noi Bai (HAN)`}
                        result={`200`}
                        departDate={`17/11/2020`}
                        // arriveDate={`18/11/2020`}
                        passengerNum={`1 người lớn`}
                    />
                        <div className="ticket-item">
                            <FlightCard
                                departCity={`Tân Sơn Nhất (SGN)`}
                                arriveCity={`Nội Bài (HAN)`}
                                result={`200`}
                                brandLogo={<img src={VietnamAirlineLogo} alt="Vietnam Airlines Logo" />}
                                brandName={`Vietnam Airlines`}
                                departTime={`15:30`}
                                airportDepartCode={`SGN`}
                                arriveTime={`17:40`}
                                airportArriveCode={`HAN`}
                                lastLong={`2h 10m`}
                                classSeat={`Phổ Thông`}
                                point={`43 điểm`}
                                price={`940.000 đ`}
                                seat={`P`}
                            />
                            <div>
                            <Collapse ghost bordered={false} className="detail-btn" expandIconPosition="right">
                                <Panel header="Thông tin chuyến bay">
                                    <FlightInfo />
                                </Panel>
                            </Collapse>
                            </div>
                        </div>
                        <div className="ticket-item">
                            <FlightCard
                                brandLogo={<img src={BambooLogo} alt="Bamboo Airways Logo" />}
                                brandName={`Bamboo Airways`}
                                departTime={`15:30`}
                                airportDepartCode={`SGN`}
                                arriveTime={`17:40`}
                                airportArriveCode={`HAN`}
                                lastLong={`2h 10m`}
                                classSeat={`Phổ Thông`}
                                point={`43 điểm`}
                                price={`900.000 đ`}
                                seat={`E`}
                            />
                            <Collapse ghost bordered={false} className="detail-btn" expandIconPosition="right">
                                <Panel header="Thông tin chuyến bay">
                                     <FlightInfo 
                                        brandLogo={<img src={BambooLogo} alt="Bamboo Airways Logo"/>}
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
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </FlightResultWrapper>
    </>
}

export default FlightSearchResult;