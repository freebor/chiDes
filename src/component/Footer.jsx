const footerLinks = [
  {
    name: 'Contact the Publisher',
    links: [
      { name: 'mike@runo.com', href: '#' },
      { name: '+944 450 904 505', href: '#' },
    ],
  },
  {
    name: 'Explorate',
    links: [
      { name: 'About', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Job Opportunities', href: '#' },
      { name: 'Advertise', href: '#' },
      { name: 'Membership', href: '#' },
    ],
  },
  {
    name: 'Headquarter',
    address: [
      { name: '191 Middleville Road, NY 1001, Sydney Australia', href: '#' },
    ],
    },

  {
  name: "Connections",
  socials: [
    { icon: BsInstagram, link: "#" },
    { icon: AiFillYoutube, link: "#" },
    { icon: BsFacebook, link: "#" },
    { icon: AiOutlineTwitter, link: "#" }
  ]
  },
];



export const Footer = () => {
    return (
      <footer>
        <div>
          <h2>Contact the Publisher</h2>
          <ul>
            <li>
              <a href="#">mike@runo.com</a>
            </li>
            <li>
              <a href="#">+944 450 904 505</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Explorate</h2>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Job Opportunities</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Headquarter</h2>
          <ul>
            <li>
              <a href="#">191 Middleville Road NY 1001 Sydney Australias</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Connections</h2>
          <div>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </footer>
    );
}

