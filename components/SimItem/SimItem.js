import React from 'react'
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SimItemWrapper, {
    ImageWrapper,
    ContentWrapper,
    MetaInfo,
    LocationArea,
    TitleArea,
    BookingArea,
    PriceArea,
    FavoriteIcon,
} from './SimItem.style';

const SimItem = ({
    favorite,
    children,
    location,
    title,
    price,
    info,
    button,
}) => {
    return (
        <SimItemWrapper className="grid_card">
            <ImageWrapper className="media_wrapper">{children}
            {location && <LocationArea><FaMapMarkerAlt color="red" /> {location}</LocationArea>}
            </ImageWrapper>
            
            <ContentWrapper className="content_wrapper">
                {title && <TitleArea>{title}</TitleArea>}
                <MetaInfo>
                    <ul>{info}</ul>
                </MetaInfo>
                <BookingArea>
                    {price && <PriceArea className="price">{price}</PriceArea>}
                    {button}
                </BookingArea>
            </ContentWrapper>
            {favorite && <FavoriteIcon>{favorite}</FavoriteIcon>}
        </SimItemWrapper>
    )
}

SimItem.PropTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    price: PropTypes.string,
    location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    button: PropTypes.element,
}

export default SimItem;