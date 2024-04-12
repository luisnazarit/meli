const getItem = async (itemSearch) => {
  try {
    const res = await fetch(`${API_SEARCH}?q=${itemSearch}`);
    return res.json();
  } catch (e) {
    return e;
  }
};

export default async function Page() {
  return (
    <p>Hola</p>
  )
}