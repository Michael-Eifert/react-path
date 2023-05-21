import { Group, GroupPayment, Payment, Person } from '../model/Group'

export const processPayment = (
  group: Group,
  payerId: string,
  recipientId: string,
  paymentAmount: number,
): Group => {
  let groupPayment
  const updatedPersons = group.persons.map((person: Person) => {
    if (person.id === payerId) {
      const newPayment: Payment = { paidTo: recipientId, amount: paymentAmount }

      // Build GroupPayment to add to the group as statistics
      const recipient: Person = group.persons.find(
        (person) => person.id === recipientId,
      ) as Person
      groupPayment = {
        payerName: person.name,
        recipientName: recipient.name,
        amount: paymentAmount,
      }

      const updatedPayments = [...person.payments, newPayment]

      // Adjust balance
      const updatedBalance = person.balance + paymentAmount

      return {
        ...person,
        balance: updatedBalance,
        payments: updatedPayments,
      }
    }

    if (person.id === recipientId) {
      // Update balance
      const updatedBalance = person.balance - paymentAmount
      return { ...person, balance: updatedBalance }
    }

    return person
  })

  const updatedPayments = groupPayment
    ? [...group.payments, groupPayment]
    : group.payments
  return { ...group, persons: updatedPersons, payments: updatedPayments }
}
