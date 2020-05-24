import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Script({ src, type, children }) {
  useEffect(() => {
    const script = document.createElement('script');

    if (src) {
      script.src = src;
    }

    if (type) {
      script.type = type;
    }

    if (children) {
      script.innerHTML = children;
    }

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [src, type, children]);
  return null;
}

Script.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

Script.defaultProps = {
  src: null,
  type: null,
  children: null,
};

export default Script;
