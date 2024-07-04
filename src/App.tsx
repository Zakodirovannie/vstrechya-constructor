// App.tsx
import React, { useState } from 'react';
import Editor, { Value } from '@react-page/editor';
import '@react-page/editor/lib/index.css';
import Header from "./components/header";
import cellPlugins from "./cellPlugins";

const App: React.FC = () => {
  const [editorValue, setEditorValue] = useState<Value | null>(null);

  const handleChange = (value: Value) => {
    setEditorValue(value);
  };

  return (
      <div className='bg-slate-200'>
          <Header />
          <main className='min-h-screen pt-7'>
              <div className="w-3/4 bg-white mx-auto shadow-2xl p-3 rounded-md">
                  <Editor
                      cellPlugins={cellPlugins}
                      value={editorValue}
                      onChange={handleChange}
                  />
              </div>
          </main>
      </div>

  );
};

export default App;
