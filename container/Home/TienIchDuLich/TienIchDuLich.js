import React from 'react'
import Router, { withRouter } from 'next/router';
import { Button, Space} from 'antd';

const TienIchDuLich = () =>{
    return(
        <>
        <Button type="default" style={{ margin: 5}}>Chứng minh tài chính</Button>
        <Button type="default" style={{ margin: 5}}>Bảo hiểm du lịch</Button>
        <Button type="default" style={{ margin: 5}}>Kiểm tra tỉ lệ đậu visa</Button>
        </>
    )
}

export default withRouter(TienIchDuLich);