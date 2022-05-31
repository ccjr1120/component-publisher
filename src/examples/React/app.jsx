import { css } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import ReactComponent from '~/examples/components/ReactComponent.jsx';

function App() {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      `}
    >
      <ReactComponent />
    </div>
  );
}

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);

root.render(<App />);
