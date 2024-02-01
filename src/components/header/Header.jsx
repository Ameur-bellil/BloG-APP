import './Header.css';
import image1 from 'C:/Users/user/OneDrive/Bureau/blog-app/src/Image/blogHeaderImage.webp';
export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitle">
            <span className='headerTitleSm'>Explorez un monde d'idées, de réflexions et d'inspirations sur </span>
            <span className='headerTitleLg'>InspiraBlog</span>
        </div>
        <img className='headerImg' src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt="photoDEcouverture" />
    </div>
  )
}
