import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemText, Divider, List } from "@mui/material";
import { useSelector } from "react-redux";
import { CollapseMenu } from "./components";

const Menu = () => {
  const { data, loading, error } = useSelector((state) => state.posts);
  const [giftMenuItems, setGiftMenuItems] = useState([]);
  useEffect(() => {
    if (!error && !loading && data.find((g) => g.category === "Gift")) {
      setGiftMenuItems(
        data.filter((g) => g.category === "Gift").map((g) => g.name)
      );
    }
  }, [data, loading, error]);
  console.log("giftMenuItems::", giftMenuItems);
  return (
    <>
      <Divider />
      <List>
        <ListItem button component={NavLink} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/subscribe">
          <ListItemText primary="Subscribe" />
        </ListItem>
        <ListItem button component={NavLink} to="/aboutus">
          <ListItemText primary="About us" />
        </ListItem>
      </List>
      <Divider />
      {giftMenuItems.length > 0 && (
        <CollapseMenu text="A Gift For Anyone" menuItems={giftMenuItems} />
      )}
      <Divider />
      <List position="bottom">
        <ListItem button component={NavLink} to="/privacypolicy">
          <ListItemText primary="Privacy Policy" />
        </ListItem>
        <ListItem button component={NavLink} to="/disclaimer">
          <ListItemText primary="Disclaimer" />
        </ListItem>
      </List>
    </>
  );
};

export default React.memo(Menu);
