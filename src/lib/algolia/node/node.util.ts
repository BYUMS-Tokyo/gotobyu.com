import { readFile, stat } from 'fs/promises';
import algoliasearch from 'algoliasearch';
import type { Element } from 'hast';
import { minify } from 'html-minifier';
import {
  Algoliast,
  toAlgoliasts,
  resolvePathToHtmlFile,
} from '@l/algolia/builder';
import {
  mapToOperations,
  algoalistEqual,
  algoalistSkip,
} from '@l/algolia/client';

/**
 * minify html
 *
 * @param html html as string
 * @returns minified html
 */
export const minifyHtml = (html: string) =>
  minify(html, { collapseWhitespace: true });

/**
 * check if the file exists
 *
 * @param path path to a file
 * @returns whether the file exists
 */
export const exists = async (path: string): Promise<boolean> =>
  !!(await stat(path).catch(() => false));

/**
 * parse html file and index in algolia
 *
 * @param path realative path to html file from /pages
 */
export const indexDocument = async (path: string): Promise<void> => {
  // skip indexing(used in CI)
  if (process.env.ALGOLIA_BUILD_INDEX !== 'true') {
    process.stdout.write(
      `\x1b[33mwarn\x1b[0m  - Skip indexing ${path} since "ALGOLIA_BUILD_INDEX" is not set\n`,
    );
    return;
  }

  const htmlFilePath = resolvePathToHtmlFile(path);

  // do nothing if html file does not exist(at build time)
  if (!(await exists(htmlFilePath))) {
    process.stdout.write(
      `\x1b[33mwarn\x1b[0m  - ${htmlFilePath} does not exist. Skipping indexing it...\n`,
    );
  }

  const html = await readFile(htmlFilePath);
  const minifiedHtml = Buffer.from(minifyHtml(html.toString()));
  const newAlgoliasts = await toAlgoliasts(minifiedHtml, {
    baseUrl: path,
    exclude: (node: Element) => node.properties?.dataNoindex === 'true',
  });

  if (process.env.NEXT_PUBLIC_ALGOLIA_APP_ID === undefined)
    throw new Error(
      'environment variable "NEXT_PUBLIC_ALGOLIA_APP_ID" must be defined',
    );
  if (process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME === undefined)
    throw new Error(
      'environment variable "NEXT_PUBLIC_ALGOLIA_INDEX_NAME" must be defined',
    );
  if (process.env.ALGOLIA_ADMIN_API_KEY === undefined)
    throw new Error('env variable "ALGOLIA_ADMIN_API_KEY" must be defined');

  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_API_KEY,
  );
  const { results } = await algoliaClient.search<Algoliast>([
    {
      indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
      query: '',
      params: {
        tagFilters: [path],
      },
    },
  ]);
  const existingAlgoliasts = results[0].hits;
  const mappedOperations = mapToOperations(
    process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
    existingAlgoliasts,
    newAlgoliasts,
    algoalistEqual,
    algoalistSkip,
  );
  await algoliaClient
    .multipleBatch(Object.values(mappedOperations).flat())
    .wait();

  process.stdout.write(
    `\x1b[36minfo\x1b[0m  - Finished indexing ${htmlFilePath}\n`,
  );
};
