import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chips from '../Chips';

describe('Chips Component', () => {
  const mockOptions = ['matematica', 'italiano', 'storia', 'scienze', 'geografia'];
  const mockOnSelectionChange = jest.fn();

  beforeEach(() => {
    mockOnSelectionChange.mockClear();
  });

  test('renders available options as chips', () => {
    render(
      <Chips
        availableOptions={mockOptions}
        selectedOptions={[]}
        onSelectionChange={mockOnSelectionChange}
      />
    );

    mockOptions.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test('shows checkmarks on selected chips', () => {
    const selectedOptions = ['matematica', 'italiano'];
    render(
      <Chips
        availableOptions={mockOptions}
        selectedOptions={selectedOptions}
        onSelectionChange={mockOnSelectionChange}
      />
    );

    // Should show checkmarks for selected options
    const checkmarks = screen.getAllByText('✓');
    expect(checkmarks).toHaveLength(2); // One for matematica, one for italiano
    
    // Should show selected chips with proper styling
    const matematikaButton = screen.getByRole('button', { name: /matematica/i });
    expect(matematikaButton).toHaveAttribute('aria-pressed', 'true');
    
    const italianoButton = screen.getByRole('button', { name: /italiano/i });
    expect(italianoButton).toHaveAttribute('aria-pressed', 'true');
  });

  test('calls onSelectionChange when chip is clicked', () => {
    render(
      <Chips
        availableOptions={mockOptions}
        selectedOptions={[]}
        onSelectionChange={mockOnSelectionChange}
      />
    );

    const matematikaChip = screen.getByRole('button', { name: /matematica/i });
    fireEvent.click(matematikaChip);

    expect(mockOnSelectionChange).toHaveBeenCalledWith(['matematica']);
  });

  test('deselects chip when selected chip is clicked again', () => {
    const selectedOptions = ['matematica', 'italiano'];
    render(
      <Chips
        availableOptions={mockOptions}
        selectedOptions={selectedOptions}
        onSelectionChange={mockOnSelectionChange}
      />
    );

    const matematikaButton = screen.getByRole('button', { name: /matematica/i });
    fireEvent.click(matematikaButton); // Deselect matematica

    expect(mockOnSelectionChange).toHaveBeenCalledWith(['italiano']);
  });

  test('shows placeholder when no options are selected', () => {
    render(
      <Chips
        availableOptions={mockOptions}
        selectedOptions={[]}
        onSelectionChange={mockOnSelectionChange}
      />
    );

    expect(screen.getByText('Seleziona le materie che insegni')).toBeInTheDocument();
  });

  test('respects max selections limit', () => {
    render(
      <Chips
        availableOptions={mockOptions}
        selectedOptions={['matematica', 'italiano']}
        onSelectionChange={mockOnSelectionChange}
        maxSelections={2}
      />
    );

    const storiaChip = screen.getByRole('button', { name: /storia/i });
    expect(storiaChip).toBeDisabled();
  });

  test('shows counter when maxSelections is set', () => {
    render(
      <Chips
        availableOptions={mockOptions}
        selectedOptions={['matematica']}
        onSelectionChange={mockOnSelectionChange}
        maxSelections={3}
      />
    );

    expect(screen.getByText('1/3')).toBeInTheDocument();
  });
});
