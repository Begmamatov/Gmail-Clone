import React from 'react'

import './index.css'

import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import SidebarOption from '../SidebarOption'
import { Duo, Inbox, Person, Phone } from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice'

function Sidebar() {
    const dispatch = useDispatch();


    return (
        <div className='sidebar'>
            <Button
                startIcon={<AddIcon fontSize='large' />}
                className='sidebar_compose'
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SidebarOption Icon={Inbox} title='Inbox' number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title='Starred' number={54} />
            <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
            <SidebarOption Icon={LabelImportantIcon} title='Important' number={54} />
            <SidebarOption Icon={NearMeIcon} title='Sent' number={54} />
            <SidebarOption Icon={NoteIcon} title='Drafts' number={54} />
            <SidebarOption Icon={ExpandMoreIcon} title='More' />

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar