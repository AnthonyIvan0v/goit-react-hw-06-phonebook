import PropTypes from 'prop-types';

import styles from './filter.module.css';

const Filter = ({ handleChange, value }) => {
  return (
    <div>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
