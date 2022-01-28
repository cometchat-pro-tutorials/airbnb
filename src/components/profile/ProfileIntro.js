const ProfileIntro = ({ profile }) => {
  return (
    <>
      <h3 className="profile__name">Hello, I am {profile.fullname}</h3>
      <p className="profile__about-title">Introduction</p>
      <p className="profile__about">{profile.about}</p>
      <div className="profile__info-item">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px' }} aria-hidden="true" role="presentation" focusable="false"><path d="M8.602 1.147l.093.08 7.153 6.914-.696.718L14 7.745V14.5a.5.5 0 0 1-.41.492L13.5 15H10V9.5a.5.5 0 0 0-.41-.492L9.5 9h-3a.5.5 0 0 0-.492.41L6 9.5V15H2.5a.5.5 0 0 1-.492-.41L2 14.5V7.745L.847 8.86l-.696-.718 7.153-6.915a1 1 0 0 1 1.297-.08z"></path></svg>
        <span>Live in {profile.address}</span>
      </div>
      <div className="profile__info-item">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px' }} aria-hidden="true" role="presentation" focusable="false"><path d="M26 7h-3.7V4.5c0-1.268-1.031-2.3-2.3-2.3h-8a2.302 2.302 0 0 0-2.3 2.3V7H6c-2.757 0-5 2.243-5 5v14c0 2.757 2.243 5 5 5h20c2.757 0 5-2.243 5-5V12c0-2.757-2.243-5-5-5zM12.3 4.8h7.4V7h-7.4zm.2 24.2h-3V9h3zm10 0h-3V9h3z"></path></svg>
        <span>Work: {profile.work}</span>
      </div>
    </>
  );
};

export default ProfileIntro;