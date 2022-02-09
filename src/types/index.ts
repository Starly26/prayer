import {loginUserAction, registerUserAction} from '../store/auth/actions';
import {
  changeColumnAction,
  createColumnAction,
  deleteColumnAction,
} from '../store/column/actions';
import {
  changeCommentAction,
  createCommentAction,
  deleteCommentAction,
} from '../store/comments/actions';
import {
  changePrayerAction,
  createPrayerAction,
  deletePrayerAction,
} from '../store/prayers/actions';

export type ColumnType = {
  id: number;
  title: string;
  description: string;
};
export type UserProps = {
  email: string;
  name?: string;
  password: string;
};
export type UserRegisterProps = {
  email: string;
  name: string;
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
  id: number;
};

export type ChangeColumnType = {
  title: string;
  description: string;
  id: number;
};

export type PrayersType = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds?: [number];
};

export type PrayersTypeDto = PrayersType[];

export type ChangePrayerType = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};
export type CreatePrayerType = {
  columnId: number;
  title: string;
  description?: string;
  checked: boolean;
};

export type PrayerCreate = {
  title: string;
};

export type CreatePrayerTypeDto = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
};

export type CommentType = {
  id: number;
  body: string;
  created: Date;
  prayerId: number;
  userId: number;
  card?: PrayersType;
};
export type CommentTypeDto = CommentType[];

export type UserType = {};
export type CommentCreate = {
  body: string;
};

export type CreateCommentType = {
  body: string;
  prayerId: number;
};
export type AddNewCommentId = {
  prayerId: number;
  commentId: number;
};

export type CreateCommentTypeDto = {
  id: number;
  body: string;
  created: Date;
  userId: number;
  card: PrayersType;
  prayerId: number;
};

export type ChangeCommentType = {
  id: number;
  body: string;
};

export type RegisterUserActionType = ReturnType<typeof registerUserAction>;
export type LoginUserActionType = ReturnType<typeof loginUserAction>;

export type ColumnCreateActionType = ReturnType<typeof createColumnAction>;
export type ColumnDeleteActionType = ReturnType<typeof deleteColumnAction>;
export type ColumnChangeActionType = ReturnType<typeof changeColumnAction>;

export type PrayerDeleteActionType = ReturnType<typeof deletePrayerAction>;
export type PrayerCreateActionType = ReturnType<typeof createPrayerAction>;
export type PrayerChangeActionType = ReturnType<typeof changePrayerAction>;

export type CommentDeleteActionType = ReturnType<typeof deleteCommentAction>;
export type CommentCreateActionType = ReturnType<typeof createCommentAction>;
export type CommentChangeActionType = ReturnType<typeof changeCommentAction>;
