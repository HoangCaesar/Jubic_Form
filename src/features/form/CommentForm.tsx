import { useCallback } from 'react';

// Porject Import
import { Content, Header } from '../../components';
import { setData } from '../../utils/dataHandler';
import './commentForm.css';

// Redux
import { useAppDispatch } from '../../store';
import * as blogActions from '../../store/reducers/blog';

// Interface
import { FormValues } from '../../components/form/Content';

// React-toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ==============================|| FORM - ADD A NEW COMMENT/DESCRIPTION  ||============================== //

const CommentForm = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = useCallback((formValues: FormValues) => {
        setData(formValues);
        dispatch(blogActions.newItemIsAdded());
        toast.success('A new blog is added!');
    }, []);

    return (
        <div className="comment-form">
            <Header />
            <Content onSubmit={handleSubmit} />
            <ToastContainer />
        </div>
    );
};

export default CommentForm;
