import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FlightInfoWrapper = styled.div ``;

export const InfoContainer = styled.div`
    margin : 0px 20px;
    display: flex;
    .content {
        display : flex;
    }
    @media only screen and (max-width:1138px) {
        margin : 0px 10px;
    }
    @media only screen and (max-width:1111px) {
        margin : 0px;
    }
    @media only screen and (max-width:1024px) {
        margin : 0px 20px;
    }
    @media only screen and (max-width:837px) {
        margin : 0px 10px;
    }
    @media only screen and (max-width:804px) {
        margin : 0px;
    }
    @media only screen and (max-width : 700px) {
        display: block;
    }
    img {
        width : 140px;
        height : auto;
        @media only screen and (max-width:1214px){
            width : 130px;
        }
        @media only screen and (max-width:1164px){
            width : 120px;
        }
        @media only screen and (max-width:1024px){
            width : 140px;
        }
        @media only screen and (max-width:899px){
            width : 130px;
        }
        @media only screen and (max-width:889px){
            width : 120px;
        }
    }
`;

export const BrandArea = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap : wrap;
    align-items: center;
`;

export const DateAndTimeArea = styled.div`
    .depart {
        display: flex;
        margin-bottom: 15px;
    }
    .item {
        margin-right : 10px;
        span {
            font-size: 17px;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 600;
            line-height: 26px;
            letter-spacing: 0.00714em;
            @media only screen and (max-width:1214px) {
                font-size: 16px;
            }
            @media only screen and (max-width:1182px) {
                font-size: 15px;
            }
            @media only screen and (max-width:1084px) {
                font-size: 14px;
            }
            @media only screen and (max-width:1024px) {
                font-size: 17px;
            }
            @media only screen and (max-width:1013px) {
                font-size: 16px;
            }
            @media only screen and (max-width:852px) {
                font-size: 15px;
            }
            @media only screen and (max-width:837px) {
                font-size: 14px;
            }
            @media only screen and (max-width:700px) {
                font-size: 13px;
            }
        }
    }
    .item-date {
        @media only screen and (max-width:700px) {
            font-size: 12px;
        }
    }
    .item2 {
        font-size: 15px;
        font-weight: 500;
        color : #000;
        @media only screen and (max-width:1084px) {
            font-size: 14px;
        }
        @media only screen and (max-width:837px) {
            font-size: 14px;
        }
        @media only screen and (max-width:700px) {
            font-size: 13px;
        }
    }
    .last-long {
        color : blue;
        display:flex;
        margin: 15px 0px;
        svg {
            margin: 2px 5px 0px 0px;
        }
    }
`;

export const IconArea = styled.div`
    display: flex;
    flex-direction: column;
    color: blue;
    size: 24px;
    align-items: center;
    justify-content: space-between;
    margin: 5px 15px 30px 15px;
    .line {
        border-left: 1px solid rgb(25, 118, 210);
        height: 59%;
    }
    @media only screen and (max-width:700px){
        size: 16px;
    }
`;

export const ConditionArea = styled.div`
    margin-left: 20px;
    max-width: 250px;
    font-size: 12px;
    @media only screen and (max-width:1152px){
        margin-left: 10px;
    }
    @media only screen and (max-width:1066px){
        max-width: 222px;
    }
    @media only screen and (max-width:1024px){
        margin-left: 20px;
        max-width: 250px;
    }
    @media only screen and (max-width:879px){
        max-width: 222px;
    }
    @media only screen and (max-width:784px){
        margin-left: 10px;
    }
    @media only screen and (max-width:774px){
        margin-left: 5px;
    }
    @media only screen and (max-width:700px){
        max-width: 85%;
    }
    @media only screen and (max-width:625px){
        max-width: 100%;
    }
`;

export default FlightInfoWrapper;