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

export default CommentDetail;