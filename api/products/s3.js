const aws = require("aws-sdk");
// import aws from "aws-sdk";
const crypto = require("crypto");
const { promisify } = require("util");
// import crypto from "crypto";
// import { promisify } from "util";

const region = "us-east-2"; //region the bucket exists in
const bucketName = "nana-soaps-products"; //name of the bucket
const accessKeyId = process.env.S3_ACCESS_KEY; //access key for bucket
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY; //secret access key for bucket

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "4",
});

async function generateUploadURL() {
  //   const rawBytes = await crypto.randomBytes(16);
  //   const imageName = rawBytes.toString("hex");
  const imageName = "random image name";

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}

module.exports = { generateUploadURL };
