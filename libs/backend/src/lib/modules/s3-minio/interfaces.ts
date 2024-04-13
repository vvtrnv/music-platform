export interface IS3MinioConfig {
  accessKeyId: string;
  secretAccessKey: string;
  endpoint: string;
  port: number;
  region: string;
}

export interface UploadParams {
  bucket: string;
  key: string;
  /** File buffer */
  body: any;
}
