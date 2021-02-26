import React from 'react'
import PropTypes from 'prop-types';
import FlightInfoWrapper, {
    InfoContainer,
    BrandArea,
    DateAndTimeArea,
    ConditionArea,
    IconArea
} from './Info.style';
import { FaRegClock } from "react-icons/fa";
import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md';

const FlightInfo = ({
    className,
    brandLogo,
    flightNo,
    flightName,
    departTime,
    departDate,
    arriveTime,
    arriveDate,
    departCity,
    departAirport,
    arriveCity,
    arriveAirport,
    lastLong,
    condition,
}) => {
    return <>
        <FlightInfoWrapper className={className}>
            <InfoContainer>
                <div className="content">
                <BrandArea>
                    <div>
                        {brandLogo && brandLogo}
                    </div>
                    <div>
                        {flightNo && flightNo}
                    </div>
                    <div>
                        {flightName && flightName}
                    </div>
                </BrandArea>
                <IconArea>
                    <MdFlightTakeoff size="25" />
                    <div className="line" />
                    <MdFlightLand size="25" />
                </IconArea>
                <DateAndTimeArea>
                    <div className="depart">
                        <div className="item">
                            <div>
                                <span>
                                    {departTime && departTime}
                                </span>
                            </div>
                            <div className="item-date">
                                {departDate && departDate}
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <span>
                                    {departCity && departCity}
                                </span>
                            </div>
                            <div className="item2">
                                {departAirport && departAirport}
                            </div>
                        </div>
                    </div>
                    <div className="last-long">
                        <FaRegClock size="16" /> {lastLong && lastLong}
                    </div>
                    <div className="depart">
                        <div className="item">
                            <div>
                                <span> {arriveTime && arriveTime}</span>
                            </div>
                            <div className="item-date">
                                {arriveDate && arriveDate}
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <span>{arriveCity && arriveCity}</span>
                            </div>
                            <div className="item2">
                                {arriveAirport && arriveAirport}
                            </div>
                        </div>
                    </div>
                </DateAndTimeArea>
                </div>
                <ConditionArea>
                    <ul>
                        {condition && condition}
                    </ul>
                </ConditionArea>
                
            </InfoContainer>
        </FlightInfoWrapper>
    </>
}

FlightInfo.propTypes = {
    className: PropTypes.string,
    brandLogo: PropTypes.element,
    flightNo: PropTypes.string,
    flightName: PropTypes.string,
    departTime: PropTypes.string,
    departDate: PropTypes.string,
    arriveTime: PropTypes.string,
    arriveDate: PropTypes.string,
    departCity: PropTypes.string,
    departAirport: PropTypes.string,
    arriveCity: PropTypes.string,
    arriveAirport: PropTypes.string,
    lastLong: PropTypes.string,
    condition: PropTypes.string,
}

export default FlightInfo;