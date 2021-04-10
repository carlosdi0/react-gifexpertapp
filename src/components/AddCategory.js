import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ addCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory(cats => {
            if(cats.some(cat => cat === inputValue.trim())) {
                return [...cats];
            } 
            return [inputValue.trim(), ...cats];
        });
        setInputValue('');
    }

    return (
        <div className="add-category">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Buscar GIFs"
                    value={inputValue}
                    onChange={handleInputChange} />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired
}

export default AddCategory;