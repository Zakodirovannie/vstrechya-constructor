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

interface Exhibition {
    "id": 0,
    "name": "string",
    "collection_image": "string",
    "created_at": "2024-07-12T13:48:26.103Z",
    "updated_at": "2024-07-12T13:48:26.103Z",
    "status": 0,
    "html_content": "string",
    "json_data": "string"
}

const ExhibitionCard = () => {
    const { id } = useParams();
    const [exhibition, setExhibition] = useState<Exhibition>({
        "id": 0,
        "name": "string",
        "collection_image": "string",
        "created_at": "2024-07-12T13:48:26.103Z",
        "updated_at": "2024-07-12T13:48:26.103Z",
        "status": 0,
        "html_content": "string",
        "json_data": "string"
    });
    const [editorValue, setEditorValue] = useState<Value | null>(JSON.parse(exhibition.json_data))
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchExhibition = async () => {
            try {
                const response = await getExhibitionDetails(id)
                setExhibition(response.data);
                console.log(response.data[0])
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

    return <>
        <NavBar />
        <div className={styles.main}>
            <br/><br/>
            <h2>{exhibition.name}</h2>
            <Editor
                cellPlugins={cellPlugins}
                value={editorValue}
                onChange={handleChange}
                zoomEnabled={false}
                insertEnabled={false}
                uiTranslator={uiTranslator}
            />
        </div>
        <Footer />
    </>
};

export default ExhibitionCard;
