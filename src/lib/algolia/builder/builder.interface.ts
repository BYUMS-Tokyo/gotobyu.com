import type { Element } from 'hast';
import type { Heading } from 'mdast';
import type { ValuesType } from 'utility-types';
import type { HEADING_TAGS } from './builder.constants';
/**
 * type for heading depth
 */
export type HeadingDepth = Heading['depth'];

/**
 * type for heading tag
 */
export type HeadingTag = ValuesType<typeof HEADING_TAGS>;

/**
 * type for indexable object in algolia
 */
export interface Algoliast {
  /** link to the content */
  permalink: string;
  /** h1 heading */
  h1: string;
  /** h2 heading */
  h2: string;
  /** h3 heading */
  h3: string;
  /** h4 heading */
  h4: string;
  /** h5 heading */
  h5: string;
  /** h6 heading */
  h6: string;
  /** content body */
  content: string;
  /** tags */
  _tags: string[];
}

/**
 * type for unified settings
 */
export interface Settings {
  /** base URL for Algoliast permalink */
  baseUrl: string;
  /** filter function to exclude node */
  exclude?: (node: Element) => boolean;
}
