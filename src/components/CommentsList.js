import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  if (!comments) return null;
  return comments.map((comment, index) => (
    <div  key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-r-0 border-y-0 border-l-black ml-5">
        <CommentsList comments={comment.replies}/>
    </div>
    </div>

  ));
};

export default CommentsList;
