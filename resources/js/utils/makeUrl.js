/**
 * Make a URL out of an existing URL or string, optionally altering or creating
 * query parameters.
 *
 * If a URL already contains a named param and that same name is defined in the
 * params argument as `null` or `undefined`, it will be removed. Any new params
 * are added to the existing URL. Any existing param values will be changed to
 * those specified. Any params in the URL but not defined as `params` will be
 * left untouched.
 *
 * @param {string|URL} url
 * @param {object} [params={}]
 * @returns URL
 */
export default function makeUrl(url, params = {}) {
    if (!url instanceof URL)
        url = new URL(url);

    const searchParams = url.searchParams;

    Object.keys(params).forEach((key) => {
        if (params[key] === null || params[key] === undefined)
            return searchParams.delete(key);

        searchParams.set(key, params[key]);
    });

    url.search = searchParams.toString();

    return url;
}