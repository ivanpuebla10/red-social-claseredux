import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../features/posts/postsSlice";
import Post from "./Post/Post";
import { LoadingOutlined } from "@ant-design/icons";

const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.posts);

  const getPostsAndReset = async () => {
    await dispatch(getAll());
    dispatch(reset());
  };
  useEffect(() => {
    getPostsAndReset();
  }, []);

  if (isLoading) {
    return (
      <LoadingOutlined
        style={{
          fontSize: 120,
        }}
        spin
      />
    );
  }
  
  return (
    <div>
      Posts
      <Post />
    </div>
  );
};

export default Posts;
