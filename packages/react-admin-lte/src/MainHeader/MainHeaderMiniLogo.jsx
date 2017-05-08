import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const MainHeaderMiniLogo = ({
    children,
    className,
}) => {
  const classes = {
    'logo-mini': true,
  };

  return (
    <span className={classNames(className, classes)}>{children}</span>
  );
};

MainHeaderMiniLogo.propTypes = propTypes;

export default MainHeaderMiniLogo;