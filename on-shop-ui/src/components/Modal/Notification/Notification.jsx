import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Notification = ({ open, setOpen, type }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          style={{
            backgroundColor: "black",
            marginTop: "80px",
          }}
          severity={
            type === "copy"
              ? "info"
              : type === "remove"
              ? "error"
              : type === "remind"
              ? "warning"
              : "success"
          }
          variant="filled"
        >
          {type === "add"
            ? "Successfully added!"
            : type === "update"
            ? "Successfully updated!"
            : type === "remove"
            ? "Successfully removed!"
            : type === "remind"
            ? "Please select size and color first."
            : "Copied to clipboard!"}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Notification;
