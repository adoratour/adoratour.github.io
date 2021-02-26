import React from "react"
import Router, { withRouter } from 'next/router';
import isEmpty from 'lodash/isEmpty';
import {
    FormWrapper,
    ComponentWrapper,
    RoomGuestWrapper,
    ItemWrapper,
} from './CarSearch.style';
import { FaMapMarkerAlt, FaRegCalendar } from 'react-icons/fa';
import { MdAlbum, MdLocationOn } from 'react-icons/md';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import { Button, Input, AutoComplete, Checkbox  } from 'antd';

const calendarItem = {
    separator: '-',
    format: 'MM-DD-YYYY',
    locale: 'en',
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

const CarSearchForm = () => {
    return (
        <div>
            <div style={{ marginBottom: 10}}>
            <Checkbox onChange={onChange}>Đưa đón sân bay</Checkbox>
            </div>
            <FormWrapper>
                <ComponentWrapper>
                    <MdAlbum className="map-marker" />
                    <AutoComplete className="map_autocomplete"
                    // options={options}
                    >
                        <Input placeholder="Nhập điểm đón" />
                    </AutoComplete>
                </ComponentWrapper>
                <ComponentWrapper>
                    <MdLocationOn className="map-marker" />
                    <AutoComplete className="map_autocomplete"
                    // options={options}
                    >
                        <Input placeholder="Nhập điểm trả" />
                    </AutoComplete>
                </ComponentWrapper>
                <ComponentWrapper>
                    <FaRegCalendar className="calendar" />
                    <DateRangePickerBox
                        startDatePlaceholderText="Ngày đón"
                        endDatePlaceholderText="Ngày trả"
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
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                >
                    Tìm kiếm
      </Button>
            </FormWrapper>
        </div>
    )
}

export default withRouter(CarSearchForm);
