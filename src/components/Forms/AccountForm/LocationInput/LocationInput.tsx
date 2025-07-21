// components/RegionFinder.tsx
import React, { useState } from 'react';
import { Autocomplete } from '@mui/material';
import { useLocations } from '../../../../hooks/useLocations';
import StyledTextField from '../../../StyledComponents/StyledTextField/StyledTextField';

interface LocationInputProps {
  selectedRegion: string;
  onSelect: (region: string) => void;
  setLongitude: (lon: string) => void;
  setLatitude: (lat: string) => void;
}
const LocationInput: React.FC<LocationInputProps> = ({ onSelect, setLongitude, setLatitude }) => {
  const [inputValue, setInputValue] = useState('');
  const { results, loading } = useLocations(inputValue);



  return (
    <Autocomplete
      options={results}
      getOptionLabel={(option) => `${option.city}, ${option.country}`}
      onInputChange={(_, value) => setInputValue(value)}
      onChange={(_, value) => {
        setLatitude(value?.lat || '');
        setLongitude(value?.lon || '');
        onSelect(value ?
          `${value.city}, ${value.country}` :
          '')
      }}
      loading={loading}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label="Search City"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default LocationInput;
