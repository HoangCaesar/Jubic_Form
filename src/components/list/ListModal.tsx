import { memo } from 'react';

// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import CommentIcon from '@mui/icons-material/Comment';

// Types
import Blog from '../../models/blog';
interface ListModalProps {
    isOpen: boolean;
    blog?: Blog;
    onClose: () => void;
    onDelete: (blog?: Blog) => void;
}

// Style for Modal
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '100%',
    minHeight: '50%',
    maxWidth: '100%',
    minWidth: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// ==============================|| MODAL - FOR LIST   ||============================== //

const ListModal = ({ isOpen, blog, onClose, onDelete }: ListModalProps) => {
    const handleDelete = (blog?: Blog) => {
        onDelete(blog);
    };

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ color: '#2e7d32' }}
                    >
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{ display: 'inline-block', color: '#002366' }}
                        >
                            <PersonIcon /> Author:
                        </Typography>
                        &nbsp; {blog?.author}
                    </Typography>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ marginTop: '15px' }}
                    >
                        <Typography variant="h5" component="h2" sx={{ color: '#002366' }}>
                            <DescriptionIcon /> Description:
                        </Typography>
                        {blog?.description}
                    </Typography>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ marginTop: '15px' }}
                    >
                        <Typography variant="h5" component="h2" sx={{ color: '#002366' }}>
                            <CommentIcon /> Comment:
                        </Typography>
                        {blog?.comment}
                    </Typography>
                    <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleDelete(blog)}
                            sx={{ backgroundColor: '#d50000' }}
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default memo(ListModal);
