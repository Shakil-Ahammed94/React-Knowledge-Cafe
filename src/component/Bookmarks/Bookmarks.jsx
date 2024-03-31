
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (

<div className="w-1/3  ml-4 bg-gray-300 my-6 rounded ">


         <div>
          <h3 className="text-2xl mb-4 text-purple-400 text-center my-4 bg-gray-300  ml-4 p-4 rounded border-b-2">Reading Time:{readingTime}</h3>

         </div>

          <div className=" rounded  ml-4">

         <h4 className="text-3xl text-center p-4">Bookmarks:{bookmarks.length}</h4>
         {
          bookmarks.map(bookmarks=><Bookmark bookmarks={bookmarks}></Bookmark>)
         }

          </div>
</div>
        
    );
};

export default Bookmarks;