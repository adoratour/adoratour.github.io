import React from 'react'
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import VisaItemWrapper, {
    ImageWrapper,
    ContentWrapper,
    MetaInfo,
    LocationArea,
    TitleArea,
    BookingArea,
    PriceArea,
    FavoriteIcon,
} from './VisaItem.style';

const VisaItem = ({
    favorite,
    children,
    location,
    title,
    price,
    info,
    button,
}) => {
    return (
        <VisaItemWrapper className="grid_card">
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
        </VisaItemWrapper>
    )
}

VisaItem.PropTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    price: PropTypes.string,
    location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    button: PropTypes.element,
}

export default VisaItem;