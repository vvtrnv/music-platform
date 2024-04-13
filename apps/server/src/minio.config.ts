export const minioConfig = {
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  endpoint: process.env.S3_ENDPOINT,
  port: +process.env.S3_PORT || 9000,
  region: process.env.S3_REGION || 'us-east-1',
};
