import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';
import { useState } from 'react';

function app() {
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>You clicked</Alert>}
      <Button /*color='secondary'*/ onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
    </div>
  );
}

export default app;