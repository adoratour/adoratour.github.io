import React from 'react'
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import TourItemWrapper, {
    FavoriteIcon,
    ImageWrapper,
    ContentWrapper,
    MetaInfo,
    LocationArea,
    TitleArea,
    BookingArea,
    PriceArea,
} from './TourItem.style'

const TourItem = ({
    favorite,
    children,
    location,
    title,
    price,
    info,
    button,
}) => {
    return (
        <TourItemWrapper className="grid_card">
            <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
            {location && <LocationArea><FaMapMarkerAlt color="red" /> {location}</LocationArea>}
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
        </TourItemWrapper>
    )
}

TourItem.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    price: PropTypes.string,
    location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    button: PropTypes.element,
}

export default TourItem;