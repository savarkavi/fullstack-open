/* eslint-disable react/prop-types */

const Filter = ({ handleFilterChange, filteredName }) => {
  return (
    <div>
      Search a name:{" "}
      <input value={filteredName} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
