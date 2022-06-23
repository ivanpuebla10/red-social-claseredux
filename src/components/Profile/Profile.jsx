import React from "react";
import { useSelector } from "react-redux";
import { Alert, Spin } from "antd";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return (
      <Spin tip="Estas tu que esta vaina loca va a cargar...!!!!!!!!">
        <Alert
          message="Te deseo suerte BROH..."
          description="Cargando..."
          type="info"
        />
      </Spin>
    );
  }
  return (
    <div>
      Profile
      <p>{user.user.name}</p>
      <p>{user.user.email}</p>
    </div>
  );
};

export default Profile;
