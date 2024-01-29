import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="react__card">
        <div className="react__card1">
          <h1>{props.a}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            pariatur optio nisi nesciunt corrupti cupiditate laborum rerum
            cumque neque? Tempore, enim! Alias consequatur pariatur aut dolorum
            nulla autem quia in?
          </p>
          <button>View More</button>
        </div>

        <div className="react__card1">
          <h1>{props.b}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            pariatur optio nisi nesciunt corrupti cupiditate laborum rerum
            cumque neque? Tempore, enim! Alias consequatur pariatur aut dolorum
            nulla autem quia in?
          </p>
          <button>View More</button>
        </div>

        <div className="react__card1">
          <h1>{props.c}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            pariatur optio nisi nesciunt corrupti cupiditate laborum rerum
            cumque neque? Tempore, enim! Alias consequatur pariatur aut dolorum
            nulla autem quia in?
          </p>
          <button>View More</button>
        </div>
      </div>
    </>
  );
};

export default Card;
