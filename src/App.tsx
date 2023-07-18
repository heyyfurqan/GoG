import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';

function app() {
  return (
    <Button /*color='secondary'*/ onClick={() => console.log('Clicked !')}>
      Click Me
    </Button>
  );
}

export default app;