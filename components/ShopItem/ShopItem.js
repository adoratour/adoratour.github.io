import React from 'react'
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ShopItemWrapper, {
    FavoriteIcon,
    ImageWrapper,
    ContentWrapper,
    MetaInfo,
    LocationArea,
    TitleArea,
    BookingArea,
    PriceArea,
} from './ShopItem.style'

const ShopItem = ({
    favorite,
    children,
    location,
    title,
    price,
    info,
    button,
}) => {
    return (
        <ShopItemWrapper>
            <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
            {/* {location && <LocationArea><FaMapMarkerAlt color="red" /> {location}</LocationArea>} */}
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
        </ShopItemWrapper>
    )
}

ShopItem.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    price: PropTypes.string,
    location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    button: PropTypes.element,
}

export default ShopItem;