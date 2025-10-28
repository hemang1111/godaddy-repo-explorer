import React, { useMemo } from "react"
import { Tooltip, Whisper } from 'rsuite'

const TooltipRsuite = React.memo((props) => {
    // Use memoization for the tooltip content
    const tooltip = useMemo(() => (
        <Tooltip className={`${props.className} rs-tooltip-arrow`} id={props.id}>
            {props.tooltipcontent}
        </Tooltip>
    ), [props.tooltipcontent, props.className, props.id])


    try {
        return (
            <Whisper
                placement={props.placement}
                controlId={props.controlId}
                trigger={props.trigger}
                speaker={tooltip}
                onOpen={props.onOpen}
                onClose={props.onClose}
                disabled={props.disabled}
                enterable={props.enterable} 
                followCursor={props.followCursor}
            >
                {props.children}
            </Whisper>
        );
      
    } catch (e) {
      console.log(e)
      return <></>
    }
});

// Set default props to avoid repeating them in the main code
TooltipRsuite.defaultProps = {
    placement: 'top',
    trigger: 'hover',
    controlId: "control-id-hover",
};

export default TooltipRsuite
