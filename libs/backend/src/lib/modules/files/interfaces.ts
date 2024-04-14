export enum FileTypes {
  Audio = 'audio',
  Image = 'image',
}

export interface IFile {
  id?: string;
  filename?: string;
  bucket?: string;
}
