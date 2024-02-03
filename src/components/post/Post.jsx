import './Post.css'
import image from '../../Image/postImage.jpg';

export default function Post() {
  return (
        <div className='post'>
            <img className='postImg' src={image} alt='postImage' />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum, dolor sit amet 
                </span>
                <hr />
                <div className="postDate">1 hour ago</div>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dignissimos vel. Assumenda ex, dolorem, archit
                    ecto recusandae aliquid expedita eveniet quaerat error corrupti possimus, optio 
                    aperiam illo libero provident totam debitis!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dignissimos vel. Assumenda ex, dolorem, archit
                    ecto recusandae aliquid expedita eveniet quaerat error corrupti possimus, optio 
                    aperiam illo libero provident totam debitis!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dignissimos vel. Assumenda ex, dolorem, archit
                    ecto recusandae aliquid expedita eveniet quaerat error corrupti possimus, optio 
                    aperiam illo libero provident totam debitis!
                </p>
                    
            </div>
        </div>
  )
}
