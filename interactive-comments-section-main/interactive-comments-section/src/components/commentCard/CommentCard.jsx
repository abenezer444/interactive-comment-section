import React from 'react';
import './CommentCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import avatar from '../../assets/images/avatars/image-amyrobson.png';
import reply from '../../assets/images/icon-reply.svg';



const Comment = () => {
    return (
      <Container  className='comment-ctr'>
        <Row className='comment'>
          <Col xs={2} className='likeContainer'>
            
              <Button variant='link' className='link cmt-btn' >+</Button>
              <div className='likes'>0</div>
              <Button variant='link' className='link cmt-btn'>-</Button>
           
          </Col>
          <Col className='commentContainer'>
          <Stack direction="horizontal" gap={2}>
      <div ><img src={avatar} alt='avatar' className='avatar'></img></div>
      <div >bekelech</div>
      <div >2 months ago</div>
      <div className="p-2 ms-auto"><img src={reply} className='p-2'></img>Reply</div>
    </Stack>
    <div>Lorem lorem30 ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat debitis, consequatur reprehenderit rem quidem aliquid molestiae temporibus doloremque?</div>
          </Col>
        </Row>
    </Container>
    );
}

export default Comment;
