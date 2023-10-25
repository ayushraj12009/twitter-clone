import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";


const Profile = () => {
  const [tabValue, setTabValue] = useState("1")
  const [openProfileModal, setProfileModal]= useState(false);
  const handleOpenProfileModal = () => setProfileModal(true);
  const handleClose = () => setProfileModal(false);
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  

  const handleFollowUser = () => {
    console.log("follow user");
  };

  const handleTabChange=(event, newValue)=>{
    setTabValue(newValue)

    if(newValue === 4){
      console.log("likes twit")
    }
    else if(newValue === 1){
      console.log("users twits")
    }
  }

  return (
    <div>
      <section className={"bg-white z-50 flex items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-95 ml-5">
          Welcome To Clone Twitter
        </h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://pbs.twimg.com/profile_banners/871694898415718400/1696742270/1080x360"
          alt=""
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24 "
            alt="Ayush Raj"
            src="https://media.licdn.com/dms/image/D4D03AQF5UbVbymFLFw/profile-displayphoto-shrink_400_400/0/1695639706197?e=1701907200&v=beta&t=z6VkjoF7IRpfxmm_msomPzdBUMyKFKWh4dmieJkdM4o"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModal}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile{" "}
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded-full"
              variant="content"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}{" "}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center ">
            <h1 className="font-bold text-lg">Ayush Raj</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
                alt=""
              />
            )}
          </div>
          <h1 className="text-gray-500">@ayushraj12009</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>हिंदू 🚩 l Java Developer | Spring-Boot | DSA | MySQL | Video Editor | Graphic Designer | Technology enthusiast</p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500 ">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500 ">
              <LocationOnIcon />
              <p className="ml-2">Bharat</p>
            </div>

            <div className="flex items-center text-gray-500 ">
              <CalendarMonthIcon />
              <p className="ml-2">Joined June 2023</p>
            </div>
          </div>
          <div className=" flex items-center space-x-5">
          <div className="flex items-center space-x-1 font-semibold">
                <span>200</span>
                <span className="text-gray-500">Following</span>

            </div>
            <div className="flex items-center space-x-1 font-semibold">
                <span>11200</span>
                <span className="text-gray-500">Followers</span>

            </div>

          </div>
        </div>
      </section>

      <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
                {[1,1,1,1,].map((items)=><TweetCard/>)}
        </TabPanel>
        <TabPanel value="2">user replies</TabPanel>
        <TabPanel value="3">Media </TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal}/>
      </section>
    </div>
  );
};

export default Profile;
