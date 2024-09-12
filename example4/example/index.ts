import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";



const pubsub1 = new gcp.pubsub.Topic("test-topic11", {name: 'test-topic1'});
const pubsub2 = new gcp.pubsub.Topic("test-topic2", {name: 'test-topic2'});


const sub1 = new gcp.pubsub.Subscription('test-sub1', {
  name: 'test-sub1',
  topic: pubsub1.name,
});

const sub2 = new gcp.pubsub.Subscription('test-sub2', {
  name: 'test-sub2',
  topic: pubsub2.name,
});
