import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
} from "../redux/slices/api/usersSlice";
import { get } from "../helper/apiHelper";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    dispatch(getUsers());

    try {
      const response = await get("/users");
      dispatch(getUsersSuccess(response));
    } catch (error) {
      dispatch(getUsersFailure(error.message));
    }
  };

  const getSingleUser = async (id) => {
    const response = await get(`/users/${id}`);
    console.log(response);
    setUser(response);
  };

  return (
    <div>
      <center>
        <h1>{window.site_text(`pages.ApiCall.title`)}</h1>
        <h4>{window.site_text(`pages.ApiCall.sub_title`)}</h4>
        {users.loading && (
          <p>{window.site_text(`pages.ApiCall.loading_text`)}</p>
        )}
        {users.error && <p>{users.error}</p>}
        <ul style={{ width: 400 }}>
          {users.data.map((user) => (
            <li
              key={user.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {user.name}{" "}
              <button onClick={() => getSingleUser(user.id)}>
                {window.site_text(`pages.ApiCall.view_button`)}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={fetchUsers}>
          {window.site_text(`pages.ApiCall.fetch_user_button`)}
        </button>
      </center>

      {user && (
        <center>
          <div
            style={{
              border: "1px solid",
              width: 300,
            }}
          >
            <h1>{user?.name}</h1>
            <h5>{user?.email}</h5>
            <h5>{user?.phone}</h5>
          </div>
        </center>
      )}
    </div>
  );
}

export default Users;
