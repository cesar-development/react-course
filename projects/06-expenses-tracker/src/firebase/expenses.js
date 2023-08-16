import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from './config'

export async function addExpense({ category, description, quantity, date, uidUser }) {
  return addDoc(collection(db, 'expenses'), {
    category,
    description,
    quantity: Number(quantity),
    date,
    uidUser,
  })
}

export async function deleteExpense({ id }) {
  await deleteDoc(doc(db, 'expenses', id))
}

export async function updateExpense({ id, category, description, quantity, date }) {
  const document = doc(db, 'expenses', id)
  
  return await updateDoc(document, {
    category,
    description,
    quantity: Number(quantity),
    date,
  })
}
