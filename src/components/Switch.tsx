import { useState } from 'react';
import { Switch as RNSwitch } from 'react-native';

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  function toggleSwitch() {
    setIsEnabled(prevSate => !prevSate);
  }

  return (
    <RNSwitch
      trackColor={{ false: '#ccc', true: '#173ea5' }}
      thumbColor={isEnabled ? '#173ea5' : '#fff'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      ios_backgroundColor={'#3e3e3e'}
    />
  );
};
export default Switch;
