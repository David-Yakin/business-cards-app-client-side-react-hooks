import PropTypes from 'prop-types';
import cardType from '../../model/types/cardType';

const Card = ({ card, onDelete }) => {
    const {
        title,
        description,
        address,
        image: { url, alt },
        bizNumber,
        phone,
    } = card;

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className="card px-0">
                <div className="card-head">
                    <img className="img-fluid" src={url} alt={alt} />
                    <div className="p-2">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <hr className="m-0" />
                    </div>
                </div>
                <div className="card-body p-2">
                    <div>
                        <strong>Tel: </strong>
                        {phone}
                    </div>
                    <div>
                        <strong>Address: </strong>
                        {address}
                    </div>
                    <div>
                        <strong>Card Number: </strong>
                        {bizNumber}
                    </div>

                    <div>
                        <span className="cursor" onClick={onDelete} onKeyDown={onDelete} role="button" tabIndex="0">
                            Delete |
                            {' '}
                        </span>
                        <span className="cursor">Edit</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: cardType.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Card;
