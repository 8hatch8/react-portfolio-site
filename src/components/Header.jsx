import CoverImage from '../images/profile_cover.jpg';
import ProfileImage from '../images/profile.jpg';

export const Header = () => {
  return (
    <header className='main-cover' style={{ backgroundImage: `url(${CoverImage})` }}>
      <div className="overlay"></div> {/*背景要素*/}
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/*カバー画像*/}
            <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }} ></div>
            <h1 className="title-text">yutaka</h1>
            <h3 className="title-text">Engineer</h3>
            <ul className="social-icons">
              <li className="icon-link">
                {/*TODO*/}
              </li>
              <li className="icon-link">
                {/*TODO*/}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};