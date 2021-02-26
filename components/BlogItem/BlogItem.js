import React from 'react'
import PropTypes from 'prop-types';
import BlogItemWrapper, {
    ImageWrapper,
    ContentWrapper,
    TitleArea,
    Description,
    ActionWrapper,
    ActionIcon,
    UserWrapper,
    Avatar,
    UserInfo,
    UserName,
    TimeStamp,
    Meta
} from './BlogItem.style';
import { Divider } from 'antd';

const BlogItem = ({
    children,
    title,
    description,
    button,
    avatar,
    username,
    timestamp,
    view
}) => {
    return (
        <BlogItemWrapper>
            <UserWrapper>
                {avatar && <Avatar>{avatar}</Avatar>}
                <UserInfo>
                    {username && <UserName>{username}</UserName>}
                    <Meta>
                        {timestamp && <TimeStamp>{timestamp}</TimeStamp>}
                        {view && <TimeStamp>{view}</TimeStamp>}
                    </Meta>
                </UserInfo>
            </UserWrapper>
            <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
            <ContentWrapper>
                {title && <TitleArea>{title}</TitleArea>}
                {description && <Description>{description}</Description>}

                <ActionWrapper>
                    <Divider style={{ marginTop: 15, marginBottom: 15 }} />
                    <ActionIcon>{button}</ActionIcon>
                </ActionWrapper>
            </ContentWrapper>
        </BlogItemWrapper>
    )
}

BlogItem.PropTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default BlogItem;