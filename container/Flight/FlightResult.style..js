import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FlightResultWrapper = styled.div`
   .container {
        margin: 20px;
   }
    .content-page {
        display: flex;
        justify-content: space-around;
        @media only screen and (max-width:1024px) {
            display: contents;
        }
    }
    .filter-card {
        width : 25%;
        @media only screen and (max-width:1024px) {
            width: 100%;
        }
    }
    .ticket-card {
        @media only screen and (max-width:1024px) {
            margin-top: 20px;
        }
        .ticket-item {
            margin-bottom: 10px;
        }
        .ant-card-bordered {
            border : 2px solid #f0f0f0;
            border-bottom : none;
        }
        .ant-card-body {
            padding : 0px 40px;
            @media only screen and (max-width:1124px){
                padding : 0px 35px;
            }
            @media only screen and (max-width:932px){
                padding : 0px 20px;
            }
            @media only screen and (max-width:902px){
                padding : 0px 10px;
            }
            @media only screen and (max-width:702px){
                padding : 0px;
            }
        }
        .ant-collapse-borderless, .ant-collapse-item {
            background-color: transparent;
            border-left : 1px solid #f0f0f0;
            border-right : 1px solid #f0f0f0;
        }
        .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
            padding: 0px 0px 10px 40px;
            @media only screen and (max-width:1024px){
                padding: 0px 0px 10px 8%;
            }
            @media only screen and (max-width:998px){
                padding: 0px 0px 10px 7%;
            }
            @media only screen and (max-width:968px){
                padding: 0px 0px 10px 6%;
            }
            @media only screen and (max-width:938px){
                padding: 0px 0px 10px 5%;
            }
            @media only screen and (max-width:910px){
                padding: 0px 0px 10px 3%;
            }
            @media only screen and (max-width:883px){
                padding: 0px 0px 10px 4%;
            }
            @media only screen and (max-width:700px){
                padding: 0px 0px 10px 2%;
            }
        }
        .ant-collapse-content > .ant-collapse-content-box {
            padding: 0px 16px;
            @media only screen and (max-width:1028px){
                padding: 0px 5px;
            }
            @media only screen and (max-width:1024px){
                padding: 0px 60px;
            }
            @media only screen and (max-width:999px){
                padding: 0px 40px;
            }
            @media only screen and (max-width:959px){
                padding: 0px 30px;
            }
            @media only screen and (max-width:939px){
                padding: 0px 20px;
            }
            @media only screen and (max-width:919px){
                padding: 0px 10px;
            }
            li {
                line-height: 25px;
                svg {
                    margin-right: 5px;
                }
                li > *{
                    display: inline-block;
                    vertical-align: middle;
                    }
            }
        }
        .detail-btn {
            .ant-collapse-header {
                        color: ${themeGet('color.7', '#3b5998')};
                    }
        }
    }
`;

export default FlightResultWrapper;