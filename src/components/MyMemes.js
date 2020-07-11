import React from 'react';
import { Container, Image } from 'react-bootstrap';

class MyMemes extends React.Component {
    render(){
        return (
            <Container fluid>
                <h4>My Memes</h4>
                {
                    this.props.myMemes.map((meme, index) => {                        
                        return (
                            <Image key={index} className="my-meme" src={meme.data.url} thumbnail fluid/>
                        )
                    })
                }
                <hr/>
            </Container>
        );
    }
}

export default MyMemes;