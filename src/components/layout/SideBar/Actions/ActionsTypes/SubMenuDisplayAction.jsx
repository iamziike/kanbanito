import { useRef, useState } from 'react';
import { Collapse, Paper } from '@mui/material';

import ActionMatcher from '../ActionMatcher';
import CommonListItemButton from '../../../../commons/CommonListItemButton/CommonListItemButton';
import CommonMenu from '../../../../commons/CommonMenu/CommonMenu';

const SubMenuDisplayAction = (props) => {
  const paperRef = useRef();
  const [isClick, setIsClick] = useState(false);
  const { subMenuItems, isAlternate } = props;

  const subMenuActions = subMenuItems.map((item) => (
    <ActionMatcher key={item.label} {...{ ...item, dense: !isAlternate }} />
  ));

  const handleClick = () => setIsClick((prev) => !prev);
  return (
    <>
      <Paper
        sx={{
          borderRadius: 0,
          backgroundColor: isClick ? 'rgba(0, 0, 0, 0.04)' : 'initial',
        }}
        ref={paperRef}
        elevation={isClick ? 3 : 0}
      >
        <CommonListItemButton
          {...props}
          isIncludesExpandMore={true}
          isClick={isClick}
          onClick={handleClick}
        />
      </Paper>
      {isAlternate ? (
        <CommonMenu
          anchorElement={paperRef.current}
          isMenuOpen={isClick}
          onClose={handleClick}
          items={subMenuActions}
        />
      ) : (
        <Collapse
          sx={{
            pl: 1.2,
            backgroundColor: isClick ? 'rgba(0, 0, 0, 0.04)' : 'initial',
            borderBottom: '1.5px solid rgb(0, 0, 0,0.1)',
            pb: 1,
            '.MuiListItemIcon-root > *': {
              fontSize: 20,
            },
          }}
          in={isClick}
          timeout='auto'
          unmountOnExit
        >
          {subMenuActions}
        </Collapse>
      )}
    </>
  );
};

export default SubMenuDisplayAction;
