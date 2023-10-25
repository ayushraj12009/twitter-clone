import { Grid } from "@mui/material";
import React from "react";
import HomeSection from "../HomeSection/HomeSection";
import Navigation from "../Navigation/Navigation";
import RightPart from "../RightPart/RightPart";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Profile from "../Profile/Profile";
import TwitDetails from "../TwitDetails/TwitDetails";
import Authentication from "../Authentication/Authentication";

export const HomePage = () => {
  return (
    <Grid container xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <Navigation />
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        className="px-5 lg:px-5 hidden lg:block w-full relative"
      >
        <Routes>
          <Route path="/" element={<HomeSection />} ></Route>
          <Route path="/home" element={<HomeSection />} ></Route>
          <Route path="/profile/:id" element={<Profile />} ></Route>
          <Route path="/twit/:id" element={<TwitDetails />} ></Route>
        </Routes>

      </Grid>

      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        <RightPart />
      </Grid>
    </Grid>
  );
}
