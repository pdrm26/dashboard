import { useEffect, useState } from "react";
import HelmetWrapper from "../components/HelmetWrapper";
import Loading from "../components/Loading";

export default function Todos() {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState();
  const [currentUserTodos, setCurrentUserTodos] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [isLoadingUserTodos, setIsLoadingUserTodos] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_TODOS_API}/users`)
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoadingUsers(false));
  }, []);

  useEffect(() => {
    setIsLoadingUserTodos(true);
    fetch(`${process.env.REACT_APP_TODOS_API}/posts?userId=${currentUserId}`)
      .then((response) => response.json())
      .then((result) => setCurrentUserTodos(result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoadingUserTodos(false));
  }, [currentUserId]);

  const userSelectHandler = (event) => setCurrentUserId(event.target.value);

  return (
    <>
      <HelmetWrapper title="Todos List" />
      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-dark text-white">Manage Todos</div>
          <div className="card-body">
            <div className="row my-4">
              <div className="col-md-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={userSelectHandler}
                >
                  {isLoadingUsers ? (
                    <option>Loading...</option>
                  ) : (
                    <>
                      <option disabled selected>
                        Select a user...
                      </option>
                      {users.map((user) => {
                        return (
                          <option value={user.id} key={user.id}>
                            {user.username}
                          </option>
                        );
                      })}
                    </>
                  )}
                </select>
              </div>
              <div className="col-md-9">
                {!currentUserId && <h2 className="w-100 text-center">Select a user.</h2>}
                {currentUserId && isLoadingUserTodos ? (
                  <Loading />
                ) : (
                  currentUserTodos.map((userTodo) => {
                    return (
                      <>
                        <div className="card mb-3">
                          <div className="card-header">
                            Quote #{userTodo.id}
                          </div>
                          <div className="card-body">
                            <blockquote className="blockquote mb-0">
                              <p>{userTodo.title}</p>
                              <footer className="blockquote-footer">
                                {userTodo.body}
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      </>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
