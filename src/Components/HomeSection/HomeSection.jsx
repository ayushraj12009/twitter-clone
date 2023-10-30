import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from "./TweetCard";
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { createTweet, getAllTweets } from "../../Store/Twit/Action";
import {useSelector} from 'react-redux';
import { uploadToCloudnary } from "../../Utils/uploadToCloudnary";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();
  const {twit} = useSelector(store=>store);
  console.log("twit", twit)

  const handleSubmit = (values, actions) => {
    dispatch(createTweet(values))
    actions.resetForm()
    console.log("values", values);
    setSelectedImage("")
  };

  useEffect(()=>{
    dispatch(getAllTweets())
  },[dispatch, twit.like, twit.retwit]) //  !! Important !! dispatch mere lagaya hua hai old code ko dekh kar

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      isTweet:true
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = async (event) => {
    setUploadingImage(true);
    const imgUrl = await uploadToCloudnary(event.target.files[0])
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div className="space-x-5">
      <section>
        <h1 className="py-5 text-xl font-bold placeholder-opacity-90">Home</h1>
      </section>
      <section className={"pb-10"}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://media.licdn.com/dms/image/D4D03AQF5UbVbymFLFw/profile-displayphoto-shrink_400_400/0/1695639706197?e=1701907200&v=beta&t=z6VkjoF7IRpfxmm_msomPzdBUMyKFKWh4dmieJkdM4o"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening"
                  className={"border-none outline-none text-xl bg-transparent"}
                  {...formik.getFieldProps("content")}
                />
                {/* {formik.errors.content &&
                  formik.touched.content(
                    <span className="text-red-500 ">
                      {formik.errors.content}
                    </span>
                  )} */}
                  {formik.errors.content && formik.touched.content && (
  <span className="text-red-500">
    {formik.errors.content}
  </span>
)}

              </div>
              {/* <div>
                          <img src="" alt="" />                      
                    </div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="File"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                    <FmdGoodIcon className="text-[#1d9bf0]"/>
                    <TagFacesIcon className="text-[#1d9bf0]"/>
                </div>
                <div>
                  <Button sx={{
              width: "100%",
              borderRadius: "20px",
              paddingY: "8px",
              paddingX: "20px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
            type="submit"
            >
            
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
            <div>
              { selectImage && <img  src={selectImage} alt="" />}
            </div>
          </div>
        </div>
      </section>

      <section>
        {twit.twits.map((item)=><TweetCard item={item}/>)}
      </section>
    </div>
  );
};

export default HomeSection;
