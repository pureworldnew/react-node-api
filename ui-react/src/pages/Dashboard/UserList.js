import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowForwardOutlined as ArrowForwardIcon } from "@mui/icons-material";

export const UserList = ({ users }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {/* <Typography variant="h6" className={classes.title}> */}
        <Typography variant="h6">
          List of users fetched from jsonplaceholder:
        </Typography>
        {/* <div className={classes.demo}> */}
        <div>
          <List dense={false}>
            {users.map((user) => (
              <ListItem key={user.id}>
                <ListItemIcon>
                  <ArrowForwardIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={user.firstName} />
                <ListItemText primary={user.lastName} />
                <ListItemText primary={user.gender} />
                <ListItemText primary={user.location} />
                <ListItemText primary={user.age} />
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
