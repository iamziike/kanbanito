import NavigationAction from './ActionsTypes/NavigationAction';
import CommonListItemButton from '../../../commons/CommonListItemButton/CommonListItemButton';
import SubMenuDisplayAction from './ActionsTypes/SubMenuDisplayAction';
import ProjectsDisplayAction from './ActionsTypesVariants/ProjectsDisplayAction';
import {
  NAVIGATION,
  PROJECT_NAV_LINK,
  SUBMENU_DISPLAY,
} from '../../../../helpers/constants';

const ActionMatcher = (props) => {
  const { type } = props;

  if (props.label === PROJECT_NAV_LINK)
    return <ProjectsDisplayAction {...props} />;
  if (type === NAVIGATION) return <NavigationAction {...props} />;
  if (type === SUBMENU_DISPLAY) return <SubMenuDisplayAction {...props} />;

  return <CommonListItemButton {...props} />;
};

export default ActionMatcher;
