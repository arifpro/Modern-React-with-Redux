import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css-offline';
import faker from 'faker';

const CommentDetail = ({ author, date, text }) => {
    const avatar = faker.image.people();
    const avatarAlt = 'http://placeimg.com/480/480/people';

    return (
        <>
            <a href="/" className="avatar">
                <img src={avatarAlt} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">{author}</a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
                <div className="actions">
                    <a href="/" className="reply">Reply</a>
                </div>
            </div>
        </>
    );
};

const App = () => {
    const avatar = faker.image.people();
    const avatarAlt = 'http://placeimg.com/480/480/people';

    return (
        <div style={{margin: '100px'}} className="ui minimal comments">
            <h3 className="ui dividing header">Comments</h3>
            <div className="comment">
                <CommentDetail
                    author='Matt'
                    date='Today at 5:42PM'
                    text='How artistic!'
                />
            </div>
            
            <div className="comment">
                <CommentDetail
                    author='Elliot Fu'
                    date='Yesterday at 12:30AM'
                    text='This has been very useful for my research. Thanks as well!'
                />
                <div className="comments">
                    <div className="comment">
                        <CommentDetail
                            author='Jenny Hess'
                            date='Just now'
                            text='Elliot you are always so right :)'
                        />
                    </div>
                </div>
            </div>
            
            <div className="comment">
                <CommentDetail
                    author='Joe Henderson'
                    date='5 days ago'
                    text='Dude, this is awesome. Thanks so much'
                />
            </div>
            <form className="ui reply form">
                <div className="field">
                    <textarea></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                    <i className="icon edit"></i> Add Reply
                </div>
            </form>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
