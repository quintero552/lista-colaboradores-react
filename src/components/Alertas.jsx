import { Alert } from 'react-bootstrap'

const Alertas = ({ mostrar, mensaje }) => {
  return (
    mostrar && <Alert variant={mensaje === 'Por favor completa todos los campos.' ? 'danger' : 'success'}>{mensaje}</Alert>
  )
}

export default Alertas
