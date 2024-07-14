import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import {getExhibitionDetails} from "../../../api/api.auth";
import styles from "./ExhibitionCard.module.css";
import NavBar from "../../NavigationBar/NavBar";
import Footer from "../../Footer/Footer";
import Editor, {Value} from "@react-page/editor";
import cellPlugins from "../../../cellPlugins";
import TRANSLATIONS from "../../../ru";
import {setPage} from "../../../redux/EditorSlice/EditorSlice";
import {useDispatch} from "react-redux";
import ChangeButton from "../../ChangeButton/ChangeButton";

const ExhibitionCard = () => {
    const { id } = useParams();
    const [editorValue, setEditorValue] = useState<Value | null>(null)
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchExhibition = async () => {
            try {
                const response = await getExhibitionDetails(id)
                const val = JSON.parse(response.data.html_content);
                setEditorValue(val);
                setName(response.data.name);
                console.log(response.data);
            } catch (e) {
                console.log('Error fetching exhibition details: ', e)
            }
        }
        fetchExhibition()
    }, [id]);

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

    return <div className={styles.main}>
        <NavBar/>
        <div className={styles.spacer}></div>
        <main className='min-h-screen pt-7 flex flex-col'>
            <div className="w-3/4 mx-auto min-h-screen hover:shadow-2xl flex flex-col">
                <input
                    className="bg-white mx-auto shadow-2xl p-3 rounded-md w-auto font-bold text-3xl mb-10"
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
                    insertEnabled={false}
                    uiTranslator={uiTranslator}
                />
                <div className="p-3 rounded-md flex items-center justify-center">
                    <ChangeButton name={name} id={id}/>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
};

export default ExhibitionCard;
