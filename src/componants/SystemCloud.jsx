import React, { useState } from "react";
import Select from "react-select";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Service from "./Service";
import Delegate from "./Delegate";
import ServiceType from "../Json/Service List.json";
import Customernames from "../Json/CustomerDifferentNames.json";
import Customers from "../Json/Customer.json";

const SystemCloud = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
  ];
  const serviceTypes = ServiceType.map((item) => ({
    value: item.ID,
    label: item.ServiceName,
    type: item.ScheduleType,
  }));
  const CustomerNames = Customernames.map((item) => ({
    value: item.CustomerID,
    label: item.Name,
  }));
  const CustomerOptions = Customers.map((item) => ({
    value: item.CustomerID,
    label: item.CustomerName,
  }));

  return (
    <div className="container">
      <div className="navbar">
        <span className="cmpny-name">Cloud System Wll</span>
        <div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            style={{ color: "white", marginRight: 60 }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <div className="drawer-div">
              <List>
                {menuItems.map((item, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </div>
      </div>
      <div className="input-box-container">
        <div className="input-div">
          <span style={{ fontSize: 15, fontWeight: "600" }}>Request No</span>
          <input type="text" className="frst-req-input" placeholder="Req No" />
        </div>
        <div className="input2-div">
          <span style={{ fontSize: 15, fontWeight: "600" }}>Customer Name</span>
          <Select
            className="frst-input"
            options={CustomerOptions}
            placeholder="Select..."
          />
        </div>
        <div className="input-div">
          <span style={{ fontSize: 15, fontWeight: "600" }}>Service Type</span>
          <Select
            className="frst-input"
            options={serviceTypes}
            placeholder="Select..."
          />
        </div>
        <div className="input2-div">
          <span style={{ fontSize: 15, fontWeight: "600" }}>
            Customer Different Name
          </span>
          <Select
            className="frst-input"
            options={CustomerNames}
            placeholder="Select..."
          />
        </div>
      </div>

      <div className="services-delegate-container">
        <Service />
        <Delegate />
      </div>

      <div className="buttons-container">
        <div className="buttons-sub-div">
          <button className="save-btns">Save</button>
          <button className="clear-btns">Clear</button>
          <button className="delete-btns">Delete</button>
          <button className="close-btns">Close</button>
        </div>
      </div>
    </div>
  );
};

export default SystemCloud;
