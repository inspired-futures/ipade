var config = {
  "useNicks": false,
  "enableUserRolesBasedOnToken": false,
  "webrtcIceTcpDisable": false,
  "defaultSipNumber": "",
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
      "min": 360,
      "max": 1080
    }
  }},
  "hiddenDomain": "recorder.pade.chat",
  "videoQuality": {
    "minHeightForQualityLvl": {
      "720": "high",
      "180": "low",
      "360": "standard"
    },
    "maxBitratesVideo": {"VP9": {
      "standard": 500000,
      "high": 1500000,
      "low": 200000
    }},
    "preferredCodec": "VP9"
  },
  "enableP2P": true,
  "enableLipSync": false,
  "minHDHeight": 540,
  "enableLayerSuspension": true,
  "websocket": "wss://pade.chat:5443/ws/",
  "startAudioMuted": 9,
  "enableForcedReload": true,
  "desktopSharingFrameRate": {
    "min": 5,
    "max": 25
  },
  "channelLastN": -1,
  "adaptiveLastN": false,
  "hosts": {
    "domain": "pade.chat",
    "muc": "conference.pade.chat"
  },
  "testing": {
    "capScreenshareBitrate": 1,
    "octo": {"probability": 0}
  },
  "prejoinPageEnabled": false,
  "useTurnUdp": false,
  "desktopSharingChromeDisabled": false,
  "disableAdaptiveSimulcast": true,
  "enableUnifiedOnChrome": true,
  "stereo": false,
  "enableClosePage": false,
  "ofmeetStreamPort": "8080",
  "disableAudioLevels": true,
  "ofmeetStreamKey": "a6vg-e64h-b73h-ts1q-ft4e",
  "useIPv6": false,
  "startBitrate": 800,
  "enableWelcomePage": true,
  "maxFullResolutionParticipants": -1,
  "useStunTurn": false,
  "bosh": "https://pade.chat:5443/http-bind/",
  "enableNoAudioDetection": true,
  "useNewBandwidthAllocationStrategy": true,
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
  "iceServers": "{'iceServers':[{'url': 'stun:jitsi.free-solutions.org:3479'},{url: 'turn:jitsi.free-solutions.org:3479', credential: 'tatafutz',username: 'turnuser'}]}",
  "ofmeetWebAuthnEnabled": false,
  "ofmeetWinSSOEnabled": false,
  "p2p": {
    "disableH264": true,
    "enableUnifiedOnChrome": true,
    "preferH264": false,
    "preferredCodec": "VP9",
    "useStunTurn": true,
    "enabled": true
  },
  "disableRtx": false,
  "desktopSharingChromeSources": [
    "screen",
    "window",
    "tab"
  ],
  "webrtcIceUdpDisable": false,
  "disableSimulcast": true,
  "startAudioOnly": false,
  "ofmeetLiveStream": false,
  "focusUserJid": "focus@pade.chat",
  "isBrand": false
};