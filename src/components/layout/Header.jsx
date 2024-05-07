import AppBar from "@mui/material/AppBar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid"; // Import Grid
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600, // Increase width
  height: 600, // Increase height
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#fff", boxShadow: 2, color: "#000" }}>
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={2}>
              <img
                style={{ width: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5xwqoVUsUDErUWcjlGijv6Klq5K8aJZTFQ&usqp=CAU"
                alt=""
              />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <input
                  style={{
                    width: "35%",
                    height: "6vh",
                    borderRadius: "10px",
                    border: "1px solid gray",
                    textAlign: "center",
                    marginLeft: "5%",
                  }}
                  type="text"
                  placeholder="taom,tovar,oshxona"
                />
                <button
                  style={{
                    height: "6vh",
                    width: "10%",
                    borderRadius: "10px",
                    color: "black",
                    backgroundColor: "yellow",
                    border: "none",
                    fontSize: "18px",
                  }}
                >
                  Topish
                </button>
                <Button
                  style={{
                    width: "330px",
                    height: "6vh",
                    backgroundColor: "#f5f5dc",
                    color: "black",
                    borderRadius: "10px",
                  }}
                  onClick={handleOpen}
                >
                  Toshkent, Yunusobod
                </Button>
              </Box>
            </Grid>
            <Grid item xs={2} />
          </Grid>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open} style={{ height: "70%", width: "50%", borderRadius: "20px", borderColor: "gray" }}>
              <Box sx={{ ...style }}>
                <h1>Yetkazish Manzili</h1>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    height: "6vh",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    boxSizing: "border-box",
                    color: "gray",
                  }}
                />

                <iframe
                  title="Google Maps"
                  width="100%"
                  height="60%"
                  borderRadius="10px"
                  frameBorder="0"
                  src="https://maps.google.com/maps?q=37.773972,-122.431297&z=15&output=embed"
                  style={{ marginTop: "10px" }}
                />
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "yellow",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  Tasdiqlash
                </button>
              </Box>
            </Fade>
          </Modal>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
            <NavLink to={"/"} style={{ color: "gray", textDecoration: "none", marginRight: "20px" }}>
              Home
            </NavLink>
            <Box sx={{ width: "1px", height: "20px", backgroundColor: "gray", marginRight: "20px" }} />
            <NavLink to={"/restaurant"} style={{ color: "gray", textDecoration: "none", marginRight: "20px" }}>
              Restaurant
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, marginTop: "10px", padding: "20px" }}></Box>
    </Box>
  );
}
