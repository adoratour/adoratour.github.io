import React from 'react'
import PropTypes from 'prop-types';
import SortWrapper from './Sort.style';

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const FlightResultSort = ({
    departCity,
    arriveCity,
    departDate,
    arriveDate,
    passengerNum,
    result,
}) => {
    return <>
        <SortWrapper>
            <div>
                <div className="hanh-trinh">
                    <span>
                        {departCity && departCity} - {arriveCity && arriveCity} : {result && result} kết quả
                    </span>
                </div>
                <div>
                    <span>
                        {departDate && departDate} {arriveDate && arriveDate} - {passengerNum && passengerNum}
                    </span>
                </div>
            </div>
            <div className="sort">
                <span>Sắp xếp</span>
                <Select defaultValue="price"  onChange={handleChange}>
                    <Option value="price">Giá tăng dần</Option>
                    <Option value="time">Thời gian cất cánh</Option>
                    <Option value="long">Thời gian bay</Option>
                </Select>
            </div>
        </SortWrapper>
    </>
}

FlightResultSort.propTypes = {
    departCity: PropTypes.string,
    arriveCity: PropTypes.string,
    result: PropTypes.string,
    departDate: PropTypes.string,
    arriveDate: PropTypes.string,
    passengerNum: PropTypes.string,
}

export default FlightResultSort;