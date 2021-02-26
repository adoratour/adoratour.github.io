import React from 'react';
import PropTypes from 'prop-types';
import FooterWrapper, {
  SubcribeArea,
  MainFooterArea,
  MenuWrapper,
  SocialArea,
  LogoWrapper,
  RowArea,
  GrayFooter,
  FooterPayment,
  Container,
  NotGayFooter,
  CopyrightArea,
  SecondaryFooter,
} from './Footer.style';
import { Row, Col, Form, Input, Button, BackTop  } from 'antd';

const Footer = ({ logo, menu, copyright, className, path,
  address, email, phone, license, images, guide, about, agent, term, social
}) => {
  return (
    <>
      <FooterWrapper id="footer" className={className}>
        <SubcribeArea>
          <Container>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around" align="middle">
              <Col xs={{ span: 32 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }} >
                <SocialArea>
                  <ul>
                    {social && social}
                  </ul>
                </SocialArea>
              </Col>
              <Col xs={{ span: 32 }} lg={{ span: 8 }} >
                <div>
                  <h2>ĐĂNG KÝ NHẬN TIN</h2>
                  <p>Các deal du lịch giảm giá đến 60% sẽ được gửi đến bạn</p>
                </div>
              </Col>
              <Col lg={{ span: 10 }} >
                <Form layout="inline">
                  <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "60%", marginRight: 0 }}>
                    <Input placeholder="Nhập địa chỉ Email" size="large" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">
                      Đăng ký
                      </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Container>
        </SubcribeArea>
        <MainFooterArea>
          <Container>
            <RowArea>
              <GrayFooter>
                <LogoWrapper>
                  <Row justify='space-around' align="middle" >
                    <Col>
                      {logo && logo}
                    </Col>
                  </Row>
                </LogoWrapper>
                <ul>
                  <li><b>Địa chỉ : </b>{address && address}</li>
                  <li><b>Email : </b>{email && email} </li>
                  <li><b>Điện thoại : </b>{phone && phone}</li>
                  <li><i>{license && license}</i></li>
                </ul>
                <FooterPayment>
                  <ul> {images && images}</ul>
                </FooterPayment>
              </GrayFooter>
              <NotGayFooter>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around" align="top">
                  <Col className="gutter-row" xs={{ span: 12 }} sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <h3>VỀ TRIP FINDER</h3>
                    <ul>
                      {about && about}
                    </ul>
                  </Col>
                  <Col className="gutter-row" xs={{ span: 12 }} sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <h3>ĐỐI TÁC</h3>
                    <ul>
                      {agent && agent}
                    </ul>
                  </Col>
                  <Col className="gutter-row" xs={{ span: 12 }} sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <h3>ĐIỀU KHOẢN SỬ DỤNG</h3>
                    <ul>
                      {term && term}
                    </ul>
                  </Col>
                  <Col className="gutter-row" xs={{ span: 12 }} sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <h3>HƯỚNG DẪN</h3>
                    <ul>
                      {guide && guide}
                    </ul>
                  </Col>
                  <Col span={24}>{copyright && <CopyrightArea>{copyright}</CopyrightArea>}</Col>
                </Row>
                <BackTop />
              </NotGayFooter>
            </RowArea>
          </Container>
        </MainFooterArea>
      </FooterWrapper>
      {!!path && <SecondaryFooter />}
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element,
  menu: PropTypes.element,
  bgSrc: PropTypes.string,
  copyright: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Footer;
