import React, { memo } from 'react';
import ShareIcon from '../../../assets/share.svg';
import CopyIcon from '../../../assets/copy.svg';

const navigatorHasShare = navigator.share

const URL = 'http://localhost:3001/';

function Actions({ post, subject }) {
    const { id, title } = post

    const shareInfo = () => {
        navigator.share({
            title: `PWA News - ${subject}`,
            text: title,
            url: URL
        })
    }

    const copyInfo = () => {
        navigator.clipboard.writeText(`${title} - *Learn more about in* ${URL}/${subject}/${id}`)
    }

    const renderActions = () => {
        const action = navigatorHasShare ? shareInfo : copyInfo

        const icon = navigatorHasShare ? ShareIcon : CopyIcon

        return <img alt="icon" src={icon} className="share-icon" onClick={action} width="5%" />
    }

    return (
        <div className="share">
            {renderActions()}
        </div >
    )

}

export default memo(Actions);