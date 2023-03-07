import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const config = new pulumi.Config();
const project = config.require("project");
// Create a GCP resource (Storage Bucket)
const pubsubTopic = new gcp.pubsub.Topic("test-topic", {
    name: "test-topic", 
});

const pubsubTopic2 = new gcp.pubsub.Topic('test-topic-2', {
  name: 'test-topic-2'
});

const svc_acct_name_1 = "test-service-account";
const svc_acct_name_2 = "test-service-account-2";
const svcAcct = gcp.serviceaccount.Account.get("test-service-account", `${svc_acct_name_2}@${project}.iam.gserviceaccount.com`, undefined, { dependsOn: [pubsubTopic2]});

const iamBinding1 = new gcp.pubsub.TopicIAMBinding("test-iam-binding-1", {
    topic: pubsubTopic.name,
    members: [svcAcct.email.apply(email => `serviceAccount:${email}`)],
    role: "roles/pubsub.publisher",
});

const iamBinding2 = new gcp.pubsub.TopicIAMBinding("test-iam-binding-2", {
  topic: pubsubTopic.name,
  members: [svcAcct.email.apply(email => `serviceAccount:${email}`)],
  role: "roles/pubsub.publisher",
});
