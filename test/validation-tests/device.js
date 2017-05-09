var valid = [
  {
    "name": "Office",
    "id": "cb3a5d6402",
    "naturalIdType": "sonos",
    "naturalId": "asjdg^NCSDHd7",
    "signatures": {
      "oodo:manufacturer": "Sonos",
      "oodo:productName": "Sonos Player",
      "oodo:productType": "MediaPlayer",
      "oodo:thingType": "MediaPlayer"
    },
    "thing": "12d648e0-8158-428a-8b9b-fedb7e7f55a3",
    "channels": [{
      "id": "media",
      "protocol": "media",

      "topic": "$device/cb3a5d6402/channels/media",
      "schema": "http://schemas.oodo.co/protocol/media",
      "supportedMethods": ["playUrl"],
      "supportedEvents": ["state"]
    }],

    "topic": "$device/cb3a5d6402",
    "schema": "http://schemas.oodo.co/service/device",
    "supportedMethods": ["start", "stop"],
    "supportedEvents": [],
  }
];

var invalid = [];

module.exports = {
  valid: valid,
  invalid: invalid,
  schema: "http://schema.oodo.co/model/device"
};
