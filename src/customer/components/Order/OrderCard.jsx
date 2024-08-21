import { Grid } from '@mui/material'
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import TaskAltIcon from '@mui/icons-material/TaskAlt'

const OrderCard = () => {
    return (
        <div>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="../assets/images/1.jpg"
                            alt=""
                        />
                        <div className="ml-5 space-y-2">
                            <p className="">Neyugn Iat</p>
                            <p className="opacity-50 text-xs font-semibold">
                                Size: M
                            </p>
                            <p className="opacity-50 text-xs font-semibold">
                                Color: Brown
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>$300</p>
                </Grid>

                <Grid item xs={4}>
                    {true && (
                        <p>
                            <TaskAltIcon
                                sx={{ width: '15px', height: '15px' }}
                                className="text-green-600 mr-2 text-sm"
                            />
                            <span>Deliveried On August 30</span>
                        </p>
                    )}
                    {false && (
                        <p>
                            <LocalShippingIcon />
                            <span>Expected Delivery On August 30</span>
                        </p>
                    )}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
