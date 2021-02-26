import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { RiShareForwardLine , RiChat1Line, RiHeartLine } from "react-icons/ri";
import { Avatar, Button } from 'antd';

const actionBtn = [
    <Button shape="circle" icon={<RiHeartLine size='18'/>}/>,
    <Button shape="circle" icon={<RiChat1Line size='18'/>}/>,
    <Button shape="circle" icon={<RiShareForwardLine size='18'/>}/>,
];

export default function BlogCard({
    title,
}) {
    return (
        <BlogItem
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            username={'Minh Tiến'}
            timestamp={'4 min ago'}
            view={'● 100K lượt xem'}
            title={title}
            description={'đây là phần mô tả của bài viết dài khoảng 20 từ....'}
            button={
                actionBtn.map(item => {
                    return <ul>
                        <li>{item}</li>
                    </ul>
                })
            }
        >
            <img
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
        </BlogItem>
    );
}