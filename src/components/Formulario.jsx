import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import { Alert, Table } from 'react-bootstrap'

const Formulario = ({ data }) => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alerta, setAlerta] = useState({ mostrar: false, mensaje: '' })

  // const [idColaborador, setIdColaborador] = useState('')
  const [nombreColaborador, setNombreColaborador] = useState('')
  const [emailColaborador, setEmailColaborador] = useState('')
  const [edadColaborador, setEdadColaborador] = useState('')
  const [cargoColaborador, setCargoColaborador] = useState('')
  const [telefonoColaborador, setTelefonoColaborador] = useState('')

  const handletName = (e) => setNombreColaborador(e.target.value)
  const handletEmail = (e) => setEmailColaborador(e.target.value)
  const handletEdad = (e) => setEdadColaborador(e.target.value)
  const handletCargo = (e) => setCargoColaborador(e.target.value)
  const handletTelefono = (e) => setTelefonoColaborador(e.target.value)

  const agregarProducto = (e) => {
    e.preventDefault()
    if (nombreColaborador === '' || emailColaborador === '' || edadColaborador === '' || cargoColaborador === '' || telefonoColaborador === '') {
      setAlerta({ mostrar: true, mensaje: 'Por favor completa todos los campos.' }) // Mostrar alerta si falta algún dato
      return
    }

    setColaboradores([...colaboradores, { nombre: nombreColaborador, correo: emailColaborador, edad: edadColaborador, cargo: cargoColaborador, telefono: telefonoColaborador }])
    setNombreColaborador('')
    setEmailColaborador('')
    setEdadColaborador('')
    setCargoColaborador('')
    setTelefonoColaborador('')
    setAlerta({ mostrar: true, mensaje: 'Colaborador agregado correctamente.' })
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <h1>Lista de Colaboradores</h1>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>{item.edad}</td>
              <td>{item.cargo}</td>
              <td>{item.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <form className='container-form' onSubmit={agregarProducto}>
        <h2>Agrega Colaborador</h2>
        <input type='text' placeholder='Nombre del colaborador' value={nombreColaborador} onChange={handletName} />
        <input type='text' placeholder='Email del colaborador' value={emailColaborador} onChange={handletEmail} />
        <input type='text' placeholder='Edad del colaborador' value={edadColaborador} onChange={handletEdad} />
        <input type='text' placeholder='Cargo del colaborador' value={cargoColaborador} onChange={handletCargo} />
        <input type='text' placeholder='Teléfono del colaborador' value={telefonoColaborador} onChange={handletTelefono} />
        <button>Agregar Colaborador</button>
        {alerta.mostrar && <Alert variant={alerta.mensaje === 'Por favor completa todos los campos.' ? 'danger' : 'success'}>{alerta.mensaje}</Alert>}
      </form>
    </>
  )
}

export default Formulario
