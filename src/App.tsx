// import ListGroup from './components/ListGroup';

// import Alert from './components/Alert';

import Button from './components/Button';

// function App() {
//   const items = [
//     'New York',
//     'San Francisco',
//     'Los Angeles',
//     'Seattle',
//     'Tokyo',
//     'London',
//     'Reykjavik',
//   ];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Alert closeable>
//         Hello <span>world</span>
//       </Alert>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Button onClick={() => console.log('click')}>Click here</Button>
    </div>
  );
}

export default App;
