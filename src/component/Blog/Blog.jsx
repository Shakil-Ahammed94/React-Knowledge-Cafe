
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark,handleReadingTime}) => {
    console.log(blog);
    const {id,title,cover,reading_time,author,author_img,posted_date,hashtags}=blog;
    return (
    <div className='mb-16'>
            <img className='w-full rounded my-6 mb-8'  src={cover} alt="" srcset="" />

        <div className='flex justify-between mb-6 items-center'>
                <div className='flex'>
                            <img className='w-14' src={author_img} alt="" srcset="" />
                      <div className='ml-6'>
                              <h3 className='text-2xl'>{author}</h3>
                              <p>{posted_date}</p>
                       </div>
                </div>

                
                  <div className=' flex items-center'>
                   <span>{reading_time} min read</span>
                   <button className='ml-2 text-red-600' onClick={()=>handleBookmark(blog)}><FaBookmark></FaBookmark></button>
                   
                  </div>
        </div >
            <h2 className='text-2xl '>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>
            <div>
                <button onClick={()=>handleReadingTime(id,reading_time)} className='text-violet-700 font-bold underline'>Mark as Read</button>
            </div>
    </div>
    );
};
Blog.PropTypes={
    blog:PropTypes.object.isRequired
    
}

export default Blog;