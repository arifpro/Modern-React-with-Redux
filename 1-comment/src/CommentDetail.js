const CommentDetail = ({ author, date, text, avatar }) => {
    return (
        <>
            <a href="/" className="avatar">
                <img src={avatar} alt="avatar" />
            </a>
            <div style={{marginLeft: '45px'}} className="content">
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