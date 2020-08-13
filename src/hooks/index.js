import { useState } from 'react'

export const useFormInput = (initialValue, type) => {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    if (type === 'select') {
      setValue(e)
    } else if (type === 'number') {
      const re = /^[0-9\b]+$/

      if (e.target.value === '' || re.test(e.target.value)) {
        setValue(e.target.value)
      }
    } else {
      setValue(e.target.value)
    }
  }

  return {
    value,
    onChange: handleChange,
    reset: (resetValue) => setValue(resetValue),
  }
}
