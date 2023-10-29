


import './MyCard.css'
import Tags from './Tags.jsx'

function MyCard(props) {

  return (

      
    <div className="MyCard" style={{width:"18rem"} } >
      <Tags texto={props.tag}></Tags>

    <img className="card-img-top" src={props.src} alt="perrito_castaño"style={{width:"200px"}}/>
    <div className="card-body">
      <h5 className="NombrePerrito">{props.name}</h5>
      <p className="DescripcionPerrito">{props.description}</p>
      <a href="#" className="btn btn-primary">Adopta aquí!</a>
    </div>
  </div>


  )
}
export default MyCard