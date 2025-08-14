# Form Conventions

## General Form Conventions
- Use controlled components for all inputs (value and onChange).
- Group related fields visually and logically.
- Validate inputs on change and on submit.
- Show clear error messages for invalid fields.
- Use descriptive labels and placeholders.
- Disable submit button while loading or if required fields are empty.
- Use consistent spacing and layout (e.g., with MUI or SCSS).
- Support keyboard navigation and accessibility (aria-labels, tabIndex).
- Use helper text for additional guidance.
- Reset form state on successful submit or modal close.

## Account Form Conventions
- Email: Validate format, show error if invalid.
- Username: Enforce min/max length, uniqueness, and allowed characters.
- Location: Use dropdowns or autocomplete for region, latitude/longitude as number inputs.
- Avatar: Allow image upload and preview (if supported).
- Password: Use masked input, enforce strength rules (if present).

## Project/Task Forms
- Title: Required, min/max length.
- Description: Optional, multiline.
- Color: Use color picker or dropdown.
- Dates: Use date pickers, validate ranges.
- Priority/Type: Use select/dropdown, show icons if possible.

## Modal Forms
- Close on outside click or Escape key.
- Reset state on close.
- Show loading spinner on submit.

## Form Widgets
- Use reusable components for text fields, selects, buttons.
- Pass props for label, value, error, helperText, etc.
- Support custom validation via props.
