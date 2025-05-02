const CardComponent = ({title, price, stock, images}) => {

    return (
      <article className="col">
        <div className="card shadow-sm">
          <img
            src={images ||"https://placehold.co/300x200" }
            className="card-img-top"
            alt={title}
            style={{minHeight: "380px", objectFit: "contain"}}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {price}$, {stock} left
            </p>
            <div className="d-flex justify-content-end align-items-center">
              <div className="">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };
  
export default CardComponent;
  