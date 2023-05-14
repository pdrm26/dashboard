import { useEffect, useState } from "react";
import HelmetWrapper from "../components/HelmetWrapper";
import Loading from "../components/Loading";
import SelectForm from "../components/todos/SelectForm";
import TodoCard from "../components/todos/TodoCard";

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
    fetch(`${process.env.REACT_APP_TODOS_API}/users/${currentUserId}/todos`)
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
            <div className="row mb-4">
              <div className="col-md-3">
                <SelectForm
                  options={users}
                  isLoading={isLoadingUsers}
                  onSelect={userSelectHandler}
                />
              </div>
            </div>
            <div className="row ">
              {currentUserId && isLoadingUserTodos ? (
                <Loading />
              ) : (
                <TodoCard todos={currentUserTodos} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
