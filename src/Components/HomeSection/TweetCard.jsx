import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import {useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import ReplyModal from "./ReplyModal";
import { useState } from "react";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openReplyModal, setOpenReplyModal]= useState(false);
  const handleOpenReplyModel = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    console.log("delete tweet");
    handleClose();
  };
  const handleCreateRetweet = () => {
    console.log("handle create retweet");
  };
  const handleLiketweet = () => {
    console.log("handle like tweet");
  };

  return (
    <React.Fragment>
      {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
            <ReapeatIcon/>
            <p> You Retweet</p>
        </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate("/profile/${6}")}
          className="cursor-pointer"
          alt="username"
          src="https://media.licdn.com/dms/image/D4D03AQF5UbVbymFLFw/profile-displayphoto-shrink_400_400/0/1695639706197?e=1701907200&v=beta&t=z6VkjoF7IRpfxmm_msomPzdBUMyKFKWh4dmieJkdM4o"
        />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Ayush Raj</span>
              <span className="text-gray-600">@ayushraj12009 . 2m</span>

              <img
                className="ml-2 w-5 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
                alt=""
              />
            </div>

            <div>
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
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div onClick={()=>navigate('/twit/$(3)')}  className="cursor-pointer">
              <p className="mb-2 p-0">
              {/* {" "} */}
                Twitter Clone Project on Right Track Frontend React and backend
                will be spring boot
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://media.webdunia.com/_media/hi/img/article/2020-12/07/full/1607311219-0037.jpg"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex item-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={
                  '${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center'
                }
              >
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className="cursor-pointer"
                />
                <p>54</p>
              </div>

              <div
                className={
                  '${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center'
                }
              >
                {true ? (
                  <FavoriteIcon
                    onClick={handleLiketweet}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteOutlined
                    onClick={handleLiketweet}
                    className="cursor-pointer"
                  />
                )}
              </div>

              <div className="space-x-3 flex item-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>430</p>
              </div>

              <div className="space-x-3 flex item-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <section>
      <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
    </section>
    
    </React.Fragment>

  );
};

export default TweetCard;
