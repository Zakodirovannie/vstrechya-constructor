// App.tsx
import React, { useState, useCallback } from 'react';
import Editor, {Value} from '@react-page/editor';
import '@react-page/editor/lib/index.css';
import Header from "./components/header";
import cellPlugins from "./cellPlugins";
import NavBar from "./components/NavigationBar/NavBar";
import TRANSLATIONS from './ru';

const App: React.FC = () => {
  const [editorValue, setEditorValue] = useState<Value | null>(null);

  const handleChange = (value: Value) => {
    setEditorValue(value);
  };

    const uiTranslator = useCallback((label?: string | null) => {
        if (label && TRANSLATIONS[label] !== undefined) {
            return TRANSLATIONS[label];
        }
        return `${label}(to translate)`;
    }, []);

  return (
      <div className='bg-beige'>
          <NavBar />
          {/*<Header />*/}
          <main className='min-h-screen pt-7'>
              <div className="w-3/4 mx-auto min-h-screen">
                  <Editor
                      cellPlugins={cellPlugins}
                      value={editorValue}
                      onChange={handleChange}
                      zoomEnabled={false}
                      uiTranslator={uiTranslator}
                  />
              </div>
              <div className="w-3/4 bg-beige-dark mx-auto shadow-2xl p-3 rounded-md flex items-center justify-center">
                  <button className='border-2 border-beige p-5 rounded-md mr-2 hover:bg-beige transition ease-in-out delay-50' onClick={() => setEditorValue(null)}>Сбросить</button>
                  <button className='border-2 border-beige p-5 rounded-md ml-2 hover:bg-beige transition ease-in-out delay-50'>Сохранить</button>
              </div>
          </main>
      </div>

  );
};

export default App;
