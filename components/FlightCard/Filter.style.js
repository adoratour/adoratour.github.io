import styled from 'styled-components';

const FilterWrapper = styled.div`
    width: 100%;
    
`;
export const PriceArea = styled.div`
    span {
        font-weight: 500;
        font-size: 16px;
    }
`;

export const StopArea = styled.div`
    margin-top: 15px;
    .ant-checkbox-group {
        display: grid;
        @media only screen and (max-width: 1224px) {
            display: block;
        }
    }
`;
export const DepartTime = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: space-around;
    .ant-btn {
        margin-bottom : 5px;
        border-radius: 30px;
    }
    div {

    }
`;

export default FilterWrapper;