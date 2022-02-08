export type ColumnType = {
  id: number;
  title: string;
  description: string;
  userId?: number;
};
export type UserProps = {
  email: string;
  name?: string;
  password: string;
};

export type UserAuthResponseDto = {
  token: string;
  columns: ColumnType[];
  name: string;
};

export type ColumnResponseDto = ColumnType[];

export type GetAxiosConfigType = {
  baseUrl: string;
  headers: string;
};

export type ColumnTypeCreate = {
  title: string;
  description: string;
};

export type ColumnTypeChange = {
  title: string;
  description: string;
};

export type ChangeColumnType = {
  title: string;
  description: string;
  id: number;
};
