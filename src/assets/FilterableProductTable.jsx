// src/assets/FilterableProductTable.jsx

import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText]     = useState('');
  const [inStockOnly, setInStockOnly]   = useState(false);

  // นับสินค้าที่แสดงอยู่จริง
  const visibleCount = products.filter((p) => {
    if (p.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return false;
    if (inStockOnly && !p.stocked) return false;
    return true;
  }).length;

  const inStockCount = products.filter((p) => p.stocked).length;

  return (
    <div className="filterable-table">

      {/* Search + Filter */}
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />

      {/* Stats bar */}
      <div className="stats-bar">
        <span>🛒 {visibleCount} item{visibleCount !== 1 ? 's' : ''} shown</span>
        <span>✅ {inStockCount} in stock</span>
      </div>

      {/* Product Table */}
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />

      {/* Footer */}
      <div className="card-footer">
        <span>🌿</span>
        <span>Fresh Market — updated daily</span>
      </div>

    </div>
  );
}

export default FilterableProductTable;