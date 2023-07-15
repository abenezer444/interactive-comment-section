

import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import avatar from '../../assets/images/avatars/image-amyrobson.png';
import Container from 'react-bootstrap/esm/Container';
import './replyArea.css';

const ReplyArea = () => {
    return (
        <Container> 
            <Stack direction="horizontal" gap={3} style={{width:'100%'}}>
                <div><img src={avatar} alt='avatar' className='avatar'></img></div>
                <div className='replyArea'><textarea className='replyArea' placeholder='comment'></textarea></div>
                <div><Button variant='primary' className='replyBtn'>Send</Button></div>
            </Stack>
        </Container>
    );
}

export default ReplyArea;

