export const fetchLocalesList = async () => {
  const headers = new Headers({
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  })

  return fetch(`https://api.phrase.com/v2/projects/${import.meta.env.VITE_PROJECT_ID}/locales`, {
    method: 'GET',
    headers
  }).then((res) => res.json())
}
