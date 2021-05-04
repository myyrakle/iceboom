/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
// @ts-ignore
import axiosStatic, { AxiosInstance } from 'axios';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: any;
}

// 기본 Axios 객체
import { Api } from '@psyrenpark/api';
export const serviceOptions: ServiceOptions = {
  axios: Api
};

const projectName = 'eradmin';
const projectEnv = 'prod';

const v1Api = `${projectName}-${projectEnv}-api-v1`;
const v1Cdn = `${projectName}-${projectEnv}-cdn-v1`;
const v1NoneAuth = `${projectName}-${projectEnv}-noneauth-v1`;
const v1Cms = `${projectName}-${projectEnv}-cms-v1`;

function pathToApiName(path: string): string {
  const firstPath: string = path.split('/')[1];
  let apiName = '';

  switch (apiName) {
    case 'api': {
      apiName = v1Api;
      break;
    }
    case 'cdn': {
      apiName = v1Cdn;
      break;
    }
    case 'noneauth': {
      apiName = v1NoneAuth;
      break;
    }
    case 'cms': {
      apiName = v1Cms;
      break;
    }
  }

  return apiName;
}

const basePath = 'localhost:3000';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class ApiService {
  /**
   *
   */
  static getSelectUser(
    params: {
      /** 그냥 텍스트 */
      foo: string;
      /** 그냥 텍스트2 */
      bar?: string;
      /** 그냥 텍스트 */
      test: string;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      const path = '/select-user';
      let url = basePath + path;
      url = url.replace('{test}', params['test'] + '');

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };
      myInit.queryStringParameters = { foo: params['foo'], bar: params['bar'] };
      myInit.body = null;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.get(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static getUser(
    params: {
      /** 유저 식별자 */
      userId: number;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<GetUserResponse> {
    return new Promise((resolve, reject) => {
      const path = '/cms/user';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };
      myInit.queryStringParameters = { user_id: params['userId'] };
      myInit.body = null;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.get(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static putUser(
    params: {
      /** requestBody */
      body?: PutUserParameter;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<PutUserResponse> {
    return new Promise((resolve, reject) => {
      const path = '/cms/user';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };

      myInit.body = params.body;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.put(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static postUser(
    params: {
      /** requestBody */
      body?: PostUserParameter;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<PostUserResponse> {
    return new Promise((resolve, reject) => {
      const path = '/cms/user';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };

      myInit.body = params.body;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.post(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static deleteUser(
    params: {
      /** 유저 식별자 */
      userId: number;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<DeleteUserResponse> {
    return new Promise((resolve, reject) => {
      const path = '/cms/user';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };
      myInit.queryStringParameters = { user_id: params['userId'] };
      myInit.body = null;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.delete(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static getPost(
    params: {
      /** 포스트 식별자 */
      postId: number;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<GetPostResponse> {
    return new Promise((resolve, reject) => {
      const path = '/user/post';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };
      myInit.queryStringParameters = { post_id: params['postId'] };
      myInit.body = null;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.get(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static putPost(
    params: {
      /** requestBody */
      body?: PutPostParameter;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<PutPostResponse> {
    return new Promise((resolve, reject) => {
      const path = '/user/post';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };

      myInit.body = params.body;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.put(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static postPost(
    params: {
      /** requestBody */
      body?: PostParameter;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<PostPostResponse> {
    return new Promise((resolve, reject) => {
      const path = '/user/post';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };

      myInit.body = params.body;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.post(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static deletePost(
    params: {
      /** 유저 식별자 */
      postId: number;
    } = {} as any,
    options: IRequestOptions = {},
    loadingCallback?: any
  ): Promise<DeletePostResponse> {
    return new Promise((resolve, reject) => {
      const path = '/user/post';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };
      myInit.queryStringParameters = { post_id: params['postId'] };
      myInit.body = null;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.delete(apiName, url, myInit, loadingCallback);
    });
  }
  /**
   *
   */
  static getUserCount(options: IRequestOptions = {}, loadingCallback?: any): Promise<UserCountResponse> {
    return new Promise((resolve, reject) => {
      const path = '/cdn/user-count';
      let url = basePath + path;

      const myInit = {
        queryStringParameters: {},
        body: {},
        headers: {}
      };

      myInit.body = null;

      myInit.headers = {};

      const apiName = pathToApiName(path);

      serviceOptions.axios.get(apiName, url, myInit, loadingCallback);
    });
  }
}

export interface Response {
  /** 그냥 텍스트 */
  foo: string;

  /** 그냥 텍스트2 */
  bar: string;
}

export interface GetUserResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;

  /** 유저 식별자 */
  user_id: number;

  /** 이름 */
  name: string;

  /** 나이 */
  age: number;
}

export interface PutUserParameter {
  /** 유저 식별자 */
  user_id: number;

  /** 이름 */
  name: string;

  /** 나이 */
  age: number;
}

export interface PutUserResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;
}

export interface PostUserParameter {
  /** 이름 */
  name: string;

  /** 나이 */
  age: number;
}

export interface PostUserResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;

  /** 유저 식별자 */
  user_id: number;
}

export interface DeleteUserResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;
}

export interface GetPostResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;

  /** 유저 식별자 */
  post_id: number;

  /** 제목 */
  title: string;

  /** 내용 */
  content: string;
}

export interface PutPostParameter {
  /** 유저 식별자 */
  post_id: number;

  /** 제목 */
  title: string;

  /** 내용 */
  content: number;
}

export interface PutPostResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;
}

export interface PostParameter {
  /** 제목 */
  name: string;

  /** 내용 */
  content: number;
}

export interface PostPostResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;

  /** 유저 식별자 */
  post_id: number;
}

export interface DeletePostResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;
}

export interface UserCountResponse {
  /** 성공여부 */
  success: boolean;

  /** 메세지 */
  message: string;

  /** 유저 수 */
  user_count: number;
}
