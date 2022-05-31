import ReactComponent from '../components/ReactComponent';
import ReactTsComponent from '../components/ReactTsComponent';

const App = () => <ReactTsComponent />;
const App = () => <ReactComponent />;

const rootNode = document.getElementById('root');

render(<App />, rootNode);
