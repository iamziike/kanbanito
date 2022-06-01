import { List } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import BugReportIcon from '@mui/icons-material/BugReport';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MiscellaneousServices from '@mui/icons-material/MiscellaneousServices';

import {
  OVERVIEW,
  PROJECT_NAV_LINK,
  REPORTS,
  MESSAGES,
  SETTINGS,
  HELP_CENTER,
  MISC,
  LOGOUT,
  NAVIGATION,
  SUBMENU_DISPLAY,
} from '../../../../helpers/constants';
import ActionMatcher from './ActionMatcher';
import CommonScrollableWrapper from '../../../commons/CommonScrollableWrapper/CommonScrollableWrapper';
import useMediaQueryMatches from '../../../../hooks/useMediaQueryMatches';

const actionItems = [
  {
    label: OVERVIEW,
    icon: <HomeOutlinedIcon />,
    to: '/',
    type: NAVIGATION,
  },
  {
    label: REPORTS,
    icon: <BugReportIcon />,
  },
  {
    label: PROJECT_NAV_LINK,
    icon: <ElectricBoltOutlinedIcon />,
    subMenuItems: [],
    type: SUBMENU_DISPLAY,
  },
  {
    label: MESSAGES,
    icon: <EmailOutlinedIcon />,
  },
  {
    label: SETTINGS,
    icon: <SettingsOutlinedIcon />,
  },
  {
    label: HELP_CENTER,
    icon: <SupportAgentOutlinedIcon />,
  },
  {
    label: MISC,
    icon: <MiscellaneousServices />,
    subMenuItems: [
      {
        label: MISC,
        icon: <MiscellaneousServices />,
      },
      {
        label: MISC + Math.random(),
        icon: <MiscellaneousServices />,
      },
      {
        label: MISC + Math.random(),
        icon: <MiscellaneousServices />,
      },
      {
        label: MISC + Math.random(),
        icon: <MiscellaneousServices />,
      },
      {
        label: MISC + Math.random(),
        icon: <MiscellaneousServices />,
      },
      {
        label: MISC + Math.random(),
        icon: <MiscellaneousServices />,
      },
      {
        label: MISC + Math.random(),
        icon: <MiscellaneousServices />,
      },
    ],
    type: SUBMENU_DISPLAY,
  },
  {
    label: LOGOUT,
    icon: <LogoutOutlinedIcon />,
  },
];

const Actions = () => {
  const matches = useMediaQueryMatches({ breakpoint: 1050 });
  const matchesMobile = useMediaQueryMatches({ breakpoint: 400 });

  return (
    <CommonScrollableWrapper>
      {(sx) => {
        return (
          <List sx={sx}>
            {actionItems.map((actionItem) => {
              if (matches)
                actionItem = {
                  ...actionItem,
                  isLabelHidden: matches,
                  disableLeftIconPadding: true,
                  iconSx: {
                    mx: 'auto',
                    color: 'primary.dark',
                  },
                  iconInnerChildSx: { fontSize: matchesMobile ? 30 : 50 },
                  exploreMoreIconSx: {
                    position: 'absolute',
                    right: 2,
                    fontSize: 30,
                    color: 'primary.main',
                  },
                  isAlternate: true, //forSubmenus
                };
              return <ActionMatcher key={actionItem.label} {...actionItem} />;
            })}
          </List>
        );
      }}
    </CommonScrollableWrapper>
  );
};

export default Actions;
