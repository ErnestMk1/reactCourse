import './App.css';
import { Text } from './components/polymorphic/Text';

function App() {
  return (
    <div className="App">
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text
        as='label'
        size='sm'
        color='primary'
      >
        label
      </Text>
    </div>
  );
}

export default App;
