import React from 'react';
import './Chips.css';

const Chips = ({ 
  availableOptions = [], 
  selectedOptions = [], 
  onSelectionChange, 
  placeholder = "Seleziona le opzioni",
  maxSelections = null,
  className = ""
}) => {
  // Ensure selectedOptions is always an array
  const safeSelectedOptions = Array.isArray(selectedOptions) ? selectedOptions : [];
  
  const handleChipClick = (option) => {
    const isSelected = safeSelectedOptions.includes(option);
    let newSelection;
    
    if (isSelected) {
      // Remove from selection
      newSelection = safeSelectedOptions.filter(item => item !== option);
    } else {
      // Add to selection (check max limit)
      if (maxSelections && safeSelectedOptions.length >= maxSelections) {
        return; // Don't add if max reached
      }
      newSelection = [...safeSelectedOptions, option];
    }
    
    onSelectionChange(newSelection);
  };

  return (
    <div className={`chips-container ${className}`}>
      <div className="chips-label">
        {placeholder}
        {maxSelections && (
          <span className="chips-counter">
            {safeSelectedOptions.length}/{maxSelections}
          </span>
        )}
      </div>
      
      {/* Available options with selection indicators */}
      <div className="available-chips">
        {availableOptions.map((option) => {
          const isSelected = safeSelectedOptions.includes(option);
          const isDisabled = maxSelections && safeSelectedOptions.length >= maxSelections && !isSelected;
          
          return (
            <button
              key={option}
              type="button"
              className={`chip ${isSelected ? 'selected' : 'available'} ${isDisabled ? 'disabled' : ''}`}
              onClick={() => handleChipClick(option)}
              disabled={isDisabled}
              aria-pressed={isSelected}
            >
              <span className="chip-text">{option}</span>
              {isSelected && <span className="chip-check">✓</span>}
            </button>
          );
        })}
      </div>
      
      {safeSelectedOptions.length === 0 && (
        <div className="chips-placeholder">
          Seleziona le materie che insegni
        </div>
      )}
    </div>
  );
};

export default Chips;
