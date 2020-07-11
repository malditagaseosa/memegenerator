import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { createMeme } from '../actions';

class MemeItem extends React.Component {

    postMeme() {
        const { top, bottom } = this.props;
        const memeObj = {
            template_id: this.props.meme.id,
            text0: top,
            text1: bottom,
        }

        this.props.createMeme(memeObj);
    }

    render() {
        return (
            <div onClick={() => this.postMeme()} className="meme-item">
                <Image className="meme-img" src={ this.props.meme.url } alt={ this.props.meme.name } thumbnail fluid/>
                <p className="meme-txt">
                    { this.props.meme.name }
                </p>
            </div>            
        );
    }
}

export default connect(null, { createMeme })(MemeItem);