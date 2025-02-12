import Drawer from "@mui/material/Drawer";
import * as React from "react";

export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      informacion de la tarjeta
    </Drawer>
  );
}
