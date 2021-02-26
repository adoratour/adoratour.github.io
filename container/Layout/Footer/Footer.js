import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import Footers from 'components/Footer/Footer';
import LogoImage from 'assets/images/logo-alt.svg';
import VisaPayment from 'assets/images/payment_1.svg';
import MasterCardPayment from 'assets/images/payment_2.svg';
import CashPayment from 'assets/images/payment_3.svg';
import InternetBankingPayment from 'assets/images/payment_4.svg';
import FacebookIcon from 'assets/images/icons/facebook.svg';
import TwitterIcon from 'assets/images/icons/twitter.svg';
import InstagramIcon from 'assets/images/icons/instagram.svg';
import YoutubeIcon from 'assets/images/icons/youtube.svg';

const payment = [
  <img src={VisaPayment} alt="visa_payment" />,
  <img src={MasterCardPayment} alt="mastercard_payment" />,
  <img src={CashPayment} alt="cash_payment" />,
  <img src={InternetBankingPayment} alt="internetbanking_payment" />
];
const social = [
  <img src={FacebookIcon} alt='Facebook' />,
  <img src={TwitterIcon} alt='Twitter' />,
  <img src={InstagramIcon} alt='Instagram' />,
  <img src={YoutubeIcon} alt='Youtube' />,
];

const about = ['Giới thiệu', 'Tuyển dụng', 'Blog'];
const agent = ['Đối tác đăng nhập', 'Đối tác liên kết', 'Chương trình dành cho đại lý', 'Hợp tác cùng chúng tôi'];
const term = ['Chính sách bảo mật', 'Điều khoản sử dụng', 'Quyền riêng tư', 'Chính sách Cookie', 'Quy chế hoạt động của Website'];
const guide = ['Hướng dẫn thanh toán trực tuyến', 'Hướng dẫn sử dụng mã giảm giá'];

const Footer = ({ path }) => {
  return (
    <Footers
      path={path}
      logo={<Logo withLink linkTo="/" src={LogoImage} title="TripFinder." />}
      address={`188 Đông Bắc, P. TCH, Q.12`}
      email={`info@tripfinder.vn`}
      phone={`10939 10 7711`}
      license={`Giấy phép kinh doanh số : 0315136043 do sở KH&ĐT cấp ngày 28/06/2018`}
      images={payment.map((item, index) => <li key={index}>{item}</li>)}
      about={about.map(item => <li key={item}>{item}</li>)}
      agent={agent.map(item => <li key={item}>{item}</li>)}
      term={term.map(item => <li key={item}>{item}</li>)}
      guide={guide.map(item => <li key={item}>{item}</li>)}
      social={social.map((item, index) => <li key={index}>{item}</li>)}
      copyright={<p>© Bản quyền thuộc về <b style={{ color: '#FF8000' }}>Trip Finder</b> | Cung cấp bởi <b>Adora Tour</b></p>}
    />
  );
};

export default Footer;
