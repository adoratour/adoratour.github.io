import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import SectionShopGrid from 'components/SectionShopGrid/SectionShopGrid';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import { SearchContext } from 'context/SearchProvider';
import GetAPIData, {
  Paginator,
  SearchedData,
  SearchStateKeyCheck,
  ProcessAPIData,
} from 'library/helpers/get_api_data';
import { getDeviceType } from 'library/helpers/get_device_type';
import { SINGLE_POST_PAGE } from 'settings/constant';
import {
  LISTING_PAGE_POST_LIMIT,
  LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP,
  LISTING_PAGE_COLUMN_WIDTH_NORMAL
} from 'settings/config';
import ListingWrapper, {
  PostsWrapper,
  SearchWrapper,
  BreadcrumbWrapper
} from 'container/Listing/Listing.style';
import Sort from 'components/UI/Sort/Sort';
import { Breadcrumb } from 'antd';
import SearchForm from 'container/Home/Search/SearchForm';

export default function ShopPage({ processedData, deviceType }) {
  const { state, dispatch } = useContext(SearchContext);
  const statekey = SearchStateKeyCheck(state);
  const [posts, setPosts] = useState(
    processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (statekey === true) {
      const newData = SearchedData(processedData);
      setPosts(newData);
    } else {
      setPosts(processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []);
    }
  }, [statekey]);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = Paginator(posts, processedData, LISTING_PAGE_POST_LIMIT);
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth =   LISTING_PAGE_COLUMN_WIDTH_NORMAL;

  return (
    <ListingWrapper>
      <Head>
        <title>Shop Hàng Xách Tay Chính Hãng</title>
      </Head>

      <BreadcrumbWrapper>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <span>Trang chủ</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/tour">
            <span>Shop</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </BreadcrumbWrapper>

      <img src="https://bizweb.dktcdn.net/100/374/261/themes/747465/assets/cat-banner-2.jpg?1609693765185" alt="banner" />

      <PostsWrapper>
        <SearchForm />
      </PostsWrapper>
      <SearchWrapper>
        <Sort />
      </SearchWrapper>

      <PostsWrapper>
        <SectionShopGrid
          link={SINGLE_POST_PAGE}
          columnWidth={columnWidth}
          deviceType={deviceType}
          data={posts}
          totalItem={processedData.length}
          limit={LISTING_PAGE_POST_LIMIT}
          loading={loading}
          handleLoadMore={handleLoadMore}
          placeholder={<PostPlaceholder />}
        />
      </PostsWrapper>
    </ListingWrapper>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: 'hotel',
      name: 'listingHotel',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  const deviceType = getDeviceType(req);
  return {
    props: { processedData, deviceType },
  };
}
