import { FormattedMessage } from 'react-intl';
import { Navbar, Button } from 'react-bootstrap';
import Link from 'next/link';
import styleClasses from '../styles/header.module.scss';

export default function StaticHeader() {
  return (
    <Navbar fixed='top' className={styleClasses.navbar}>
      <Link href='/'>
        <a>SushiVid</a>
      </Link>
      <input id='toggler' type='checkbox' className={styleClasses.toggler} />
      <div className={styleClasses.hamburger}>
        <div className={styleClasses.lines}></div>
      </div>
      <div className={styleClasses.menu}>
        <ul className={styleClasses.list}>
          <li>
            <Link href='/articles'>
              <a>
                <Button variant='link' className={styleClasses.link}>
                  <FormattedMessage id='blog' />
                </Button>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/pricing'>
              <a>
                <Button variant='link' className={styleClasses.link}>
                  <FormattedMessage id='pricing' />
                </Button>
              </a>
            </Link>
          </li>
          <li className='my-2 ml-2 mr-1'>Sign Up</li>
          <li className={styleClasses.languageContainer}>
            <div className={styleClasses.languages}>
              <p className={styleClasses.languageTitle}>
                <FormattedMessage id='languages' />
              </p>
              <p className={styleClasses.currentLocale}>EN</p>
            </div>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
