type ClassRef<T> = new (...args: any[]) => T;

const buildRequestTransformer = (target: any, classType: ClassRef<any>) => {
 
};

const buildResponseTransformer = () => {
  // Implementation of response transformer
};

export { buildRequestTransformer, buildResponseTransformer };
