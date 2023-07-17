import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changelayoutMode } from "../redux/actions";

const App = () => {
  const dispatch = useDispatch();

  const { layoutMode } = useSelector((state: any) => ({
    layoutMode: state.Layout.layoutMode,
  }));

  // Dark/Light Mode
  useEffect(() => {
    var getLayoutMode = localStorage.getItem("layoutMode");
    if (getLayoutMode) {
      dispatch(changelayoutMode(getLayoutMode));
    } else {
      dispatch(changelayoutMode(layoutMode));
    }
  }, [layoutMode, dispatch]);

  return <div>Hello Dooty</div>;
};

export default App;
