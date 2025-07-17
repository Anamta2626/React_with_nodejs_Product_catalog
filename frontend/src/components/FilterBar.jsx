import "./FilterBar.css";

const FilterBar = ({ setCategory }) => {
  return (
    <select className="filter-select" onChange={(e) => setCategory(e.target.value)}>
      <option value="All">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Furniture">Furniture</option>
    </select>
  );
};

export default FilterBar;
