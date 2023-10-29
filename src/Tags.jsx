import './Tags.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos CSS
import Badge from 'react-bootstrap/Badge';


function Tags(props) {
return (

<Badge bg="secondary">{props.texto}</Badge>

)}

export default Tags
