import React from 'react'
import { Radio } from 'antd';
import styled from 'styled-components';

const SortWrapper = styled.div`
    display: flex;
`;
const Text = styled.text`
    fontWeight : 600;
    margin-right: 15;
    color: '#000'
`;

const Sort = () => {

    const [value, setValue] = React.useState(1);
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <SortWrapper>
            <Text>Xếp theo : </Text>
            <Radio.Group onChange={onChange} value={value} style={{ marginLeft : 5}}>
                <Radio value={1}>Tên A - Z </Radio>
                <Radio value={2}>Tên Z - A</Radio>
                <Radio value={3}>Giá tăng dần</Radio>
                <Radio value={4}>Giá giảm dần</Radio>
            </Radio.Group>
        </SortWrapper>
    )
}

export default Sort;