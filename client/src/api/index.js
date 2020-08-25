export default {
  async addTravel(newTravel) {
    const res = await fetch('http://localhost:5000/travel/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      // Turn 'newTravel' JS object into actual JSON
      body: JSON.stringify(newTravel),
    })
    return await res.json()
  },
  async deleteAllTravels() {
    const res = await fetch('http://localhost:5000/travel/delete', {
      method: 'DELETE',
    })
    return await res.json()
  },

  async loginEmail() {
    const loginEmailRes = await fetch("http://localhost:5000/login", {
      method: 'GET',
  })
    return await loginEmailRes.json()
  },
}


//db.collection.remove()
