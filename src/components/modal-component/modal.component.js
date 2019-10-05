import React, { useRef } from 'react';
import classes from './modal-component.module.scss';

const ModalComponent = props => {

    const modalBackgroundRef = useRef(null);
    const modalContainerRef = useRef(null);

    const closeModal = (e) => {
        e.target === modalBackgroundRef.current && props.closemodal();
    }

    return (
        <React.Fragment>
            <div 
                onClick={e => closeModal(e)} 
                style={
                    {
                    transform : !props.showmodal && 'scale(0)', 
                    opacity : !props.showmodal && '0'
                    }
                } 
                className={classes.ModalContainerBackground}
                ref={modalBackgroundRef}
                >
                </div>

                <div className="row">
                    <div 
                        className={`${classes.ModalContainer} col-md-8 col-sm-10 p-0`}
                        ref={modalContainerRef}
                        style={{transform : !props.showmodal && 'scale(0)'}}
                        >
                        <div className={classes.ModalContainerHeader}>
                            <h2 className={classes.ModalContainerHeaderH2}>Modal Example</h2>
                        </div>

                        <div className={classes.ModalContainerBody}>
                            <h2>Lorem Lorem Ipsum is simply du vived not only five centuriels ?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                        </div>

                        <div className={classes.ModalContainerBottom}>
                            <button className={classes.success} onClick={props.closemodal}> Close </button>
                            <button className={classes.danger} onClick={props.closemodal}> Okay </button>  
                        </div>
                    </div>
                </div>


            </React.Fragment>
    )
}

export default ModalComponent;