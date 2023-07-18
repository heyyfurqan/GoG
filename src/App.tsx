import ListGroup from './components/ListGroup';

function app() {
  let items = ["New York", "Paris", "London", "Buenos Aires", "San Jose"];

  const handleSelectItem = (item : string) => {
    console.log(item)
  }
  return(
   <div>
      <ListGroup items = {items} heading='Cities' onSelectItem={handleSelectItem}/>
    </div>
  );}

export default app;