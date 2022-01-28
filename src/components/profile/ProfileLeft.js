const ProfileLeft = ({ profile }) => {
  return (
    <div className="profile__left">
      <div className="profile__image">
        <img src={profile.avatar} alt="profile" />
      </div>
      <div className="profile__top-section">
        <div className="profile__top-section-item">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px' }} aria-hidden="true" role="presentation" focusable="false"><path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path></svg>
          <span>Superhost</span>
        </div>
        <div className="profile__top-section-item">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px' }} aria-hidden="true" role="presentation" focusable="false"><path d="M14.998 1.032a2 2 0 0 0-.815.89l-3.606 7.766L1.951 10.8a2 2 0 0 0-1.728 2.24l.031.175A2 2 0 0 0 .87 14.27l6.36 5.726-1.716 8.608a2 2 0 0 0 1.57 2.352l.18.028a2 2 0 0 0 1.215-.259l7.519-4.358 7.52 4.358a2 2 0 0 0 2.734-.727l.084-.162a2 2 0 0 0 .147-1.232l-1.717-8.608 6.361-5.726a2 2 0 0 0 .148-2.825l-.125-.127a2 2 0 0 0-1.105-.518l-8.627-1.113-3.606-7.765a2 2 0 0 0-2.656-.971zm-3.07 10.499l4.07-8.766 4.07 8.766 9.72 1.252-7.206 6.489 1.938 9.723-8.523-4.94-8.522 4.94 1.939-9.723-7.207-6.489z"></path></svg>
          <span>791 Reviews</span>
        </div>
        <div className="profile__top-section-item">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px' }} aria-hidden="true" role="presentation" focusable="false"><path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm0 2.394l-.337.213C12.245 5.52 8.805 6.706 5.352 6.952L5 6.972V17.5c0 6.831 4.716 11.357 10.713 11.497L16 29c6.133 0 11-4.56 11-11.5V6.972l-.352-.02c-3.453-.246-6.893-1.432-10.311-3.547L16 3.192zm7 7.394L24.414 12 13.5 22.914 7.586 17 9 15.586l4.5 4.499 9.5-9.5z"></path></svg>
          <span>Identity Verified</span>
        </div>
      </div>
      <div className="profile__divider"></div>
      <div className="profile__bottom-section">
        <h3>{profile.fullname} verified</h3>
        <div className="profile__bottom-section-item">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px' }} aria-hidden="true" role="presentation" focusable="false"><path d="M13.102 2.537L15.365 4.8l-9.443 9.443L.057 8.378 2.32 6.115l3.602 3.602z"></path></svg>
          <span>Identity</span>
        </div>
        <div className="profile__bottom-section-item">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px' }} aria-hidden="true" role="presentation" focusable="false"><path d="M13.102 2.537L15.365 4.8l-9.443 9.443L.057 8.378 2.32 6.115l3.602 3.602z"></path></svg>
          <span>Email Address</span>
        </div>
        <div className="profile__bottom-section-item">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px' }} aria-hidden="true" role="presentation" focusable="false"><path d="M13.102 2.537L15.365 4.8l-9.443 9.443L.057 8.378 2.32 6.115l3.602 3.602z"></path></svg>
          <span>Phone number</span>
        </div>
        <div className="profile__bottom-section-item">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px' }} aria-hidden="true" role="presentation" focusable="false"><path d="M13.102 2.537L15.365 4.8l-9.443 9.443L.057 8.378 2.32 6.115l3.602 3.602z"></path></svg>
          <span>Work email</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeft;