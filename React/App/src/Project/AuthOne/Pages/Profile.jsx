import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/Thunk/AuthThunk";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      dispatch(getProfile());
    }
  }, [dispatch]);

  console.info(user);
  return (
    <>
      <aside>
        <table>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>{user?.name}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{user?.email}</td>
            </tr>
            <tr>
              <td>ID: </td>
              <td>{user?._id}</td>
            </tr>
            <tr>
              <td>Created At: </td>
              <td>{user?.createdAt.split("T")[0]}</td>
            </tr>
          </tbody>
        </table>
      </aside>
    </>
  );
};

export default Profile;
