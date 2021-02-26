import React, { useState } from 'react'
import Router, { withRouter } from 'next/router';
import { FaRegCalendar, FaUserFriends, FaSearch } from 'react-icons/fa';
import { MdAlbum, MdLocationOn } from 'react-icons/md';
// import { ImWarning } from "react-icons/im";
import { IoIosTrain , IoIosWarning } from "react-icons/io";
import {
    FormWrapper,
    ComponentWrapper,
    RoomGuestWrapper,
    ItemWrapper,
} from './TrainSearch.style';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import { AutoComplete, Input, Button, Space, Radio } from 'antd';

const renderTitle = (title) => {
    return (
        <span style={{ fontWeight: 700, fontSize: 16, color: '#000' }}>
            {title}
        </span>
    );
};

const calendarItem = {
    separator: '-',
    format: 'MM-DD-YYYY',
    locale: 'vi',
};

const renderItem = (city) => {
    return {
        value: city,
        label: (
            <div style={{ display: 'flex' }}>
                <IoIosTrain size="18" style={{ marginRight: 10 }} />
                <div style={{ display: 'block' }}>
                    <div>
                        {city}
                    </div>
                </div>
            </div>
        ),
    };
};

const towns = [
    "Hà Nội (HNO)", "Sài Gòn (SGO)", "Đà Nẵng (DNA)", "An Hòa (AHO)", "Biên Hòa (BHO)", "Bàn Cờ (BCO)",
    "Bình Thuận (MMA)", "Bản Thí (BTH)", "Bảo Hà (BHA)", "Bảo Sơn (BAS)", "Bắc Giang (BGI)", "Bắc Lệ (BLE)",
    "Băc Ninh (BNI)", "Bắc Thủy (BAT)", "Bỉm Sơn (BSO)", "Bồng Sơn (BSN)", "Chi Lăng (CLA)", "Chu Lễ (CLE)",
    "Chí Chủ (CCH)", "Chí Linh (CLI)", "Chợ Sy (CSY)", "Cà Ná (CNA)", "Cầu Giát (CGI)", "Cầu Hai (CHA)", "Cẩm Giàng (CGA)",
    "Cẩm Lý (CLY)", "Cổ Loa (CLO)", "Cổ Phúc (CPH)", "Diên Sanh (DSA)", "Diêu Trì (DTR)", "Dĩ An (DIA)", "Gia Huynh (GHU)",
    "Gia Lâm (GLA)", "Gia Ray (GRA)", "Giáp Bát (GBA)", "Giã (GIA)", "Hiền Sỹ (HSY)", "Hoàn Lão (HLA)", "Huế (HUE)",
    "Hà Thanh (HTH)", "Hòa Duyệt (HOD)", "Hương Phố (HPO)", "Hạ Long (HLO)", "Hải Dương (HDU)", "Hải Phòng (HPH)",
    "Kim Liên (KLI)", "Kim Lũ (KLU)", "Kép (KEP)", "La Hai (LHA)", "Lai Khê (LAK)", "Lan Mẫu (LMA)", "Lang Khay (LKA)",
    "Lang Thip (LTH)", "Lim (LIM)", "Long Biên (LBI)", "Long Khánh (LKH)", "Long Đại (LDA)", "Lào Cai (LCA)",
    "Lâm Giang (LGI)", "Lăng Cô (LCO)", "Lưu Xá (LXA)", "Lương Sơn (LUS)", "Lạc Giao (LAG)", "Lạc Sơn (LAS)",
    "Lạng Sơn (LSO)", "Lệ Kỳ (LKY)", "Lệ Sơn (LES)", "Ma Lâm (MLA)", "Minh Cần (MCA)", "Minh Khôi (MKH)", "Minh Lễ (MLE)",
    "Mạo Khê (MAK)", "Mậu A (MAA)", "Mỹ Chánh (MCH)", "Mỹ Trạch (MTR)", "Mỹ Đức (MDU)", "Nam Khê (NKH)", "Nam Định (NDI)",
    "Ngân Sơn (NSO)", "Ngã Ba (NBA)", "Ngòi Hóp (NHP)", "Ngọc Lâm (NLA)", "Nha Trang (NTR)", "Ninh Bình (NBI)", "Ninh Hòa (NHO)",
    "Núi Thành (NTH)", "Phan Thiết (PTH)", "Phò Trạch (PHR)", "Phú Cang (PCG)", "Phú Diễn (PDI)", "Phú Hiệp (PHI)", "Phú Hòa (PHO)",
    "Phú Thái (PTA)", "Phú Thọ (PTO)", "Phúc Trạch (PUT)", "Phúc Tự (PTU)", "Phúc Yên (PYE)", "Phước Lãnh (PLA)",
    "Phước Mỗ (PMO)", "Phố Lu (PLU)", "Phố Tráng (PTR)", "Phố Vị (PVI)", "Phổ Yên (PHY)", "Phủ Lý (PLY)", "Phủ Đức (PDU)",
    "Quy Nhơn (QNH)", "Quán Triều (QTR)", "Quảng Ngãi (QNG)", "Quảng Trị (QTI)", "Sa Lung (SLU)", "Sen Hồ (SHO)",
    "Suối Kiết (SKI)", "Sóng Thần (STH)", "Sông Hóa (SOH)", "Sông Mao (SMA)", "Tam Kỳ (TKY)", "Thanh Hóa (THO)",
    "Thanh Luyện (TLU)", "Thái Nguyên (TNG)", "Thái Niên (TNI)", "Thái Văn (TVA)", "Tháp Chàm (TCH)", "Thượng Lâm (TLA)",
    "Thượng Lý (THL)", "Thạch Lỗi (TLI)", "Thị Cầu (TCA)", "Thọ Lộc (TLC)", "Tiên An (TAN)", "Tiên Kiên (TKE)",
    "Trung Giã (TGI)", "Trà Kiều (TKI)", "Trái Hút (THU)", "Tu Bông (TBO)", "Tuy Hòa (THA)", "Tân Ấp (TAP)", "Từ Sơn (TSO)",
    "Uông Bí (UBI)", "Vinh (VIN)", "Việt Trì (VTR)", "Voi Xô (VXO)", "Vân Canh (VCA)", "Văn Phú (VPH)", "Văn Xá (VXA)",
    "Vân Điền (VDI)", "Vĩnh Thủy (VTH)", "Vĩnh Yên (VYE)", "Vũ Ẻn (VEN)", "Yên Bái (YBA)", "Yên Cư (YCU)", "Yên Duệ (YDU)",
    "Yên Dưỡng (YED)", "Yên Trung (YTR)", "Yên Trạch (YET)", "Yên Viên (YVI)", "Yên Xuân (YXU)", "Đông Triều (DOT)",
    "Đông Tác (DTA)", "Đại Lãnh (DLA)", "Đa Phúc (DAP)", "Đoan Thượng (DTH)", "Đông Anh (DAN)", "Đông Hà (DHA)",
    "Đồng Chuối (DCH)", "Đồng Hới (DHO)", "Đồng Lê (DLE)", "Đồng Mỏ (DMO)", "Đồng Đăng (DDA)", "Đức Lạc (DUL)", "Đức Phổ (DPH)",
    "Ấm Thượng (ATH)"
];

const options = [
    {
        label: renderTitle('Địa điểm nổi bật'),
        options: towns.map(item => {
            return (
                renderItem(`${item}`)
            )
        })
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
    const [guestST, setGuestST] = useState({ guestst : 0});
    const [guestOld, setGuestOld] = useState({ guestold : 0});

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setWay({
            value: e.target.value,
        });
    };

    const handleIncrement = (type) => {
        if (guestAdt[type] >= 4 || guestChd[type] >= 3 || guestST[type] >= 3 || guestOld[type] >= 3) {
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
        setGuestST({
            ...guestST,
            [type]: guestST[type] + 1,
        });
        setGuestOld({
            ...guestOld,
            [type]: guestOld[type] + 1,
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

        if (guestST[type] <= 0) {
            return false;
        }
        setGuestST({
            ...guestST,
            [type]: guestST[type] - 1,
        });

        if (guestOld[type] <= 0) {
            return false;
        }
        setGuestOld({
            ...guestOld,
            [type]: guestOld[type] - 1,
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
        setGuestST({
            ...guestST,
            [type]: currentValue,
        });
        setGuestOld({
            ...guestOld,
            [type]: currentValue,
        });

    };
    return (
        <div>
            <Radio.Group onChange={onChange} value={way.value} style={{ marginBottom: 10 }}>
                <Radio value={1}>Khứ hồi</Radio>
                <Radio value={2}>Một chiều</Radio>
            </Radio.Group>
            <FormWrapper>
                <ComponentWrapper>
                    <MdAlbum className="plane" />
                    <AutoComplete className="map_autocomplete"
                        options={options}
                    >
                        <Input placeholder="Nhập điểm đi" />
                    </AutoComplete>
                </ComponentWrapper>
                <ComponentWrapper>
                    <MdLocationOn className="plane" size="18" />
                    <AutoComplete className="map_autocomplete"
                        options={options}
                    >
                        <Input placeholder="Nhập điểm đến" />
                    </AutoComplete>
                </ComponentWrapper>

                <ComponentWrapper>
                    <FaRegCalendar className="calendar" />
                    <DateRangePickerBox
                        startDatePlaceholderText="Ngày đi"
                        endDatePlaceholderText="Ngày về"
                        item={calendarItem}
                        format="DD-MM-YYYY"
                        startDateId="startDateId-id-home"
                        endDateId="endDateId-id-home"
                        updateSearchData={(setDateValue) => setSearchDate(setDateValue)}
                        showClearDates={true}
                        small={true}
                        numberOfMonths={1}
                    />
                </ComponentWrapper>
                <ComponentWrapper>
                    <FaUserFriends className="user-friends" />
                    <ViewWithPopup
                        key={200}
                        noView={true}
                        className="room_guest"
                        view={
                            <Button type="default">
                                <span>{guestAdt.guestadt > 0 && `${guestAdt.guestadt}`} người lớn </span>
                                <span>{guestChd.guestchd > 0 && `, ${guestChd.guestchd}` + ' trẻ em'} </span>
                                <span>{guestST.guestst > 0 && `, ${guestST.guestst}` + ' sinh viên'} </span>
                                <span>{guestOld.guestold > 0 && `, ${guestOld.guestold}` + ' Người cao tuổi'} </span>
                            </Button>
                        }
                        popup={
                            <RoomGuestWrapper>
                                <ItemWrapper>

                                    <Space direction="vertical">
                                        <strong style={{ fontWeight: 700, fontSize: 16 }}>Hạng ghế</strong>
                                        <Space >
                                            <Button type="primary" >Tất cả</Button>
                                            <Button>Ghế mềm</Button>
                                        </Space>
                                        <Space>
                                            <Button>Ghế cứng</Button>
                                            <Button>Nằm khoang 4</Button>
                                        </Space>
                                        <Space>
                                            <Button>Nằm khoang 6</Button>
                                            <Button>Ghế phụ</Button>
                                        </Space>
                                    </Space>

                                </ItemWrapper>
                                <Space>
                                    <strong style={{ fontWeight: 700, fontSize: 16 }}>Hành khách</strong>
                                </Space>
                                <ItemWrapper>
                                    <div style={{ display: 'block' }}>
                                        <div>
                                            <strong>Người lớn</strong>
                                        </div>
                                        <span> &gt;= 10 tuổi</span>
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
                                        <span> &#60; 10 tuổi</span>
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
                                            <strong>Sinh viên</strong>
                                        </div>

                                    </div>
                                    <InputIncDec
                                        id="guestst"
                                        increment={() => handleIncrement('guestst')}
                                        decrement={() => handleDecrement('guestst')}
                                        onChange={(e) => handleIncDecOnChange(e, 'guestst')}
                                        value={guestST.guestst}
                                    />
                                </ItemWrapper>
                                <ItemWrapper>
                                    <div style={{ display: 'block' }}>
                                        <div>
                                            <strong>Người cao tuổi</strong>
                                        </div>
                                        <span> &gt;= 60 tuổi</span>
                                    </div>
                                    <InputIncDec
                                        id="guestold"
                                        increment={() => handleIncrement('guestold')}
                                        decrement={() => handleDecrement('guestold')}
                                        onChange={(e) => handleIncDecOnChange(e, 'guestold')}
                                        value={guestOld.guestold}
                                    />
                                </ItemWrapper>
                                <ItemWrapper>
                                    <Space>
                                        <IoIosWarning color="#00ff99" />
                                        <span>
                                            Trẻ em dưới 6 tuổi không cần phải mua vé nếu ngồi cùng với phụ huynh. Mỗi phụ huynh được ngồi cùng ghế với tối đa 2 trẻ em, từ trẻ thứ 3 trở đi bắt buộc mua vé.
                                        </span>
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
                >
                    <FaSearch size="20" />
                </Button>

            </FormWrapper>
        </div>
    );
};

export default withRouter(FlightSearchFrom);