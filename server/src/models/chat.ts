import mongoose from "mongoose";

interface IChat {
  participants: mongoose.Types.ObjectId[];
  isGroup: boolean;
  groupName?: string;
  groupAvatar?: string;
  createdBy?: mongoose.Types.ObjectId;
  lastMessage?: mongoose.Types.ObjectId;
}

const chatSchema = new mongoose.Schema<IChat>(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],

    isGroup: { type: Boolean, default: false },
    groupName: {
      type: String,
    },
    groupAvatar: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  {
    timestamps: true,
  },
);

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
