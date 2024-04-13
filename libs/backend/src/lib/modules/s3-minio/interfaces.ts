export interface IS3MinioConfig {
  accessKeyId: string;
  secretAccessKey: string;
  endpoint: string;
  port: number;
  region: string;
}

export interface UploadParams {
  Bucket: string;
  Key: string;
  /** File buffer */
  Body: any;
}
