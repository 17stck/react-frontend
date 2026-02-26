// src/assets/SearchBar.jsx

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <div className="search-bar">
      <span className="search-bar-label">Find Products</span>

      <div className="search-input-wrapper">
        <span className="search-icon">🔎</span>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;