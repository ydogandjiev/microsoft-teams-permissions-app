// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { useEffect } from 'react';
// import ScanBarCode from './ScanBarCode';
// import GetGeoLocation from './GetGeoLocation';
import CaptureImage from './CaptureImage';
import CaptureImageWeb from './CaptureImageWeb';
import PeoplePicker from './PeoplePicker';
// import CaptureAudio from './CaptureAudio';
// import CaptureVideo from './CaptureVideo';
import CaptureAudioWeb from './CaptureAudioWeb';
import CaptureVideoWeb from './CaptureVideoWeb';
import GetLocationWeb from './GetLocationWeb';
import GetNotificationWeb from './GetNotificationWeb';
import * as microsoftTeams from "@microsoft/teams-js";
import Segment from 'react-segment-analytics';
/**
 * The 'Tab' contains all the components
 * of your app.
 */
const Tab = () => {
  useEffect(() => {
    // initializing microsoft teams sdk
    microsoftTeams.app.initialize();
  })

  const rowq = {
    rowd: {
      width: '100%',
      display: 'table',
    },
  } as const;

  return (

    <div style={rowq.rowd} >
      <>
        <div className="Grid">
          <Segment
            /* Component to capture image(s) */
            children={<CaptureImage />} writeKey={''}
          />
          {
            // Commenting out this code as these API's are currently having bug.

            // <Segment
            //   /* Component to Get/Show geo-Location */
            //   children={<GetGeoLocation />} writeKey={''}
            // />
            //  <Segment 
            //   /* Component to capture audio */
            //   children={<CaptureAudio />} writeKey={''}
            // />
          }
        </div>
        <div>
          {
            // Component to scan barcode
            // <Segment
            //children = {< ScanBarCode />} writeKey={''}
            ///>
            //<Segment
            /* Component to capture video */
            //children={<CaptureVideo />} writeKey={''}
            ///>
          }
          <Segment
            /* Component to show selected people */
            children={<PeoplePicker />} writeKey={''}
          />
        </div>
      </>
      <>
        <div className='Grid'>
          <Segment
            /* Component to capture image in browser */
            children={<CaptureImageWeb />} writeKey={''}
          />
          <Segment
            /* Component to Get/Show geo-Location in browser */
            children={<GetLocationWeb />} writeKey={''}
          />

        </div>
        <div className='Grid'>
          <Segment
            /* Component to capture audio in browser */
            children={<CaptureAudioWeb />} writeKey={''}
          />
          <Segment
            /* Component to Get notification in browser */
            children={<GetNotificationWeb />} writeKey={''}
          />
        </div>
        <div className='Grid'>
          <Segment
            /* Component to capture video in browser */
            children={<CaptureVideoWeb />} writeKey={''}

          />
        </div>
      </>
    </div>
  );
}

export default Tab;