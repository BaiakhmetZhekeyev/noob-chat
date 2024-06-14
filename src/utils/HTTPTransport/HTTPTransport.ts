enum METHODS {
    DELETE = 'DELETE',
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT'
}

interface RequestOption {
    data?: never,
    headers?: Record<string, string>,
    method: METHODS,
    timeout?: number
}

type HTTPMethod = (url: string, options: RequestOption) => Promise<XMLHttpRequest>

function queryStringify(data: Record<string, string | object>): string {
  const params = Object.entries(data).map(([key, value]) => {
    if (typeof value === 'object') {
      value.toString();
    }
    return `${key}=${value}`;
  });

  return params.join('&');
}

export class HTTPTransport {
  get: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.GET });

  post: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.POST });

  put: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.PUT });

  delete: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.DELETE });

  private request: HTTPMethod = async (url, options): Promise<XMLHttpRequest> => {
    const {
      method, data, headers, timeout = 5000,
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      const requestUrl = isGet && !!data ? `${url}?${queryStringify(data)}` : url;
      xhr.open(method, requestUrl);

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
