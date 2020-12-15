import React , { Component } from 'react';

class AddAppointment extends Component {

  state = {
    id: '',
    idBuilding: '',
    idBoiler: '',
    date: '',
    startTime: '',
    endTime: '',
    idTechnician: '',
    type: '',
  }

  changeValue = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  submition = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: this.state.id,
      idBuilding: this.state.idBuilding,
      idBoiler: this.state.idBoiler,
      date: this.state.date,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      idTechnician: this.state.idTechnician,
      type: this.state.type
    }
    this.props.addAppointment(newAppointment);
    this.setState( {
      id: '',
      idBuilding: '',
      idBoiler: '',
      date: '',
      startTime: '',
      endTime: '',
      idTechnician: '',
      type: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.submition}>
        <div id = 'addNewDiv'>
          <h3 id = 'addNewTitle'>
            Add new appointment
          </h3>
          <ul>
          <li>
              <label htmlFor="id">ID:</label>
              <input type="number" id="id" placeholder="....." value={this.state.id} onChange={this.changeValue} required/>
            </li>
            <li>
              <label htmlFor="idBuilding">idBuilding:</label>
              <input type="number" id="idBuilding" placeholder="....." value={this.state.idBuilding} onChange={this.changeValue} required/>
            </li>
            <li>
              <label htmlFor="idBoiler">idBoiler:</label>
              <input type="number" id="idBoiler" placeholder="....." value={this.state.idBoiler} onChange={this.changeValue} required/>
            </li>
            <li>
              <label htmlFor="idTechnician">idTechnician:</label>
              <input type="number" id="idTechnician" placeholder="....." value={this.state.idTechnician} onChange={this.changeValue} required/>
            </li>
            <li>
              <label htmlFor="date">Date:</label>
              <input type="text" id="date" placeholder="....." value={this.state.date} onChange={this.changeValue} required/>
            </li>
            <li>
              <label htmlFor="startTime">Start Time:</label>
              <input type="text" id="startTime" placeholder="....." value={this.state.startTime} onChange={this.changeValue} required/>
            </li>
            <li>
              <label htmlFor="endTime">End Time:</label>
              <input type="text" id="endTime" placeholder="....." value={this.state.endTime} onChange={this.changeValue} required />
            </li>
            <li>
              <label htmlFor="type">Type:</label>
              <input type="text" id="type" placeholder="....." value={this.state.type} onChange={this.changeValue} required />
            </li>
          </ul>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default AddAppointment;