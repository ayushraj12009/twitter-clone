import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { navigationMenu } from "./NavigationMenu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {useDispatch, useSelector} from 'react-redux';
import { logout } from "../../Store/Auth/Action";

const Navigation = () => {
  const dispatch =useDispatch()
  const {auth} = useSelector(store=>store)
  const handleLogout = () => {
    console.log("logout");
    handleClose();
    dispatch(logout())
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
            alt=""
            width="30"
            height="30"
          ></img>
        </div>

        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 item-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate("/profile/$(5)")
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>

      <div className="flex item-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar
            alt="username"
            src="https://media.licdn.com/dms/image/D4D03AQF5UbVbymFLFw/profile-displayphoto-shrink_400_400/0/1695639706197?e=1701907200&v=beta&t=z6VkjoF7IRpfxmm_msomPzdBUMyKFKWh4dmieJkdM4o"
          />
          
{/* <div>
  <span>Test Twitter</span>
    <span className="opacity-70">@test12009</span>
</div> */}

{/* <div>
  <span>{auth.user?.fullName}</span>
    <span className="opacity-70">@{auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
</div> */}

<div>
  {auth.user && auth.user.fullName && (
    <>
      <p>{auth.user.fullName}</p>
      <span className="opacity-70">@{auth.user.fullName.split(" ").join("_").toLowerCase()}</span>
    </>
  )}
</div>




          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
