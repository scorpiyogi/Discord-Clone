import React from "react"
import "./ChatHeader.css"
import NotificationsIcon from "@mui/icons-material/Notifications"
import EditLocationIcon from "@material-ui/icons/EditLocationRounded"
import PeopleAltIcon from "@material-ui/icons/People"
import { IconButton, Input } from "@material-ui/core"
import HelpIcon from "@mui/icons-material/Help"
import InboxIcon from "@mui/icons-material/InboxRounded"
import SearchIcon from "@material-ui/icons/Search"

function ChatHeader({ channelName }) {
  return (
    <div className="ChatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader_hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader_right">
        <IconButton>
          <PeopleAltIcon />
        </IconButton>
        <IconButton>
          <EditLocationIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div className="chatHeader_search">
          <Input placeholder="search" className="chatHeader_search" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <IconButton>
          <InboxIcon />
        </IconButton>
        <IconButton>
          <HelpIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ChatHeader
