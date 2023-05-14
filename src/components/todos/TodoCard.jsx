export default function TodoCard({ todos }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="col-md-3 mb-3">
            <div className="card h-100">
              <div
                className={`card-header ${
                  todo.completed && "completed-todo"
                } }`}
              >
                Todo #{todo.id}
              </div>
              <div className="card-body ">
                <blockquote className="blockquote mb-0">
                  <p>{todo.title}</p>
                  <footer>
                    <button className="btn btn-sm btn-danger">Remove</button>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
