import { ChevronLeft, Menu, Notifications } from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { MouseEvent, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { dashMenu } from "./sidebar/dashItem";
function Copyright(props: any) {
  return (
    <Typography
      variant="subtitle2"
      color="text.secondary"
      align="center"
      letterSpacing={2}
      {...props}
    >
      Copyright © {new Date().getFullYear()} Developed By  Md Ishaq{" "}
  
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: theme.palette.custom?.main,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function DashboardContent() {
  const [open, setOpen] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const navigate = useNavigate();
  let location = useLocation();
  let currentLocation = location?.pathname.split('/').at(-1)
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleMenuClick = (e: MouseEvent<HTMLElement>, i: number,slug:string) => {
    setSelectedItem(i);
    navigate(slug)
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1,textTransform:"capitalize" }}
          >
            {currentLocation}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} sx={{ color: "custom.contrastText" }}>
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <Typography variant="subtitle2" fontSize={18}>
            <Link to="/" style={{ textDecoration: "none" }}>
              gadget ecommerce
            </Link>
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <Divider />
        <List
          component="nav"
          aria-label="dashboard sidebar menuitems"
          sx={{
            "&& .Mui-selected,&& .Mui-selected:hover": {
              bgcolor: "custom.dark",
              color: "custom.contrastText",
            },
          }}
        >
          {dashMenu?.map((item, i) => (
            <ListItemButton
              key={i}
              selected={selectedItem === item.id}
              onClick={(event) => handleMenuClick(event, item.id,item.title)}
              disableRipple
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.title || "Dashboard"}
                primaryTypographyProps={{
                  fontSize: "1.3ch",
                  fontWeight: "700",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}
