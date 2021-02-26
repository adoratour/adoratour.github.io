import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SortWrapper = styled.div`
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    .hanh-trinh {
        font-weight: 700;
        font-size: 22px;
        color: #000;
        @media only screen and (max-width:1224px) {
            font-size: 20px;
        }
        @media only screen and (max-width:640px) {
            font-size: 17px;
        }
    }
    .sort {
        display:flex;
        flex-direction: column;
    }
`;

export default SortWrapper;