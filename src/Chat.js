import React, { useEffect, useRef, useState } from "react"
import "./Chat.css"
import ChatHeader from "./ChatHeader"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import { Input } from "@material-ui/core"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import GifIcon from "@material-ui/icons/Gif"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import Message from "./Message"
import { useSelector } from "react-redux"
import { selectChannelId, selectChannelName } from "./features/appSlice"
import { selectUser } from "./features/userSlice"
import db from "./firebase"
import firebase from "firebase"

function Chat() {
  const elementRef = useRef()
  const channelId = useSelector(selectChannelId)
  const user = useSelector(selectUser)
  const channelName = useSelector(selectChannelName)

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot(
          (snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())),
          elementRef.current.scrollIntoView()
        )
    }
  }, [channelId])

  const sendMessage = (e) => {
    e.preventDefault()

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    })

    setInput("")
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat_messages">
        {messages.map((message) => (
          <Message
            key="key"
            timestamp={message.timestamp}
            user={message.user}
            message={message.message}
          />
        ))}
        <div ref={elementRef} />
      </div>
      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form>
          <Input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />

          <button
            disabled={!channelId}
            className="chat_inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message.
          </button>
        </form>
        <div className="chat_inputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat
