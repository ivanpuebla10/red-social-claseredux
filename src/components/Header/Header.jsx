import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { notification } from "antd";
import { Avatar } from "antd";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);//para traerme la información del estado
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    notification.success({ message: "Te piras" });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/"+ text);
    }
  };

  return (
    <nav>
      <span>
        {" "}
        <Link to="/">Header</Link>
      </span>
      <div>
      <input onKeyUp={handleChange} placeholder="search post" name="text" />
        <span>
          <Link to="/">Home</Link>
        </span>
        {user ? (
          <>
            <span>
              <Link to="/" onClick={onLogout}>
                Logout
              </Link>
            </span>
            <span>
              <Link to="/profile">
                <Avatar>{user.user.name[0]}</Avatar>
              </Link>
            </span>
            {user.user.role === 'admin' ? <span><Link to="/admin">Admin</Link></span>:''}
          </>
        ) : (
          <>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
