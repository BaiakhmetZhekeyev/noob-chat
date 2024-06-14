import styles from './style.module.scss';

export const tpl = `
<div class=${styles.changeProfileInfo}>
    <div class=${styles.changeProfileInfoBox}>
        {{{Avatar}}}
        <form class=${styles.changeProfileInfoForm}>
            {{{ChangeProfileForm}}}
        </form>
    </div>
</div>`;
