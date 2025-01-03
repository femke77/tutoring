import cat from "../assets/output.png";

const NoMatch = () => {
  return (
    <div className="no-match-container">

      <div className="no-match pt-5">
        <img
          height="500"
          width="500"
          src={cat}
          alt="cartoon cat with mouth wide open"
        />
        <p className="mb-3">Oops, we couldn't find that page!</p>
        <a href="http://vecteezy.com">image by vecteezy.com</a>

      </div>

    </div>
  );
};

export default NoMatch;