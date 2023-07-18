import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import React from "react";
import {yariga, logo} from 'assets'

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/" style={{ marginTop: '30px' }}>
  {collapsed ? (
              <img src={logo} alt="Yariga" width="28px" />
           ) : (
    <img src={yariga} alt="Refine" width="140px" />
  )}
</Link>

    </Button>
  );
};
