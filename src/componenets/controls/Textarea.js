/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

const Textarea = ({
 name, label, error, ...rest
}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <textarea {...rest} name={name} id={name} />
        {error && <span className="text-danger">{error}</span>}
    </div>
    );

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
};

Textarea.defaultProps = {
    error: null,
};

export default Textarea;
