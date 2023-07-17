import React, { useEffect } from "react";

// hooks
import { useRedux } from "../../../hooks/index";

// components
import Loader from "../../../comps/Loader";
import AppSimpleBar from "../../../comps/AppSimpleBar";
import MyProfile from "./MyProfile";
import UserDescription from "./UserDescription";
import Media from "../../../comps/Media";
import AttachedFiles from "../../../comps/AttachedFiles";

// actions
import { getProfileDetails } from "../../../redux/actions";

interface IndexProps {}
const Index = (props: IndexProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();

  const { profileDetails, getProfileLoading, isProfileFetched } =
    useAppSelector((state) => ({
      profileDetails: state.Profile.profileDetails,
      getProfileLoading: state.Profile.getProfileLoading,
      isProfileFetched: state.Profile.isProfileFetched,
    }));

  // get user profile details
  useEffect(() => {
    dispatch(getProfileDetails());
  }, [dispatch]);

  return (
    <div className="position-relative">
      {getProfileLoading && !isProfileFetched && <Loader />}
      <MyProfile basicDetails={profileDetails.basicDetails} />

      <AppSimpleBar className="p-4 profile-desc">
        <UserDescription basicDetails={profileDetails.basicDetails} />
        <hr className="my-4" />

        <Media media={profileDetails.media} limit={2} />

        <hr className="my-4" />

        <AttachedFiles attachedFiles={profileDetails.attachedFiles} />
      </AppSimpleBar>
    </div>
  );
};

export default Index;
