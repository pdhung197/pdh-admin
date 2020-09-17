import { Button } from 'antd';
import React from 'react';
import { useLayout } from './hooks/useLayout';

export const App = useLayout(() => {
  return (
    <div className="App">
      <Button type="primary" danger>
        Day la button
      </Button>
    </div>
  );
});
