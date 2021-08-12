import React, {useEffect} from 'react';
import {useState} from "react";

function useLoading(loadingFunction, deps =[]) {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();


    async function reload(){
        setLoading(true);
        setData(undefined);
        setError(undefined);
        try{
            setData(await loadingFunction());
        }catch (e){
            setError(e);
        }finally {
            setLoading(false);
        }
    }
    useEffect(reload,deps);

    return {error, loading, data, reload};
}

export default useLoading;