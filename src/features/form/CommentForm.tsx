import { useCallback } from 'react';

// Porject Import
import { Header, Content } from '../../components';
import { setData } from '../../utils/dataHandler'
import './commentForm.css';

// Interface
import { FormValues } from '../../components/form/Content';

// ==============================|| FORM - ADD A NEW COMMENT/DESCRIPTION  ||============================== //

const CommentForm = () => {
    const handleSubmit = useCallback((formValues: FormValues) => {
        setData(formValues);
    }, []);

    return (
        <div className="comment-form">
            <Header />
            <Content onSubmit={handleSubmit} />
        </div>
    );
};

export default CommentForm;
