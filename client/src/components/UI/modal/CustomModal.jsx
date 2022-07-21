import React from 'react';
import classes from "./CustomModal.module.css"

const CustomModal = ({children, visible, setVisible}) => {
    const modalClasses = [classes.custom_modal]
    if (visible) {
        modalClasses.push(classes.active)
    }

    return (
        <div className={modalClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={classes.custom_modal_content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;