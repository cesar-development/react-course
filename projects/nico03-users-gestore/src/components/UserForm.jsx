import useForm from '../hooks/use-form'
import Input from './Input'
import Button from './Button'

export default function UserForm({ submit }) {
  const { form, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    lastName: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(form)
    resetForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Nombre'
        name='name'
        value={form.name}
        onChange={handleChange}
        placeholder='Nombre...'
      />

      <Input
        label='Apellidos'
        name='lastName'
        value={form.lastName}
        onChange={handleChange}
        placeholder='Apellidos...'
      />

      <Input
        label='Correo'
        name='email'
        value={form.email}
        onChange={handleChange}
        placeholder='Correo...'
      />

      <Button>Enviar</Button>
    </form>
  )
}
