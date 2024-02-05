import './SinglePost.css'
import image from '../../Image/postImage.jpg';

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
            src={image} 
            alt=""
            className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur
                <div className="singlePostEdit">
                    <i className="SinglePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="SinglePostIcon fa-solid fa-trash"></i>

                </div> 
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'> Author: <b>Rami</b></span>
                <span className='singlePostAuthor'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis eveniet numquam pariatur 
              deserunt ipsum consectetur debitis ducimus, 
              suscipit iure maxime ab quo amet odit, culpa nobis dolorum dolor at?

            </p>
            

        </div>


    </div>
  )
}
