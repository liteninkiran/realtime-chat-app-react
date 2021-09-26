import React from 'react';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {
    if(isCreating) {
        return (
            <div className="channel__container">
                {/* Create Channel */}
                <h1>Create Channel</h1>
            </div>
        )
    }

    if(isEditing) {
        return (
            <div className="channel__container">
                {/* Edit Channel */}
                <h1>Edit Channel</h1>
            </div> 
        )
    }

    const EmptyState = () => (
        <div className="channel-empty__container">
            <p className="channel-empty__first">This is the beginning of your chat history.</p>
            <p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
        </div>
    )

    return (
        <div className=" channel__container">
            {/* Channel */}
            <h1>Channel Container</h1>
        </div>
    );
}

export default ChannelContainer;
