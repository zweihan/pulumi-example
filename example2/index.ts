import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const topic = new gcp.pubsub.Topic("topic", {
  name: 'test-topic'
});


const subscription = new gcp.pubsub.Subscription('subscription', {
  name: 'test-subscription',
  topic: topic.id
});