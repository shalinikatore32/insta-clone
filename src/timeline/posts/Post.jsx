import React from 'react'
import "./post.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post(post) {
  return (
    <>
      <div className="post">
        <div className="post_header">

          <div className="post_headeravtar" >
            <Avatar>{post.user.charAt(0).toUpperCase()}</Avatar>
            {post.user} . <span>{post.timeStamp}</span>
          </div>
          <MoreHorizIcon />

        </div>
        <div className="post_image">
          <img src={post.postImage} alt='' className='image' />
        </div>
        <div className="post_footer">
          <div className="post_footericon">
            <div className="post_iconmain">
              <FavoriteBorderIcon className='postIcon' />
              <ChatBubbleOutlineIcon className='postIcon' />
              <TelegramIcon className='postIcon' />

            </div>

            <div className="post_iconSave">
              <BookmarkBorderIcon className='postIcon' />
            </div>

          </div>
          <span>liked by {post.likes} people.</span>

        </div>

      </div>
    </>
  )
}

export default Post;
