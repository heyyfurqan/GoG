import ListGroup from './components/ListGroup';

function app() {
  let items = ["New York", "Paris", "London", "Buenos Aires", "San Jose"];

  return(
   <div>
      <ListGroup items = {items} heading='Cities'/>
    </div>
  );}

export default app;