import './LogMessage.css'

function LogMessage(props){
  return(
    <div className="logMessage" style={{display:props.text?'inline':'none'}}>
      {props.text}
    </div>
  )
}

export {LogMessage}