export interface IS3MinioConfig {
  accessKeyId: string;
  secretAccessKey: string;
  endpoint: string;
  port: number;
  region: string;
}

export interface S3UploadParams {
  bucket: string;
  key: string;
  /** File buffer */
  body: any;
}

export interface S3GetParams {
  bucket: string;
  key: string;
}
