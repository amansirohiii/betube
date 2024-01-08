import { commentsData } from "../utils/commentsData"
import CommentsList from "./CommentsList"

const CommentsContainer = () => {
  return (
    <div className="mx-5 p-2">
        <h1 className="font-bold text-2xl">Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer