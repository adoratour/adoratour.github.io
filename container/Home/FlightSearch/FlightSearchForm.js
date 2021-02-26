import React, { useState } from 'react'
import Router, { withRouter } from 'next/router';
import { FaPlaneDeparture, FaPlaneArrival, FaPlane, FaRegCalendar, FaUserFriends, FaSearch } from 'react-icons/fa';
import {
    RadioWrapper,
    FormWrapper,
    ComponentWrapper,
    RoomGuestWrapper,
    ItemWrapper,
} from './FlightSearch.style';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import SingleDatePickerWrapper from 'components/UI/DatePicker/SingleDatePicker';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import { AutoComplete, Input, Button, Space, Radio } from 'antd';
import { FLIGHT_SEARCH_PAGE } from '../../../settings/constant';


const calendarItem = {
    separator: '-',
    format: 'DD-MM-YYYY',
    locale: 'vi',
};

const airport = [
    { id: 0, city: 'Hà Nội (HAN)', name: 'Sân bay Nội Bài' },
    { id: 1, city: 'Đà Nẵng (DAD)', name: 'Sân bay Đà Nẵng' },
    { id: 2, city: 'Hồ Chí Minh (SGN)', name: 'Sân bay Tân sơn nhất' },
    { id: 3, city: 'Nha Trang (CXR)', name: 'Sân bay Cam ranh' },
    { id: 4, city: 'Phú Quốc (PQC)', name: 'Sân bay Phú quốc' },
    { id: 5, city: 'Huế (HUI)', name: 'Sân bay Phú bài' },
    { id: 6, city: 'Hải Phòng (HPH)', name: 'Sân bay Cát bi' }
];

const renderTitle = (title) => {
    return (
        <span style={{ fontWeight: 700, fontSize: 16, color: '#000' }}>
            {title}
        </span>
    );
};

const renderItem = (city, name) => {
    return {
        value: city,
        label: (
            <div style={{ display: 'flex' }}>
                <FaPlane size="18" style={{ marginTop: 10, marginRight: 10 }} />
                <div style={{ display: 'block' }}>
                    <div style={{ fontWeight: 'bold' }}>
                        {city}
                    </div>
                    <span>{name} </span>
                </div>
            </div>
        ),
    };
};

const options = [
    {
        label: renderTitle('Địa điểm nổi bật'),
        options: airport.map(item => renderItem(item.city, item.name))
    }
];

const FlightSearchFrom = () => {
    const [searchDate, setSearchDate] = useState({
        setStartDate: null,
        setEndDate: null,
    });

    const [way, setWay] = useState({ value: 1 })
    const [guestAdt, setGuestAdt] = useState({ guestadt: 1 });
    const [guestChd, setGuestChd] = useState({ guestchd: 0 });
    const [guestInf, setGuestInf] = useState({ guestinf: 0 });

    const [classSeat, setClassSeat] =  useState({title : ''});
    const onSetText = (text) =>{
        setClassSeat({ title : `${text}`})
    }

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setWay({
            value: e.target.value,
        });
    };

    const handleIncrement = (type) => {
        if (guestAdt[type] >= 9 || guestChd[type] >= 9 || guestInf[type] >= 9) {
            return false;
        }
        setGuestAdt({
            ...guestAdt,
            [type]: guestAdt[type] + 1,
        });
        setGuestChd({
            ...guestChd,
            [type]: guestChd[type] + 1,
        });
        setGuestInf({
            ...guestInf,
            [type]: guestInf[type] + 1,
        });
    };

    const handleDecrement = (type) => {
        if (guestAdt[type] <= 1) {
            return false;
        }
        setGuestAdt({
            ...guestAdt,
            [type]: guestAdt[type] - 1,
        });
        if (guestChd[type] <= 0) {
            return false;
        }
        setGuestChd({
            ...guestChd,
            [type]: guestChd[type] - 1,
        });
        if (guestInf[type] <= 0) {
            return false;
        }
        setGuestInf({
            ...guestInf,
            [type]: guestInf[type] - 1,
        });
    };

    const handleIncDecOnChange = (e, type) => {
        let currentValue = e.target.value;
        setGuestAdt({
            ...guestAdt,
            [type]: currentValue,
        });
        setGuestChd({
            ...guestChd,
            [type]: currentValue,
        });
        setGuestInf({
            ...guestInf,
            [type]: currentValue,
        });
    };

    const goToFlightSearchResult = () => {
        let query = {
            setStartDate: searchDate.setStartDate,
            setEndDate: searchDate.setEndDate,
        };

        for (const key in query) {
            if (query[key] === '' || query[key] === null || query[key] === 0) {
                delete query[key];
            }
        }
        Router.push(
            {
                pathname: `${FLIGHT_SEARCH_PAGE}`,
                query: query,
            },
            {
                pathname: `${FLIGHT_SEARCH_PAGE}`,
                query: query,
            },
            { shallow: true }
        );
    }
    return (
        <div>
            <RadioWrapper>
                <Radio.Group onChange={onChange} value={way.value} style={{ marginBottom: 10 }}>
                    <Radio value={1}>Khứ hồi</Radio>
                    <Radio value={2}>Một chiều</Radio>
                </Radio.Group>
            </RadioWrapper>
            <FormWrapper>
                <ComponentWrapper>
                    <FaPlaneDeparture className="plane" />
                    <AutoComplete className="map_autocomplete"
                        options={options}
                    >
                        <Input placeholder="Nhập điểm đi" />
                    </AutoComplete>
                </ComponentWrapper>
                <ComponentWrapper>
                    <FaPlaneArrival className="plane" />
                    <AutoComplete className="map_autocomplete"
                        options={options}
                    >
                        <Input placeholder="Nhập điểm đến" />
                    </AutoComplete>
                </ComponentWrapper>

                <ComponentWrapper>
                    <FaRegCalendar className="calendar" />
                    {way.value === 1
                        ? <DateRangePickerBox
                            startDatePlaceholderText="Ngày đi"
                            endDatePlaceholderText="Ngày về"
                            item={calendarItem}
                            startDateId="startDateId-id-home"
                            endDateId="endDateId-id-home"
                            updateSearchData={(setDateValue) => setSearchDate(setDateValue)}
                            showClearDates={true}
                            small={true}
                            numberOfMonths={1}
                        />
                        : <SingleDatePickerWrapper
                            placeholder="Thời gian"
                            item={calendarItem}
                            updateSearchData={(setDateValue) => setSearchDate(setDateValue)}
                            showClearDates={true}
                            small={true}
                            numberOfMonths={1}
                        />
                    }
                </ComponentWrapper>
                <ComponentWrapper>
                    <FaUserFriends className="user-friends" />
                    <ViewWithPopup
                        key={200}
                        noView={true}
                        className="room_guest"
                        view={
                            <Button type="default" style={{ textOverflow: 'ellipsis', overflow: "hidden" , maxWidth: 250 , whiteSpace: 'nowrap'}}>
                                <span>{guestAdt.guestadt > 0 && `${guestAdt.guestadt}`} người lớn </span>
                                <span>{guestChd.guestchd > 0 && `, ${guestChd.guestchd}` + ' trẻ em'} </span>
                                <span>{guestInf.guestinf > 0 && `, ${guestInf.guestinf}` + ' em bé'} </span>
                                <span>{classSeat.title}</span>
                            </Button>
                        }
                        popup={
                            <RoomGuestWrapper>
                                <Space>
                                    <strong style={{ fontWeight: 700, fontSize: 16 }}>Hành khách</strong>
                                </Space>
                                <ItemWrapper>
                                    <div style={{ display: 'block' }}>
                                        <div>
                                            <strong>Người lớn</strong>
                                        </div>
                                        <span> &gt;= 12 tuổi</span>
                                    </div>
                                    <InputIncDec
                                        id="guestadt"
                                        increment={() => handleIncrement('guestadt')}
                                        decrement={() => handleDecrement('guestadt')}
                                        onChange={(e) => handleIncDecOnChange(e, 'guestadt')}
                                        value={guestAdt.guestadt}
                                    />
                                </ItemWrapper>
                                <ItemWrapper>
                                    <div style={{ display: 'block' }}>
                                        <div>
                                            <strong>Trẻ em</strong>
                                        </div>
                                        <span> &gt;2 - 11 tuổi</span>
                                    </div>
                                    <InputIncDec
                                        id="guestchd"
                                        increment={() => handleIncrement('guestchd')}
                                        decrement={() => handleDecrement('guestchd')}
                                        onChange={(e) => handleIncDecOnChange(e, 'guestchd')}
                                        value={guestChd.guestchd}
                                    />
                                </ItemWrapper>
                                <ItemWrapper>
                                    <div style={{ display: 'block' }}>
                                        <div>
                                            <strong>Em bé</strong>
                                        </div>
                                        <span> &#60; 24 tháng</span>
                                    </div>
                                    <InputIncDec
                                        id="guestinf"
                                        increment={() => handleIncrement('guestinf')}
                                        decrement={() => handleDecrement('guestinf')}
                                        onChange={(e) => handleIncDecOnChange(e, 'guestinf')}
                                        value={guestInf.guestinf}
                                    />
                                </ItemWrapper>
                                <ItemWrapper>

                                    <Space direction="vertical">
                                        <strong style={{ fontWeight: 700, fontSize: 16 }}>Hạng ghế</strong>
                                        <Space >
                                            <Button onClick={()=> onSetText(', Phổ thông')}>Phổ thông</Button>
                                            <Button onClick={()=> onSetText(', Phổ thông đặc biệt')}>Phổ thông đặc biệt</Button>
                                        </Space>
                                        <Space>
                                            <Button onClick={()=> onSetText(', Thương gia')}>Thương gia</Button>
                                            <Button onClick={()=> onSetText(', Hạng nhất')}>Hạng nhất</Button>
                                        </Space>
                                    </Space>

                                </ItemWrapper>
                            </RoomGuestWrapper>
                        }
                    />
                </ComponentWrapper>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    onClick={goToFlightSearchResult}
                >
                    <FaSearch size="20" />
                </Button>

            </FormWrapper>
        </div>
    );
};

export default withRouter(FlightSearchFrom);