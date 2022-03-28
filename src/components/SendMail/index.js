import React from 'react'
import { Button } from '@material-ui/core'
import { Close } from '@mui/icons-material'
import './indexx.css'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../../features/mailSlice'

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className='sendMail'>
            <div className="sendMail_header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeSendMessage())} className='sendMail_close' />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    placeholder='To'
                    type='email'
                    {...register('to', { required: true })}
                />
                {errors.to && <p className='sendMail_error'>
                    To is Required!
                </p>}

                <input
                    name='subject'
                    placeholder='Subject'
                    type='text'
                    {...register('subject', { required: true })}
                />
                {errors.subject && <p className='sendMail_error'>
                    Subject is Required!
                </p>}
                <input
                    name='message'
                    placeholder='Messager...'
                    type='text'
                    className='sendMail_messange'
                    {...register('message', { required: true })}
                />
                {errors.message && <p className='sendMail_error'>
                    Message is Required!
                </p>}

                <div className="sendEmail_options">
                    <Button
                        className='sendMail_send'
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail