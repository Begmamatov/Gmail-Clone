import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import React from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";

function MailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/mail')} className='mailRow'>
            <div className="mailRow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>

            <h3 className="mailRow_title">{title}</h3>

            <div className="mailRow_message">
                <h4>{subject}{' '}
                    <span className='mailRow_description'>
                        {description}
                    </span>
                </h4>
            </div>

            <div className="mailRow_time">{time}</div>
        </div>
    )
}

export default MailRow