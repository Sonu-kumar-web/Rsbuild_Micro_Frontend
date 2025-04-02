
    export type RemoteKeys = 'header-app';
    type PackageType<T> = T extends 'header-app' ? typeof import('header-app') :any;