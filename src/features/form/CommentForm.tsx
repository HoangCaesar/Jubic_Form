import { useCallback } from 'react';

// Porject Import
import { Header, Content } from '../../components';
import { setData } from '../../utils/dataHandler';
import './commentForm.css';

// Redux
import { useAppDispatch, useAppSelector } from '../../store';
import * as blogActions from '../../store/reducers/blog';

// Interface
import { FormValues } from '../../components/form/Content';

// ==============================|| FORM - ADD A NEW COMMENT/DESCRIPTION  ||============================== //

const CommentForm = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = useCallback((formValues: FormValues) => {
        setData(formValues);
        dispatch(blogActions.newItemIsAdded())
    }, []);

    return (
        <div className="comment-form">
            <Header />
            <Content onSubmit={handleSubmit} />
        </div>
    );
};

export default CommentForm;
