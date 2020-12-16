import React, { Component } from 'react';
import AppointmentItem from './AppointmentItem';
import appointments from '../mock/appointments.json'
import AddAppointment from './AddAppointment'

class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = {appointments, appointment:{}, isEditing: false}
    this.deleteAppointment = this.deleteAppointment.bind(this)
  }

  addAppointment = (appointment) => {
    appointment.id = this.state.appointments[this.state.appointments.length - 1].id + 1;
    this.setState({
      appointments:[...this.state.appointments, appointment]
    })
  }

  deleteAppointment = (id) => {
    const appointmentCopy = [...this.state.appointments];
    this.setState({appointments: appointmentCopy.filter(appointment => appointment.id !== id) });
  }

  updateAppointment = (newItem) => {
    const appointmentCopy = [...this.state.appointments];
    const updatedAppointment = appointmentCopy.map(value => {
      return value.id === newItem.id ? newItem : value
    })
    this.setState({...this.state, appointments: updatedAppointment})
  }


  render() {
    return (
      <div>
        <table>
          <caption>Appointments</caption>
          <tbody>
            <tr>
              <th>Id</th>
              <th>idBuilding</th>
              <th>idBoiler</th>
              <th>idTechnician</th>
              <th>start time</th>
              <th>end time</th>
              <th>date</th>
              <th>type</th>
            </tr>
            {
              this.state.appointments.map(appointment =>
                <AppointmentItem
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={this.deleteAppointment}
                  updateAppointment={this.updateAppointment}
              />)
            }
          </tbody>
        </table>
        <AddAppointment
        addAppointment={this.addAppointment}
        editedAppointment={this.state.appointment}/>
      </div>
    );
  }
}

export default Appointments;
