// src/assets/ProductCategoryRow.jsx

function ProductCategoryRow({ category }) {
  return (
    <tr className="category-row">
      <td colSpan="2">
        {category}
      </td>
    </tr>
  );
}

export default ProductCategoryRow;