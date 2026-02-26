// import Contact from './assets/Contact';
// import Counter from './assets/Counter';
// import Hello from './assets/Hello';

// function App() {
//   const helloData = [
//     { name: 'Komchan', message: 'Hi there' },
//     { name: 'Tom', message: 'Dog..' }
//   ];

//   return (
//     <div className='App'>
//       <Counter />
//       {helloData.map((data, index) => (
//         <Hello key={index} name={data.name} message={data.message} />
//       ))}
//       <Contact email="chanza@gmail.com" phone="06531254548" />
//     </div>
//   );
// }

// export default App;



// src/App.jsx

// src/App.jsx

import './App.css';
import FilterableProductTable from './assets/FilterableProductTable';

const PRODUCTS = [
  { category: "Fruits",     price: "$1", stocked: true,  name: "Apple"        },
  { category: "Fruits",     price: "$1", stocked: true,  name: "Dragonfruit"  },
  { category: "Fruits",     price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true,  name: "Spinach"      },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"      },
  { category: "Vegetables", price: "$1", stocked: true,  name: "Peas"         },
];

function App() {
  return (
    <div className="app-wrapper">
      <div style={{ width: '100%', maxWidth: '560px' }}>

        {/* Page Header */}
        <div className="page-header">
          <span className="badge">React Project</span>
          <h1>Fresh <em>Market</em></h1>
          <p>Browse our daily selection of fruits & vegetables</p>
        </div>

        {/* Main Component */}
        <FilterableProductTable products={PRODUCTS} />

      </div>
    </div>
  );
}

export default App;