import styles from './style.module.scss';

export const tpl = ` 
    <div class=${styles.profileInfo}>
        {{#each inputs}}
            {{{this}}}
        {{/each}}
    </div> 
    {{{SaveBtn}}}   
`;
