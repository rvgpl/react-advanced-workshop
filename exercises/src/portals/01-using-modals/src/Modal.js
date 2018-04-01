import React from 'react';
import ReactDOM from 'react-dom';
class Modal extends React.Component {

  render() {
    if(!this.props.show) {
      return null;
    }

     const modalStyle = {
        background: 'transparent',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      };


    return ReactDOM.createPortal(<div style={modalStyle} >
        {this.props.children}
      </div>, document.getElementById("modal"));
  }
}

export default Modal;
