import React, { useState } from 'react'
import Head from 'next/head';
import ListingWrapper, {
    CheckVisaWrapper,
    BreadcrumbWrapper
} from 'container/Listing/Listing.style';
import { Select, Breadcrumb, Divider, Steps } from 'antd';
import CheckVisaItem from 'components/CheckVisa/CheckVisa';

const { Option } = Select;
const { Step } = Steps;

export default function CheckVisa() {

    const [selected, setSelected] = useState(1)

    function onChange(value) {
        console.log(`selected ${value}`);
        setSelected(prev => prev + 1);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    const question = [
        {  
            key: 1, 
            content: 'Chọn quốc gia bạn muốn xin visa',  
            select : [
                { name: 'Hàn Quốc (Korea)' },
                { name: 'Nhật Bản (Janpan)' },
                { name: 'Đài Loan (Taiwan)' },
                { name: 'Trung Quốc (China)' },
                { name: 'Hồng Kông (Hongkong)' },
                { name: 'Ma Cao (Macau)' },
                { name: 'Nga (Russia)' },
                { name: 'Châu âu (Schengen)' },
                { name: 'Úc (Australia)' },
                { name: 'New Zealand' },
                { name: 'Canada' },
                { name: 'Mỹ (America)' },
                { name: 'Ấn độ (India)' },
                { name: 'Dubai AUE' }
            ]

        },
        { 
            key: 2, 
            content: 'Mục đích xin visa' ,
            select : [
                { name: 'Du Lịch' },
                { name: 'Công tác' },
                { name: 'Du học' },
                { name: 'Thăm thân' },
                { name: 'Lao động' },
                { name: 'Hội chợ - Triển lãm' },
                { name: 'Định cư' }
            ]
        },
        { 
            key: 3,
            content: 'Thông tin về công việc' ,
            select : [
                { name: 'Không có việc làm / Thất nghiệp' },
                { name: 'Kinh doanh tự do có chứng minh thu nhập' },
                { name: 'Kinh doanh tự do không có chứng minh thu nhập' },
                { name: 'Nội trợ / Làm việc tự do' },
                { name: 'Lao động có HĐ - Không có BHXH' },
                { name: 'Lao động có HĐ - Có BHXH' },
                { name: 'Nhân viên Nhà Nước' },
                { name: 'Giáo viên / Bác sĩ / Bằng cấp chuyên môn cao' },
                { name: 'Chủ doanh nghiệp có khai thuế' },
                { name: 'Chủ doanh nghiệp Không khai thuế' },
                { name: 'Học sinh / Sinh viên' }
            ]
        },
        { 
            key: 4, 
            content: 'Tình trạng hôn nhân' ,
            select : [
                { name: 'Đã kết hôn' },
                { name: 'Đã ly hôn' },
                { name: 'Ly hôn có nuôi con nhỏ' },
                { name: 'Cha / mẹ đơn thân' },
                { name: 'Góa chồng / vợ' },
                { name: 'Về hưu - Có lương hưu' },
                { name: 'Về hưu - không có lương hưu' },
                { name: 'Độc thân' },
                { name: 'Độc thân trên 40 tuổi' },
                { name: 'Độc thân từ 30 tuổi đến 40 tuổi' },
                { name: 'Độc thân từ 22 tuổi đến 29 tuổi' },
                { name: 'Độc thân từ 18 tuổi đến 21 tuổi' },
                { name: 'Độc thân tcòn nhỏ' },
            ]
        },
        { 
            key: 5, 
            content: 'Thông tin về khả năng tài chính' ,
            select: [
                { name: 'Sổ tiết kiệm và bảng kê nguồn gốc thu nhập' },
                { name: 'Có sổ tiết kiệm không có bảng kê thu nhập' },
                { name: 'Sổ tiết kiệm trên 500 triệu' },
                { name: 'Sổ tiết kiệm dưới 500 triệu' },
                { name: 'Không có sổ tiết kiệm' }
            ]
        },
        { 
            key: 6, 
            content: 'Thông tin về tài sản cố định',
            select : [
                { name: 'Giấy tờ nhà đất để ở' },
                { name: 'Giấy tờ sở hữu xe' },
                { name: 'Không có tài sản cố định' }
            ]
        }
    ];

    return (
        <ListingWrapper>
            <Head>
                <title>Kiểm tra tỉ lệ đậu visa</title>
            </Head>
            <BreadcrumbWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                        <span>Trang chủ</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/blog">
                        <span>Kiểm tra tỉ lệ đậu visa</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Divider />
            </BreadcrumbWrapper>
            <CheckVisaWrapper>
                <Steps current={0} percent={0}>
                    <Step title="Hồ sơ" description="Kiểm tra hồ sơ" />
                    <Step title="Tình trạng" description="Xem xét hồ sơ" />
                    <Step title="Kết quả" description="Xem tỷ lệ đậu visa" />
                </Steps>
            </CheckVisaWrapper>
            <CheckVisaWrapper>
                {question.map(q => {
                    if (q.key <= selected) {
                        return (
                            <CheckVisaItem
                                question={q.content}
                            >
                                <Select
                                    showSearch
                                    style={{ width: 350 }}
                                    placeholder={q.content}
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {q.select.map((item, i) =>  <Option value={item.name} key={i}>{item.name}</Option>)}
                                </Select>
                            </CheckVisaItem>
                        )
                    }
                })}
            </CheckVisaWrapper>
        </ListingWrapper>
    );
}
