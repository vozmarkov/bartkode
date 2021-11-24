import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FixedSizeList } from "react-window";

const CollapseMenu = ({ text = "", menuItems = [] }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  function renderRow(props) {
    const { index, style } = props;
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={menuItems[index]} />
        </ListItemButton>
      </ListItem>
    );
  }
  console.log("menuItems.length::", menuItems.length);
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="div"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <FixedSizeList
            height={400}
            width={360}
            itemSize={25}
            itemCount={menuItems.length}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        </Collapse>
      </List>
    </>
  );
};

export default React.memo(CollapseMenu);
