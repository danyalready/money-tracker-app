import { useState } from 'react'

export const useFormInput = (initialValue, type) => {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    switch (e) {
      case 'select':
        setValue(e)
        break
      case 'number':
        const re = /^[0-9\b]+$/

        if (e.target.value === '' || re.test(e.target.value)) {
          setValue(e.target.value)
        }
        break
      default:
        setValue(e.target.value)
    }
  }

  return {
    value,
    onChange: handleChange,
    reset: (resetValue) => setValue(resetValue),
  }
}
