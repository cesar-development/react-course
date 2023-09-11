import { useField } from 'formik'
import { Control, ErrorMessage, Label, StyledInput } from './../styleds'

export default function Input({ label, ...props }) {
  const [field, meta] = useField(props)

  return (
    <Control>
      <Label>{label}</Label>
      <StyledInput {...field} {...props} />

      {(meta.touched && meta.error) && (
        <ErrorMessage>{meta.error}</ErrorMessage>
      )}
    </Control>
  )
}
