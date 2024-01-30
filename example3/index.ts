import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";



const testTopic1 = new gcp.pubsub.Topic("test-topic1", {});

const testTopic2 = new gcp.pubsub.Topic("test-topic2", {});

const testTopic3 = new gcp.pubsub.Topic("test-topic3", {}, { dependsOn: [testTopic1] });


