export default function itemSearch (id, cart) {
  function findItem (id, cart) {
    const indexOfItemInCart = cart.findIndex(item => item.id === id)
    if (indexOfItemInCart >= 0) {
      return cart[indexOfItemInCart].cant
    } else {
      return 0
    }
  }

  const quantityOfItemInCart = findItem(id, cart)

  return { quantityOfItemInCart }
}
