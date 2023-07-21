import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";



const testTopic1 = new gcp.pubsub.Topic("test-topic1", {});

const testTopic2 = new gcp.pubsub.Topic("test-topic2", {});


