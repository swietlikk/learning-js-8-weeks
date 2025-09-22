export function describeBook(book) {
    return Object.keys(book);
}

export function getAdults(users) {
  return users.filter(user => user.age >= 18);
}

export function avgAge(users) {
  const total = users.reduce((sum, user) => sum + user.age, 0);
  return total / users.length;
}