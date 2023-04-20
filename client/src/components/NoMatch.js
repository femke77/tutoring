import cat from "../assets/cat.webp";

const NoMatch = () => {
  return (
    <div className="no-match-container">

      <div className="no-match">
        <img
          height="600"
          width="600"
          src={cat}
          alt="cartoon cat with mouth wide open"
        />
        <p>Oops, we couldn't find that page!</p>
      </div>

      <p>Image by Vecteezy</p>
    </div>
  );
};

export default NoMatch;
