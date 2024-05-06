import { Hash, MessageCircle } from "lucide-react";

import { MobileToggle } from "@/components/mobile-toggle";
import { UserAvatar } from "@/components/user-avatar";
import { SocketIndicator } from "@/components/socket-indicator";

import { ChatVideoButton } from "./chat-video-button";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 dark:bg-[#212c47] bg-[#ecf2ff] border-blue-500 dark:border-blue-600 border-b-2">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <MessageCircle className="w-5 h-5 text-blue-500 dark:text-blue-300 mr-2" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="h-8 w-8 md:h-8 md:w-8 mr-2" />
      )}
      <p className="font-semibold text-md text-blue-500 dark:text-blue-200">{name}</p>
      <div className="ml-auto flex items-center">
        {type === "conversation" && <ChatVideoButton />}
        <SocketIndicator />
      </div>
    </div>
  );
};
