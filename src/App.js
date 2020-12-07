
import { FormLabel ,FormGroup ,FormText ,FormControl ,Button ,FormCheck } from 'react-bootstrap';
import './App.css';      

function App() {
  return (
    
    <form className="login-form">
      <h1 className="text-center"> My Website</h1>
  <FormGroup controlId="formBasicEmail">
    <FormLabel>Email address</FormLabel>
    <FormControl type="email" placeholder="Enter email" />
    <FormText className="text-muted">
      We'll never share your email with anyone else.
    </FormText>
  </FormGroup>

  <FormGroup controlId="formBasicPassword">
    <FormLabel>Password</FormLabel>
    <FormControl type="password" placeholder="Password" />
  </FormGroup>
  <FormGroup controlId="formBasicCheckbox">
    <FormCheck type="checkbox" label="Check me out" />
  </FormGroup>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</form>
  );
}

export default App;
