export async function fetch_data(method='', url = '', data = {}) {
  const response = await fetch(url, {
    method: method,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: (method === "get" || method == "GET" )? null : JSON.stringify(data)
  });
  const respJson = await response.json();
  return respJson; // parses JSON response into native JavaScript objects
}
