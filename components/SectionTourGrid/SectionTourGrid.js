import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/UI/Text/Text';
import Box from 'components/UI/Box/Box';
import { Button } from 'antd';
import TourCard from '../TourCard/TourCard';
const LoadMore = ({
  handleLoadMore,
  showButton,
  buttonText,
  loading,
  loadMoreComponent,
  loadMoreStyle,
}) => {
  return (
    !!showButton && (
      <Box className="loadmore_wrapper" {...loadMoreStyle}>
        {loadMoreComponent ? (
          loadMoreComponent
        ) : (
          <Button loading={loading} onClick={handleLoadMore}>
            {buttonText || 'Load More'}
          </Button>
        )}
      </Box>
    )
  );
};

export default function SectionTourGrid({
  data = [],
  totalItem,
  limit,
  columnWidth,
  paginationComponent,
  handleLoadMore,
  loadMoreComponent,
  placeholder,
  loading,
  buttonText,
  rowStyle,
  columnStyle,
  loadMoreStyle,
  link,
}) {
  const n = limit ? Number(limit) : 1;
  const limits = Array(n).fill(0);

  let showButton = data.length < totalItem;

  return (
    <>
      <Box className="grid_wrapper" {...rowStyle}>
        {data && data.length
          ? data.map((item) => {
              return (
                <Box
                  className="grid_column"
                  width={columnWidth}
                  key={item.id}
                  {...columnStyle}
                >
                  <TourCard link={link} {...item}/>
                </Box>
              );
            })
          : null}
        {loading &&
          limits.map((item, i) => (
            <Box
              className="grid_column"
              width={columnWidth}
              key={i}
              {...columnStyle}
            >
              {placeholder ? placeholder : <Text content="Loading ..." />}
            </Box>
          ))}
      </Box>

      {showButton && (
        <LoadMore
          showButton={showButton}
          handleLoadMore={handleLoadMore}
          loading={loading}
          buttonText={buttonText}
          loadMoreComponent={loadMoreComponent}
          loadMoreStyle={loadMoreStyle}
        />
      )}
      {paginationComponent && (
        <Box className="pagination_wrapper">{paginationComponent}</Box>
      )}
    </>
  );
}

SectionTourGrid.propTypes = {
  data: PropTypes.array.isRequired,
  totalItem: PropTypes.number,
  columnWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  paginationComponent: PropTypes.element,
  handleLoadMore: PropTypes.func,
  loadMoreComponent: PropTypes.element,
  placeholder: PropTypes.element,
  loading: PropTypes.bool,
  limit: PropTypes.number,
  buttonText: PropTypes.string,
  rowStyle: PropTypes.object,
  columnStyle: PropTypes.object,
  loadMoreStyle: PropTypes.object,
};

SectionTourGrid.defaultProps = {
  rowStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
  },
  columnStyle: {
    pr: ['10px', '10px', '10px', '10px', '10px', '15px'],
    pl: ['10px', '10px', '10px', '10px', '10px', '15px'],
  },
  loadMoreStyle: {
    flexBox: true,
    justifyContent: 'center',
    mt: '1rem',
  },
};
