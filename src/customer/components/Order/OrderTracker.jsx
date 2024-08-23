import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    'Placed',
    'Order Confirmed',
    'shipped',
    'Out for delivery',
    'Deliverd',
]

const OrderTracker = ({ activeStep }) => {
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step>
                        <StepLabel sx={{ color: '#69a1ff', fontSize: '44' }}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default OrderTracker
