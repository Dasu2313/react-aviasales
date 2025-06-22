import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import {
  getTicketsLoadingStatus
} from '../../redux/selectors'

const Loader = () => {
    const [loaderWidth, setLoaderWidth] = useState('0%');
    const loading = useSelector(getTicketsLoadingStatus);

    useEffect(() => {
        setLoaderWidth('50%');
    }, []);

    useEffect(() => {
        if (loading)
            setLoaderWidth('50%');
        else {
            setLoaderWidth('100%');
        }
    }, [loading]);

    return (
        <div style={{height: '4px', width: loaderWidth, background: '#2196f3', transition: '.5s'}}></div>
    )
}

export default Loader;