import './Settings.css'
import SideBar from '../../components/sidebar/SideBar'

export default function Setting() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Your Account</span>
            </div>
            <form  className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="" 
                    />
                    <label htmlFor="fileInput" >
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                </div>    
                <input type="file" id="fileInput" style={{display: "none"}} /> 
                <label>Username</label>
                <input type="text" placeholder="Safak" />
                <label>Email</label>
                <input type="email" placeholder="Safak@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">update</button>
            </form>   
        </div>
        <SideBar />
    </div>
  )
}
