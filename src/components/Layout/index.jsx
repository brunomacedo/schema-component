import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/global';
import * as S from './styled';

function Layout({ back, children }) {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <S.LayoutMain>
        {back && (
          <S.Back to="/">
            Back
          </S.Back>
        )}
        {children}
      </S.LayoutMain>
    </S.LayoutWrapper>
  );
}

Layout.propTypes = {
  back: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  back: false,
};

export default Layout;
