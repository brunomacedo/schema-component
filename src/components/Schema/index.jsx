import React from 'react';
import PropTypes from 'prop-types';

import FirstSchema from './FirstSchema';
import ChildSchema from './ChildSchema';
import Script from './Script';

function Schema({
  children,
  ...rest
}) {
  const joinJsonSchema = FirstSchema(rest) && (
    Object.assign(FirstSchema(rest), ChildSchema(children))
  );

  return (
    joinJsonSchema && (
      <Script type="application/ld+json">
        {
          JSON.stringify(joinJsonSchema)
        }
      </Script>
    )
  );
}

Schema.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Schema.defaultProps = {
  children: null,
};

export default Schema;
