import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <span>&#169; 2023</span>
        &nbsp;{/* added whitespace */}
        <a target='_blank' href='https://www.hannahmachado.com'>
          Hannah Machado.
        </a>
        &nbsp;
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
