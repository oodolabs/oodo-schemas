var valid = [{
  "msg_id": "ba0fcf60-44d3-4499-877e-c8d65c239730",
  "msg_body": "how many people between Tuesday and Friday",
  "outcome": {
    "intent": "query_metrics",
    "entities": {
      "metric": {
        "value": "metric_visitors",
        "body": "people"
      }
    },
    "confidence": 0.979
  }
}, {
  "msg_id": "ba0fcf60-44d3-4499-877e-c8d65c239730",
  "msg_body": "how many people between Tuesday and Friday",
  "outcome": {
    "intent": "query_metrics",
    "entities": {
      "datetime": [{
        "value": {
          "from": "2013-10-21T00:00:00.000Z",
          "to": "2013-10-22T00:00:00.000Z"
        },
        "body": "Tuesday"
      }, {
        "value": {
          "from": "2013-10-24T00:00:00.000Z",
          "to": "2013-10-25T00:00:00.000Z"
        },
        "body": "Friday"
      }]
    },
    "confidence": 0.979
  }
}, {
  "msg_id": "ba0fcf60-44d3-4499-877e-c8d65c239730",
  "msg_body": "how many people between Tuesday and Friday",
  "outcome": {
    "intent": "query_metrics",
    "entities": {
      "metric": {
        "value": "metric_visitors",
        "body": "people",
        "metadata": "{'code' : 324}"
      },
      "datetime": [{
        "value": {
          "from": "2013-10-21T00:00:00.000Z",
          "to": "2013-10-22T00:00:00.000Z"
        },
        "body": "Tuesday"
      }, {
        "value": {
          "from": "2013-10-24T00:00:00.000Z",
          "to": "2013-10-25T00:00:00.000Z"
        },
        "body": "Friday"
      }]
    },
    "confidence": 0.979
  }
}, {
  "msg_id": "f05a6996-1c1e-459d-affa-f80c8752fe65",
  "msg_body": "satellites to read in the kitchen",
  "outcome": {
    "intent": "adjust_lights",
    "entities": {
      "location": {
        "end": 33,
        "start": 26,
        "value": "kitchen",
        "body": "kitchen",
        "suggested": true
      }
    },
    "confidence": 0.929
  }
}];


var invalid = [
  "hello", {
    "msg_id": "ba0fcf60-44d3-4499-877e-c8d65c239730",
    "msg_body": "how many people between Tuesday and Friday",
    "outcome": {
      "intent": "query_metrics",
      "entities": {
        "datetime": [{
          "value": {
            "from": "2013-10-21T00:00:00.000Z",
            "to": "2013-10-22T00:00:00.000Z"
          },
          "body": "Tuesday"
        }, {
          "value": {
            "from": "2013-2-30T00:00:00.000Z", // Bad date
            "to": "2013-10-25T00:00:00.000Z"
          },
          "body": "Friday"
        }]
      },
      "confidence": 0.979
    }
  }, {
    "msg_id": "ba0fcf60-44d3-4499-877e-c8d65c239730",
    "msg_body": "how many people between Tuesday and Friday",
    "outcome": {
      "intent": "query_metrics",
      "entities": {
        "datetime": [{
          "value": {
            "from": "2013-10-21T00:00:00.000Z",
            "to": "2013-10-22T00:00:00.000Z"
          },
          "extra": "one", // Additional property
          "body": "Tuesday"
        }, {
          "value": {
            "from": "2013-2-28T00:00:00.000Z",
            "to": "2013-10-25T00:00:00.000Z"
          },
          "body": "Friday"
        }]
      },
      "confidence": 0.979
    }
  }
  ];

  module.exports = {
    valid: valid,
    invalid: invalid,
    schema: "http://schema.oodo.co/state/external.wit.ai"
  };
