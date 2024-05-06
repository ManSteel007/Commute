import { Hash, MessageCircle } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}

export const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-blue-500 dark:bg-blue-900 flex items-center justify-center">
          <MessageCircle className="h-12 w-12 text-blue-100 dark:text-blue-200" />
        </div>
      )}
      <p className="text-xl md:text-3xl font-bold">
        {type === "channel" ? "Welcome to " : ""}
        {name}
      </p>
      <p className="text-blue-600 dark:text-blue-400 text-sm">
        {type === "channel"
          ? `This is the start of the #${name} channel.`
          : `This is the start of your conversation with ${name}`}
      </p>
    </div>
  );
};
