import React from 'react'
import Sidebar from './Sidebar'
import { useConversations } from '../contexts/ConversationsProvider'
import OpenConversation from './OpenConversation'
export default function Dashboard(props) {
    const { selectedConversation } = useConversations()
    return (
        <div className="d-flex" style={{height: '100vh'}}>
            <Sidebar id={props.id}></Sidebar>
            {selectedConversation && <OpenConversation/>}
        </div>
    )
}
