import * as React from 'react';
import Shell from '../layout/shell';

import './index.scss';

const Index: React.FunctionComponent<{}> = () => {
  React.useEffect(() => {
    window.location.href = 'https://www.youtube.com/watch?v=fC7oUOUEEi4';
  }, []);
  return <Shell></Shell>;
};

export default Index;
