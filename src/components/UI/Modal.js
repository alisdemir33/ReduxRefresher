import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Button from '../UI/Button/Button'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div id="tirt" className={classes.simpleyayil}>{props.children}</div>
      <div className={classes.actions}> 
      <Button onClicked={props.onClose}>Close</Button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
