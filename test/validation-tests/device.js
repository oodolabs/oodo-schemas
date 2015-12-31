var valid = [
  {
    "name": "Office",
    "id": "cb3a5d6402",
    "naturalIdType": "sonos",
    "naturalId": "asjdg^NCSDHd7",
    "signatures": {
      "dolink:manufacturer": "Sonos",
      "dolink:productName": "Sonos Player",
      "dolink:productType": "MediaPlayer",
      "dolink:thingType": "MediaPlayer"
    },
    "thing": "12d648e0-8158-428a-8b9b-fedb7e7f55a3",
    "channels": [{
      "id": "media",
      "protocol": "media",

      "topic": "$device/cb3a5d6402/channels/media",
      "schema": "http://schemas.dolink.co/protocol/media",
      "supportedMethods": ["playUrl"],
      "supportedEvents": ["state"]
    }],

    "topic": "$device/cb3a5d6402",
    "schema": "http://schemas.dolink.co/service/device",
    "supportedMethods": ["start", "stop"],
    "supportedEvents": [],
  }
];

var invalid = [];

module.exports = {
  valid: valid,
  invalid: invalid,
  schema: "http://schema.dolink.co/model/device"
};
