// src/assets/ProductTable.jsx

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // กรองตามคำค้นหา
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    // กรองเฉพาะที่มีสินค้า
    if (inStockOnly && !product.stocked) {
      return;
    }
    // ใส่ CategoryRow เมื่อเจอ category ใหม่
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  return (
    <div className="product-table-wrapper">
      {rows.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <p>No products found matching your search.</p>
        </div>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      )}
    </div>
  );
}

export default ProductTable;