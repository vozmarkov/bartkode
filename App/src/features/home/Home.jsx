import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

const Home = () => {
  const loadiong = useSelector((state) => state.loadiong);
  // const [giftPosts, setGiftPosts] = useState([]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </div>
  );
};

export default Home;
