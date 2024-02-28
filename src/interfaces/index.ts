export interface IAppResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IDataSongs {
  id: number;
  title: string;
  image: string;
}

export interface IDataCurrentPlaylists {
  id: number;
  title: string;
  artists: string;
  image: string;
}