import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME </span>
            <img src='https://i.pinimg.com/564x/18/4a/e9/184ae99a1772a5def36e2699d030fa7c.jpg' alt=''  />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti dolorem iste perferendis quibusdam itaque, debitis suscipit ut rerum soluta beatae error 
                libero nisi illo quod tempora et! Quos, accusamus soluta.
            </p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle' >GATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle' >GATEGORIES</span>
            <div className="sidebarSocial">
                <i class="sidebarIcon fa-brands fa-square-facebook"></i>          
                <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i class="sidebarIcon fa-brands fa-square-youtube"></i>
                <i class="sidebarIcon fa-brands fa-linkedin"></i>
                <i class="sidebarIcon fa-brands fa-square-instagram"></i>
                <i class="sidebarIcon fa-brands fa-square-twitter"></i>
            </div>

        </div>
           
    </div>
  )
}
