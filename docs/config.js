var config = {
  "useNicks": false,
  "webrtcIceTcpDisable": false,
  "defaultSipNumber": "",
  "enableTcc": true,
  "enableRtpStats": true,
  "noticeMessage": "",
  "enableRecording": false,
  "resolution": 720,
  "constraints": {"video": {
    "width": {
      "ideal": 1280,
      "min": 426,
      "max": 3840
    },
    "aspectRatio": 16 / 9,
    "height": {
      "ideal": 720,
      "min": 240,
      "max": 2160
    }
  }},
  "hiddenDomain": "recorder.pade.chat",
  "videoQuality": {
    "minHeightForQualityLvl": {
      "720": "high",
      "180": "low",
      "360": "standard"
    },
    "maxBitratesVideo": {
      "standard": 500000,
      "high": 1500000,
      "low": 200000
    }
  },
  "enableLipSync": false,
  "minHDHeight": 540,
  "enableLayerSuspension": true,
  //"websocket": "wss://pade.chat:5443/ws/",
  "startAudioMuted": 9,
  "channelLastN": -1,
  "adaptiveLastN": false,
  "hosts": {
    "domain": "pade.chat",
    "focus": "focus.pade.chat",
    "muc": "conference.pade.chat"
  },
  "testing": {
    "capScreenshareBitrate": 1,
    "octo": {"probability": 0}
  },
  "prejoinPageEnabled": false,
  "desktopSharingChromeDisabled": false,
  "disableAdaptiveSimulcast": true,
  "stereo": false,
  "enableClosePage": true,
  "disableAudioLevels": true,
  "useIPv6": false,
  "startBitrate": 800,
  "enableWelcomePage": true,
  "maxFullResolutionParticipants": -1,
  "useStunTurn": false,
  "openBridgeChannel": "websocket",
  "bosh": "https://pade.chat:5443/http-bind/",
  "enableNoAudioDetection": true,
  "defaultLanguage": "en",
  "useRoomAsSharedDocumentName": false,
  "recordingType": "colibri",
  "clientNode": "http://igniterealtime.org/ofmeet/jitsi-meet/",
  "conferences": [],
  "enableNoisyMicDetection": true,
  "desktopSharingFirefoxDisabled": false,
  "logStats": false,
  "useRtcpMux": true,
  "requireDisplayName": true,
  "startVideoMuted": 9,
  "adaptiveSimulcast": false,
  "ofmeetWinSSOEnabled": false,
  "p2p": {
    "disableH264": true,
    "preferH264": true,
    "useStunTurn": false,
    "enabled": true
  },
  "disableRtx": false,
  "desktopSharingChromeSources": [
    "screen",
    "window",
    "tab"
  ],
  "webrtcIceUdpDisable": false,
  "disableSimulcast": false,
  "startAudioOnly": false,
  "focusUserJid": "focus@pade.chat",
  "enableRemb": true
};