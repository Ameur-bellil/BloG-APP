import "./TopBar.css";


const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <i class="topIcon fa-brands fa-square-facebook"></i>          
                <i class="topIcon fa-brands fa-square-pinterest"></i>
                <i class="topIcon fa-brands fa-square-youtube"></i>
                <i class="topIcon fa-brands fa-linkedin"></i>
                <i class="topIcon fa-brands fa-square-instagram"></i>
                <i class="topIcon fa-brands fa-square-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                    className="topImage" 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2"
                    alt="" 
                />
                <i class=" topSearch fa-solid fa-magnifying-glass"></i>  
            </div>
        </div>
    );
};

export default TopBar;