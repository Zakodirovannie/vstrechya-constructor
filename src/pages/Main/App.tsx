// Route.tsx
import React, { useState } from 'react';
import Editor, {Value} from '@react-page/editor';
import '@react-page/editor/lib/index.css';
import cellPlugins from "../../cellPlugins";
import NavBar from "../../components/NavigationBar/NavBar";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const App: React.FC = () => {
  const [editorValue, setEditorValue] = useState<Value | null>(null);

  const handleChange = (value: Value) => {
    setEditorValue(value);
    console.log('Value: ', value);
  };

  return (
      <div className='bg-slate-200'>
          <NavBar />
          {/*<Header />*/}
          <main className='min-h-screen pt-7'>
              <div className="w-3/4 bg-white mx-auto shadow-2xl p-3 rounded-md min-h-screen">
                  <Editor
                      cellPlugins={cellPlugins}
                      value={editorValue}
                      onChange={handleChange}
                      zoomEnabled={false}
                  />
              </div>
              <div className="w-3/4 bg-gray-400 mx-auto shadow-2xl p-3 rounded-md flex items-center justify-center">
                  <button className='border-2 border-blue-500 p-5 rounded-md mr-2 hover:bg-blue-500' onClick={() => setEditorValue(null)}>Сбросить</button>
                  <SubmitButton />
              </div>
          </main>
      </div>

  );
};

export default App;
