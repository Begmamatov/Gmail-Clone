import { Checkbox, IconButton } from '@material-ui/core'
import { ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import React from 'react'
import MailRow from '../MailRow'
import Section from '../Section'

import './index.css'

function MailList() {

    return (
        <div className='mailList'>
            <div className="mailList_settings">
                <div className="mailList_settingsLeft">
                    <Checkbox />
                    <IconButton >
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mailList_settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>

            <div className="mailList_section">
                <Section Icon={Inbox} title='Primary' color='red' selected />
                <Section Icon={People} title='Social' color='#1a73e8' />
                <Section Icon={LocalOffer} title='Promtions' color='green' />
            </div>

            <div className="mailList_list">
                <MailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a test'
                    time='10pm' />
                <MailRow
                    title='Diyor'
                    subject='Github project'
                    description='Salom qalaysan. Github ga qara, bitta pull qilib olib ishni davom etchi.'
                    time='12pm' />
            </div>
        </div>
    )
}

export default MailList