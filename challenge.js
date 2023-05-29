
const bill = 299;
if (bill >= 50 && bill <= 300) {
  const tip = bill * 0.15;

  const total = bill + tip;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)
} else if (bill>300) {
  const tip = bill * 0.2;
  const total = bill + tip;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}
