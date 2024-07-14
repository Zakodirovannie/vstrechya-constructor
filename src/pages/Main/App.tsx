// Route.tsx
import React, {useState, useCallback} from 'react';
import styles from "./App.module.css";
import Editor, {Value} from '@react-page/editor';
import '@react-page/editor/lib/index.css';
import cellPlugins from "../../cellPlugins";
import NavBar from "../../components/NavigationBar/NavBar";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TRANSLATIONS from '../../ru';
import {useDispatch} from "react-redux";
import {setPage} from "../../redux/EditorSlice/EditorSlice";
import Footer from "../../components/Footer/Footer";

const App: React.FC = () => {
  const [editorValue, setEditorValue] = useState<Value | null>(null)
  const [name, setName] = useState('')
  const dispatch = useDispatch();

  const handleChange = (value: Value) => {
    setEditorValue(value);
    dispatch(setPage(value));
  }

  const uiTranslator = useCallback((label?: string | null) => {
        if (label && TRANSLATIONS[label] !== undefined) {
            return TRANSLATIONS[label]
        }
        return `${label}(to translate)`
  }, [])

  return (
      <div className={styles.main}>
          <NavBar />
          <div className={styles.spacer}></div>
          <main className='min-h-screen pt-7 flex flex-col'>
              <div className="w-3/4 mx-auto min-h-screen hover:shadow-2xl hover:transition ease-in-out flex flex-col">
                  <input
                      className="bg-white mx-auto shadow-2xl p-3 rounded-md w-1/2 font-bold text-3xl mb-10 placeholder:text-center"
                      placeholder={'Название выставки'}
                      type="text"
                      onChange={(e) => {
                          setName(e.target.value)
                      }}
                      value={name}
                      required={true}
                  />
                  <Editor
                      cellPlugins={cellPlugins}
                      value={editorValue}
                      onChange={handleChange}
                      zoomEnabled={false}
                      uiTranslator={uiTranslator}
                  />
                  <div className=" p-3 rounded-md flex items-center justify-center">
                      <button
                          className='border-0 p-5 rounded-md mr-2 hover:bg-black hover:text-white transition ease-in-out delay-50'
                          onClick={() => setEditorValue(null)}>Сбросить
                      </button>
                      <SubmitButton name={name}/>
                  </div>
              </div>
          </main>
          <Footer/>
      </div>

  );
};

export default App;
