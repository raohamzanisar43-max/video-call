import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom';

function VideoRoom() {
     let {roomId}=useParams()


      const myMeeting=async (element)=>{

        const appID = 1121375567 ;
      const serverSecret = "18580d6a36886540a8184107603dce2e";
       const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,
        Date.now().toString(),"Hamza Rao" )
        
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
           container: element,
        sharedLinks: [
          {
            name: 'copy link',
            url:`http://localhost:5173/room/${roomId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        }

        )

      }

  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom