import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Paris", "London", "Buenos Aires", "San Jose"];
  let selectedIndex = 2;

  // Event handler function
  const handleClick = (event: MouseEvent) => console.log(event);
  return(
<>
    <h1>List</h1>
    {items.length === 0 && <p>No item found!</p>}
    <ul className="list-group">
      {items.map((item, index) => (
        <li 
        className = { selectedIndex === index ? "list-group-item active" : "list-group-item"}
        key={item}
        onClick = {handleClick}
        >{item}</li>

      ))}
    </ul>
  </>
  );
}
export default ListGroup;
