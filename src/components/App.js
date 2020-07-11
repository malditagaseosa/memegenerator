import React from 'react';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();    

    this.state = {
      listLimit: 10,
      top: '',
      bottom: ''
    }
  }  

  render(){
    return (
      <Container>
        <h1>Meme Generator</h1>
        <Row>
          <Col md={4}>
            <Form className="fixed">
                <Form.Group>
                    <Form.Label>Top</Form.Label>
                    <Form.Control onChange={event => this.setState({top: event.target.value}) } type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bottom</Form.Label>
                    <Form.Control onChange={event => this.setState({bottom: event.target.value}) } type="text" />
                </Form.Group>
            </Form>
          </Col>
          <Col md={8}>
            {
              this.props.myMemes.length > 0 ?
                <MyMemes myMemes={this.props.myMemes} />
              :
                ''
            }                          
            {
              this.props.memes.slice(0, this.state.listLimit).map((meme) => {
                return(
                  <MemeItem 
                    key={meme.id} 
                    meme={meme}
                    top={this.state.top}
                    bottom={this.state.bottom} 
                  />
                );
              })
            }
            <Button
              className="load-more-btn"
              onClick={() => { this.setState({listLimit: this.state.listLimit + 10})}} 
              variant="outline-dark"
            >
              Load more ...
            </Button>
          </Col>                    
        </Row>        
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps, null)(App);
