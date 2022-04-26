export interface Post {
  id?: number | string;
  title: string;
  img: string;
  desc: string;
}

export interface Alert {
  msg: string;
  type: 'N' | 'Y';
}
