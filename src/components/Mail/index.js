import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'

function Mail() {
  const navigate = useNavigate();

  return (
    <div className='mail'>
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <CheckCircle />
          </IconButton>

          <IconButton>
            <LabelImportant />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>Subject</h2>
          <LabelImportant className='mail_important' />
          <p>Title</p>
          <p className='mail_time'>10pm</p>
        </div>

        <div className="mail_message">
          <p>Yangi xabar kelayapdi....</p>
        </div>
      </div>
    </div>
  )
}

export default Mail