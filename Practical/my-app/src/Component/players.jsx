import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LOCAL_STORAGE_KEY = 'playersList';

function PlayerForm() {
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rank: '',
    odiRuns: '',
    testRuns: '',
    t20Runs: '',
    gender: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      setPlayers(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(players));
  }, [players]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedPlayers = [...players];
      updatedPlayers[editIndex] = formData;
      setPlayers(updatedPlayers);
      setEditIndex(null);
    } else {
      setPlayers([...players, formData]);
    }
    setFormData({ name: '', rank: '', odiRuns: '', testRuns: '', t20Runs: '', gender: '' });
  };

  const handleDelete = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  const handleUpdate = (index) => {
    setFormData(players[index]);
    setEditIndex(index);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="card-title mb-4 text-center text-primary">Player Form</h2>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Rank</label>
              <input name="rank" value={formData.rank} onChange={handleChange} placeholder="Enter rank" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">ODI Runs</label>
              <input name="odiRuns" value={formData.odiRuns} onChange={handleChange} placeholder="Enter ODI runs" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Test Runs</label>
              <input name="testRuns" value={formData.testRuns} onChange={handleChange} placeholder="Enter Test runs" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">T20 Runs</label>
              <input name="t20Runs" value={formData.t20Runs} onChange={handleChange} placeholder="Enter T20 runs" className="form-control" />
            </div>
            <div className="col-md-12">
              <label className="form-label d-block">Gender:</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <div className="col-12 text-end">
              <button type="button" onClick={handleSave} className="btn btn-success">Save</button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-5">
        <h3 className="mb-3">Players List</h3>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Rank</th>
              <th>ODI Runs</th>
              <th>Test Runs</th>
              <th>T20 Runs</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.rank}</td>
                <td>{player.odiRuns}</td>
                <td>{player.testRuns}</td>
                <td>{player.t20Runs}</td>
                <td>{player.gender}</td>
                <td>
                  <button onClick={() => handleUpdate(index)} className="btn btn-sm btn-warning me-2">Update</button>
                  <button onClick={() => handleDelete(index)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PlayerForm;