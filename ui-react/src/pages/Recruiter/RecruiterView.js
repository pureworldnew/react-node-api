import React from "react";
import Heading from "components/Heading";
import { Button, Paper, Box } from "@mui/material";
import CustomTable from "components/CustomTable";
import CustomDateRangePicker from "components/CustomDateRangePicker";
import ConfirmDialog from "components/ConfirmDialog";

const RecruiterView = ({
  loading,
  error,
  data,
  columns,
  onClickReload,
  dateRange,
  setDateRange,
  dialogOpen,
  handleClickOpen,
  handleClose,
  handleConfirm,
  confirmText,
  confirmTitle,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 800,
        width: "100%",
      }}
    >
      <Heading>Recruiters By Calendly</Heading>
      <ConfirmDialog
        confirmTitle={confirmTitle}
        confirmText={confirmText}
        dialogOpen={dialogOpen}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <Paper
          elevation={3}
          sx={{ display: "flex", flexDirection: "row", padding: "15px" }}
        >
          <CustomDateRangePicker value={dateRange} setValue={setDateRange} />
          <Button
            variant="outlined"
            onClick={onClickReload}
            sx={{ margin: "5px" }}
          >
            Reload
          </Button>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{ margin: "5px" }}
          >
            Remove All
          </Button>
        </Paper>
      </Box>

      <CustomTable
        loading={loading}
        error={error}
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default RecruiterView;
