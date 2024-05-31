import styles from './style.module.scss';

export const tpl = ` 
  <label class=${styles.label} for="file"></label>
    {{#each inputs}}
    {{{this}}}
    {{/each}}
  <button class=${styles.button} type="submit"></button>
`;
