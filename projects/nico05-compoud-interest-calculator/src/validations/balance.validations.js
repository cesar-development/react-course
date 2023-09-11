import * as Yup from 'yup'

export const validationSchema = Yup.object({
  deposit: Yup.number()
    .required('Is required')
    .typeError('Must be a number')
    .positive('Must be positive'),
  contribution: Yup.number()
    .required('Is required')
    .typeError('Must be a number')
    .positive('Must be positive'),
  years: Yup.number()
    .required('Is required')
    .typeError('Must be a number')
    .positive('Must be positive'),
  rate: Yup.number()
    .required('Is required')
    .typeError('Must be a number')
    .positive('Must be positive'),
})
