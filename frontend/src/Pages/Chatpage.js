// import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Chatbox from "../Components/miscellaneous/ChatBox";

import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/chatProvider";
import MyChats from "../Components/miscellaneous/MyChats";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
