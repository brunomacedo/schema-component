import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function Button({
  href,
  target,
  children,
}) {
  return (
    <S.Button
      href={href}
      target={target}
      rel={target === '_blank' && 'noopener noreferrer'}
    >
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
