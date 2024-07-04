// App.tsx
import React, { useState } from 'react';
import Editor, { Value } from '@react-page/editor';
import '@react-page/editor/lib/index.css';
import slate from '@react-page/plugins-slate';
import image from '@react-page/plugins-image';
import spacer from '@react-page/plugins-spacer';

const cellPlugins = [
  slate(),
  image,
  spacer
];

const App: React.FC = () => {
  const [editorValue, setEditorValue] = useState<Value | null>(null);

  const handleChange = (value: Value) => {
    setEditorValue(value);
  };

  return (
      <div>
        <h1>Конструктор страницы</h1>
        <Editor
            cellPlugins={cellPlugins}
            value={editorValue}
            onChange={handleChange}
        />
      </div>
  );
};

export default App;
