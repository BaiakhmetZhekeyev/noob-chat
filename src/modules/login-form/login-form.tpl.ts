import styles from './style.module.scss';

export const tpl = ` 
        <span class=${styles.headerContainer}>{{headerText}}</span>
        <div>
        {{#each inputs}}
            {{{this}}}
        {{/each}}
        </div>
        <div class=${styles.buttonContainer}>
            {{{LoginBtn}}}
            {{{RegisterLink}}}
        </div> 
`;
