import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css'
function Footer(props) {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>About Us</h2>
          <Link to='/services'>How it works</Link>
          <Link to='/services'>Testemonials</Link>
          <Link to='/services'>Careers</Link>
          <Link to='/services'>Investor</Link>
          <Link to='/services'>Terms of Services</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>Lorem Ipsum</h2>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>Lorem Ipsum</h2>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          <Link to='/services'>Lorem Ipsum</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/products' className='social-logo'>
              HAtW<i className="fa-solid fa-hand-back-fist"></i>
            </Link>
          </div>
          <small className='website-rights'>HAtW Ⓒ 2022</small>
          <div className='social-icons'>
            <Link to='/' targe='_blank' aria-label='Facebook' className='social-icon-link facebook'>
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link to='/' targe='_blank' aria-label='Instagram' className='social-icon-link instagram'>
              <i className='fab fa-instagram'></i>
            </Link>
            <Link to='/' targe='_blank' aria-label='Twitter' className='social-icon-link twitter'>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link to='/' targe='_blank' aria-label='Youtube' className='social-icon-link youtube'>
              <i className='fab fa-youtube'></i>
            </Link>
            <Link to='/' targe='_blank' aria-label='Linked In' className='social-icon-link linkedin'>
              <i className='fab fa-linkedin'></i>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;