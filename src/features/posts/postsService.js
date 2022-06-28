import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts");
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(API_URL + "/posts/id/" + id);
  return res.data;
};

const getPostByName = async (postTitle) => {
    const res = await axios.get(API_URL + "/posts/search/" + postTitle);
    return res.data;
  };

  const deletePost = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.delete(API_URL + "/posts/delete/" + id, {
      headers: {
        authorization: user?.token,
      },
    });
    return res.data;
  };
  
  
const postsService = {
  getAll,
  getById,
  getPostByName,
  deletePost
};

export default postsService;
