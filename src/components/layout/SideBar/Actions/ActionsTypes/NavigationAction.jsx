import { Link } from 'react-router-dom';

import CommonListItemButton from '../../../../commons/CommonListItemButton/CommonListItemButton';

const NavigationAction = (props) => {
  const { to } = props;
  return (
    <Link to={to}>
      <CommonListItemButton {...props} />
    </Link>
  );
};

export default NavigationAction;
