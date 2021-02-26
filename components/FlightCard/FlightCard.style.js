import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FlightCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: -15px;
    @media only screen and (max-width:700px){
        display: block;
    }
`;

export const BrandWrapper = styled.div`
    display: flex;
    flex-flow: column;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    width : 135px;
    @media only screen and (max-width:700px){
        // margin-left: 15px;
        width : 200px;
        .mCard { 
            display: flex;
            align-items: center;
        }
    }
    img {
        @media only screen and (max-width:1256px){
            width: 90%;
        }
        @media only screen and (max-width:1025px){
            width: 80%;
        }
        @media only screen and (max-width:1024px){
            width: 100%;
        }
        @media only screen and (max-width:968px){
            width: 90%;
        }
        @media only screen and (max-width:882px){
            width: 85%;
        }
        @media only screen and (max-width:713px){
            width: 110px;
        }
        @media only screen and (max-width:700px){
            margin-top:10px;
            width :80px;
        }
    }
`;

export const InfoWrapper = styled.div`
    display: contents;
    .line {
        border-right: 1px solid rgb(230 ,230, 230);
    }
`;

export const TimeWrapper = styled.div`
    font-size: 20px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    margin: 20px 40px;
    @media only screen and (max-width:1224px) {
        margin: 20px;
    }
    @media only screen and (max-width:1124px) {
        margin: 10px;
    }
    @media only screen and (max-width:1124px) {
        margin: 20px 1px;
    }
    @media only screen and (max-width:1024px) {
        margin: 20px 40px;
    }
    @media only screen and (max-width:833px) {
        margin: 20px;
    }
    @media only screen and (max-width:792px) {
        margin: 20px 0px;
    }
    @media only screen and (max-width:700px) {
        margin: 0px;
    }
    padding: 10px;
    max-width: 385px;
    display: flex;
    -webkit-box-align: start;
    align-items: start;
    letter-spacing: 0.00938em;
    color: ${themeGet('color.0', '#000000')};
    .from-to {
        border-bottom : 2px solid rgb(189, 189, 189);
        width: 100px;
        height: 20px;
        margin :0 10px;
        @media only screen and (max-width:1124px){
            width: 95px;
        }
        @media only screen and (max-width:1024px){
            width: 100px;
        }
        @media only screen and (max-width:847px){
            width: 85px;
        }
        @media only screen and (max-width:723px){
            width: 75px;
        }
        @media only screen and (max-width:700px){
            width: 100px;
            margin : 5px;
            height: 15px;
        }
    }
    span {
        font-size: 15px;
        text-align : center;
        margin-left: 10px;
    }
`;

export const AdditionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 30px;
    .clock {
        display: flex;
        margin-bottom :5px;
        @media only screen and (max-width: 700px) {
            position: absolute;
            top: 65px;
            left: 75px;
        }
    }
    .seat {
        display: flex;
        margin-bottom :5px;
        @media only screen and (max-width: 700px) {
            margin-left: 10px;
        }
    }
    .point {
        display: flex;
        margin-bottom :5px;
        color : ${themeGet('primary.0', '#FF8000')};
        @media only screen and (max-width: 700px) {
            position: absolute;
            top: 15px;
            right: 15px;
        }
    }
    @media only screen and (max-width:1224px) {
        margin: 30px 15px;
    }
    @media only screen and (max-width:1224px) {
        margin: 30px 5px;
    }
    @media only screen and (max-width:1024px) {
        margin: 25px;
    }
    @media only screen and (max-width:700px){
        margin: 0px;
        display: flex;
        float: left;
    }
    icon {
        margin-left: 5px;
    }
    .classSeat {
        height: 18px;
        margin-left: 5px;
        min-width: 18px;
        overflow: hidden;
        align-items: center;
        border-radius: 2px;
        padding: 0px 5px;
        display: flex;
        justify-content: center;
        color: ${themeGet('color.1', '#ffffff')};
        background-color: rgb(0, 173, 80);
        font-weight: 500;
        font-size: 15px;
    }
`;

export const PriceArea = styled.div`
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: flex-end;
        margin-left: 25px;
        @media only screen and (max-width:1024px){
            margin-left: 65px;
        }
        @media only screen and (max-width:903px){
            margin-left: 60px;
        }
        @media only screen and (max-width:935px){
            margin-left: 50px;
        }
        @media only screen and (max-width:882px){
            margin-left: 20px;
        }
        @media only screen and (max-width:752px){
            margin-left: 0px;
        }
        @media only screen and (max-width: 700px){
            width : 30%;
            position: absolute;
            top: 45px;
            right: 15px;
        }
   .ant-btn-primary {
       background: ${themeGet('primary.0', '#FF8000')};
       border-color:  ${themeGet('primary.0', '#FF8000')};
       color: ${themeGet('color.1', '#ffffff')};
       width: 90%;
   }
   h5 {
    font-size: 24px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: 0em;
    color: ${themeGet('primary.0', '#FF8000')};
    @media only screen and (max-width: 1124px) {
        font-size: 23px;
    }
    @media only screen and (max-width: 712px) {
        font-size: 20px;
    }
   }
   span {
       font-size: 15px;
       font-weight: 400;
       margin-bottom: 5px;
       margin-left: 5px;
   }
   .ant-tabs-tab.ant-tabs-tab-active {
       color: #ff0008;
   }
`;

export default FlightCardWrapper;