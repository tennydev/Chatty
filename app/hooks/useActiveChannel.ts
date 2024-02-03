import { useEffect, useState } from "react";
import useActiveList from "./useActiveList";
import { Channel, Members } from "pusher-js";
import { pusherClient } from "../libs/pusher";

const useActiveChannel = () => {
  const { set, add, remove } = useActiveList();
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

  useEffect(() => {
    let channel = activeChannel;

    if (!channel) {
      channel = pusherClient.subscribe('presence-chatty');
      setActiveChannel(channel);
    }

    // this session subscribe to global ActiveList[]
    channel.bind('pusher:subscription_succeeded', (members: Members) => {
      const initialMembers: string[] = [];

      // not a normal array of {}, weird Class
      // member.id = session.user.email
      members.each((member: Record<string, any>) => initialMembers.push(member.id));
      set(initialMembers);
    });

    channel.bind("pusher:member_added", (member: Record<string, any>) => {
      add(member.id);
    });

    channel.bind("pusher:member_removed", (member: Record<string, any>) => {
      remove(member.id)
    });

    return () => {
      // unbinding
      if (activeChannel) {
        pusherClient.unsubscribe('presence-chatty');
        setActiveChannel(null);
      }
    }
  },[activeChannel, set, add, remove])
}

export default useActiveChannel;

