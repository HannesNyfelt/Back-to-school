export async function getBitcoinIndex(url: string) {
  const res = await fetch(url)
  const data = await res.json()
  return data.bpi.EUR;
}
