import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import TweetCard from "../HomeSection/TweetCard";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { findTwitsById } from "../../Store/Twit/Action";
import { useSelector } from "react-redux";

const TwitDetails = () => { 
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const dispatch = useDispatch();
  const {id}=useParams();
  const {twit} = useSelector(store=>store)

  useEffect(() => {
    if(id){
      // console.log(id);
      dispatch(findTwitsById(id))
    }
  }, [id, dispatch]);

  return (
    <React.Fragment>
      <section className={" bg-white z-50 flex items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-95 ml-5">
          Tweet
        </h1>
      </section>

      <section>
        <TweetCard item={twit.twit} />
        <Divider sx={{margin:"2rem 0rem"}}/>
      </section>
      <section>
        {twit.twit?.replyTwits.map((item)=><TweetCard item={item}/>)}
      </section>

    </React.Fragment>
  );
};

export default TwitDetails;
