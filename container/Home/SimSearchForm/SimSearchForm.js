import React, { useState } from 'react'
import Router, { withRouter } from 'next/router';
import {
    FormWrapper,
    ComponentWrapper,
    RoomGuestWrapper,
    ItemWrapper,
} from './SimSearch.style';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Button, Input, AutoComplete, Checkbox, Row, Col, Space } from 'antd';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import { getOverflowOptions } from 'antd/lib/tooltip/placements';

const countries = [
    {
        name: "Đông Nam Á",
        places: [
            "Việt nam",
            "Singapore",
            " Malaysia",
            "Thái Lan",
            " Lào",
            "Philipines",
            " Indonesia",
            "Myanmar",
            "Campuchia"
        ]
    },
    {
        name: "Đông Á",
        places: [
            "Hàn Quốc",
            "Nhật Bản",
            "Đài Loan",
            "Trung Quốc",
            "Hồng Kông",
            "Ma cao"
        ]
    },
    {
        name: "Nam Á / Trung Đông",
        places: ["Du bai - AUE", "Ấn Độ", "Thổ Nhĩ Kỳ", "Sri Lanka", "Maldives"]
    },
    {
        name: "Châu Âu",
        places: [
            "Schengen",
            "Pháp",
            "Ý",
            "Thụy Sỹ",
            "Anh",
            "Áo",
            "Tây Ban Nha",
            "Iceland",
            "Phần Lan",
            "Đức",
            "Hà Lan",
            "Hy Lạp",
            "Bỉ",
            "Cộng Hòa Séc",
            "Croatia",
            "Đan Mạch",
            "Hungary",
            "Monaco",
            "Na Uy",
            "Nga",
            "Bồ Đào Nha",
            "Thụy Điển"
        ]
    },
    {
        name: "Châu Mỹ",
        places: ["Mỹ", "Canada", "Brazil"]
    },
    {
        name: "Châu Úc / Châu Phi",
        places: ["Úc", "New Zeland"]
    }
];

const CheckBox = ({ data = "", checked, onChange }) => {
    if (!data) return null;
    return (
        <div style={{flexDirection:'row', display:'flex'}}>
        <Checkbox
            key={data}
            checked={checked === data}
            onChange={(event) => onChange(event, data)}
        >
            {data}
        </Checkbox>
        </div>
    );
};
// text-overflow: ellipsis

const CheckBoxLabel = ({ label = "" }) => (
    <span style={{ fontWeight: "bold", color: "#000", fontSize: 16 }}>
        {label}
    </span>
);

const SimSearchForm = () => {
    const [checked, onCheck] = useState("");

    function onChange(event, checkedPlace) {
        onCheck(event.target.checked ? checkedPlace : "");
    }

    const onSelect = (data) => {
        console.log("onSelect", data);
    };

    const options = countries.map((item) => ({
        label: <CheckBoxLabel key={item.name} label={item.name} />,
        options: item.places.map((i) => ({
            value: i,
            label: <CheckBox key={i} data={i} checked={checked} onChange={onChange} />
        }))
    }));

    return (
        <>
            <FormWrapper>
            <ComponentWrapper>
                    <FaMapMarkerAlt className="map-marker" />
                    <AutoComplete className="map_autocomplete"
                        options={options}
                        onSelect={onSelect}
                    >
                        <Input placeholder="Nhập điểm đi" />
                    </AutoComplete>
                </ComponentWrapper>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                >
                    Tìm kiếm
                </Button>
            </FormWrapper>
        </>
    );
};

export default withRouter(SimSearchForm);