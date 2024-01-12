import { commentsData } from "../utils/commentsData"
import CommentsList from "./CommentsList"

const CommentsContainer = () => {
  return (
    <div className="sm:mx-5 p-2 mt-4 sm:p-2 w-screen sm:w-3/5">
        <h1 className="font-bold text-2xl">Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer