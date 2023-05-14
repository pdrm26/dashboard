export default function SelectForm({ options, onSelect, isLoading }) {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={onSelect}
    >
      {isLoading ? (
        <option>Loading...</option>
      ) : (
        <>
          <option disabled selected>
            Select a user...
          </option>
          <option value={0}>
            All...
          </option>
          {options.map((user) => {
            return (
              <option value={user.id} key={user.id}>
                {user.username}
              </option>
            );
          })}
        </>
      )}
    </select>
  );
}
