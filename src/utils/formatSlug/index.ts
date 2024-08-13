import { FieldHook } from 'payload/types';

export const formatSlug = (val: string): string => val
  .replace(/ /g, '-')
  .replace(/[^\w-/]+/g, '')
  .toLowerCase();

export const formatSlugValidateHook = (fallback: string): FieldHook => ({ value, originalDoc, data }) => {
  if (typeof value === 'string') {
    return formatSlug(value);
  }
  const fallbackData = (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

  if (fallbackData && typeof fallbackData === 'string') {
    return formatSlug(fallbackData);
  }

  return value;
};
