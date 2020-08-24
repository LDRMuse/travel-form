export default {
  addTravel(newTravel) {
    fetch('http://localhost:5000/travel/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      // Turn 'newTravel' JS object into actual JSON
      body: JSON.stringify(newTravel),
    })
  },
  deleteAllTravels() {
    fetch('http://localhost:5000/travel/delete', {
      method: 'DELETE',
    })
  }
}

//db.collection.remove()
