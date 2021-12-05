/** @format */

const SocialLinks = () => {
  const socialLinks = [
    {
      link: 'https://github.com/dpak1999',
      icon: 'https://img.icons8.com/material-outlined/96/000000/github.png',
      name: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/deepak-kumar-dash-14a293176/',
      icon: 'https://img.icons8.com/material-rounded/96/000000/linkedin--v1.png',
      name: 'linkedin',
    },
    {
      link: 'https://www.facebook.com/deepak.dash.529/',
      icon: 'https://img.icons8.com/ios-glyphs/90/000000/facebook.png',
      name: 'facebook',
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-center text-sm mt-96">
        {socialLinks.map((item) => (
          <a href={item.link} target="_blank" rel="noreferrer">
            <img src={item.icon} alt={item.name} className="h-12" />
          </a>
        ))}
      </div>
      <span className="font-mono mt-2 text-lg">
        &copy; 2021 | Deepak kumar dash | Privacy Policy
      </span>
    </>
  );
};

export default SocialLinks;
