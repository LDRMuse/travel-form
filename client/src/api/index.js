export default {
  async addTravel(newTravel) {
    try {
      const res = await fetch('http://localhost:5000/travel/add', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        // Turn 'newTravel' JS object into actual JSON
        body: JSON.stringify(newTravel),
      })
      if (res.status > 400) {
        throw `Unable to fetch from server`
      }
      return await res.json()
    } catch (error) {
      throw new Error(error)
    }

  },
  async deleteAllTravels() {
    try {
      const res = await fetch('http://localhost:5000/travel/delete', {
        method: 'DELETE',
      })
      return await res.json()
    } catch (error) {
      throw new Error(error)
    }
  },

  async showTravels(email) {
    try {
      const res = await fetch("http://localhost:5000/travel/show", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        //{email: email} = {email}
        body: JSON.stringify({ email })
      })
      return await res.json()
    } catch (err) {
      throw new Error(err)
    }

  },
}

