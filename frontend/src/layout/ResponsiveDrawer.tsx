import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Toolbar,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResponsiveDrawer({
  open,
  onClose,
  isLoggedIn,
  onLogout,
  toggleTheme,
  isDarkMode,
}: {
  open: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#113F67",
            color: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            kitabNote
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#fff" }}>
            <Close />
          </IconButton>
        </Toolbar>
        <List>
          <ListItemButton
            onClick={() => {
              navigate("/");
              onClose();
            }}
            sx={{
              fontWeight: isActive("/") ? "bold" : "normal",
              color: isActive("/") ? "white" : "text.primary",
              backgroundColor: isActive("/") ? "#113F67" : "transparent",
              // backgroundColor: "#113F67",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/notes");
              onClose();
            }}
            sx={{
              fontWeight: isActive("/notes") ? "bold" : "normal",
              color: isActive("/notes") ? "white" : "text.primary",
              backgroundColor: isActive("/notes") ? "#113F67" : "transparent",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            <ListItemText primary="Notes" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/profile");
              onClose();
            }}
            sx={{
              fontWeight: isActive("/profile") ? "bold" : "normal",
              color: isActive("/profile") ? "white" : "text.primary",
              backgroundColor: isActive("/profile") ? "#113F67" : "transparent",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            <ListItemText primary="Profile" />
          </ListItemButton>
          {isLoggedIn ? (
            <>
              <ListItemButton
                onClick={() => {
                  onLogout();
                  onClose();
                }}
              >
                <ListItemText primary="Logout" sx={{ color: "red" }} />
              </ListItemButton>
            </>
          ) : (
            <>
              <ListItemButton
                onClick={() => {
                  navigate("/login");
                  onClose();
                }}
                sx={{
                  fontWeight: isActive("/login") ? "bold" : "normal",
                  color: isActive("/login") ? "white" : "text.primary",
                  backgroundColor: isActive("/login")
                    ? "#113F67"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              >
                <ListItemText primary="Login" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  navigate("/register");
                  onClose();
                }}
                sx={{
                  fontWeight: isActive("/register") ? "bold" : "normal",
                  color: isActive("/register") ? "white" : "text.primary",
                  backgroundColor: isActive("/register")
                    ? "#113F67"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              >
                <ListItemText primary="Register" />
              </ListItemButton>
            </>
          )}
          <div
            style={{ borderBottom: "1px solid #f0f0f0", margin: "8px 16px" }}
          />
          <ListItemButton>
            <FormControlLabel
              control={
                <Switch
                  checked={isDarkMode}
                  onChange={() => {
                    toggleTheme();
                  }}
                />
              }
              label={isDarkMode ? "Dark Mode" : "Light Mode"}
              sx={{ ml: 1 }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
