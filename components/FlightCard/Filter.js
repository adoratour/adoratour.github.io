import React from 'react'
import Router, { withRouter } from 'next/router';
import FilterWrapper, {
    PriceArea,
    StopArea,
    DepartTime
} from './Filter.style';
import { Slider, Collapse, Checkbox, Button } from 'antd';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

const FlightFilter = () => {

    function numberWithCommas(x) {
        return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} đ`;
    }

    function formatter(value) {
        return `${value}h`;
    }

    const stopPoint = ['Bay Thẳng', '1 điểm dừng', '2 điểm dừng'];
    const brandAll = ['Vietjet Air', 'Bamboo Airways', 'Pacific Airlines', 'Vietnam Airlines',]

    return <>
        <FilterWrapper>
            <span style={{ fontWeight: 600, fontSize: 16 }}>Hiển thị kết quả theo : </span>
            <PriceArea>
                <span>Giá </span>
                <Slider tipFormatter={numberWithCommas} range defaultValue={[20, 50]} max={5000000} step={500000} />
            </PriceArea>
            <StopArea>
                <Collapse onChange={callback} >
                    <Panel header="Số điểm dừng">
                        <Checkbox.Group options={stopPoint} onChange={onChange} />
                    </Panel>
                </Collapse>
            </StopArea>
            <div style={{ marginTop : 10 , fontWeight: 500, fontSize: 16}}>
                 <span>Cất cánh </span>
            </div>
            <DepartTime>
                    <Button>00:00 - 06:00</Button>
                    <Button>06:00 - 12:00</Button>
                    <Button>12:00 - 18:00</Button>
                    <Button>18:00 - 24:00</Button>
            </DepartTime>
            <div style={{ marginTop : 10 , fontWeight: 500, fontSize: 16}}>
                 <span>Hạ cánh </span>
            </div>
            <DepartTime>
                    <Button>00:00 - 06:00</Button>
                    <Button>06:00 - 12:00</Button>
                    <Button>12:00 - 18:00</Button>
                    <Button>18:00 - 24:00</Button>
            </DepartTime>
            <StopArea>
                <Collapse onChange={callback}>
                    <Panel header="Thời lượng">
                        <h4>Chặng bay</h4>
                        <Slider tipFormatter={formatter} max={72}/>
                        <h4>Quá cảnh</h4>
                        <Slider tipFormatter={null} />
                    </Panel>
                </Collapse>
            </StopArea>
            <StopArea>
                <Collapse onChange={callback}>
                    <Panel header="Hãng bay">
                        <Checkbox.Group options={brandAll} onChange={onChange} />
                    </Panel>
                </Collapse>
            </StopArea>
        </FilterWrapper>
    </>
}

export default withRouter(FlightFilter);