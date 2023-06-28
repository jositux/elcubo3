import React, { Fragment } from 'react';
import styles from './season3.header.lang.module.scss';
import { useRouter } from "next/router";

const LangSelector = () => {

  const router = useRouter();

  return (
    <Fragment>
      <div className={styles.containerLang}>
        <div>
          <ul>
            <li>
              <a
                href={router.pathname}
                title="Español"
                className={
                  router.locale === 'en' ?
                    '' :
                    styles.active}
              >
                ES
              </a>
            </li>
            <li >
              <a
                title="English"
                href={'/en' + router.pathname}
                className={router.locale === 'en' ?
                  styles.active :
                  ''}
              >
                EN
              </a>
            </li>
          </ul>
        </div>
      </div>


    </Fragment >
  );
};

export default LangSelector;
