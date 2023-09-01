import { useState } from 'react'

export default function useForm(initial) {
  const [form, setForm] = useState(initial)

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const resetForm = () => {
    setForm(initial)
  }

  return {
    form,
    handleChange,
    resetForm,
  }
}
